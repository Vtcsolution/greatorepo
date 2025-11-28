import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Maximize2, Minimize2 } from 'lucide-react';
import axios from 'axios';

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatId, setChatId] = useState(null);
  const [userId] = useState('user_' + Math.random().toString(36).substr(2, 9)); // Temporary userId
  const [askedForName, setAskedForName] = useState(false);
  const chatBodyRef = useRef(null);

  // Load chat history on mount if chat exists
  useEffect(() => {
    if (isOpen && chatId) {
      const fetchChatHistory = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/chat/${chatId}`);
          if (response.data.success) {
            setMessages(response.data.messages.map(msg => ({
              text: msg.content,
              sender: msg.role
            })));
          }
        } catch (error) {
          console.error('Error fetching chat history:', error);
        }
      };
      fetchChatHistory();
    }
  }, [isOpen, chatId]);

  // Auto-scroll to latest message
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // Prevent body scroll only when chat is in full screen
  useEffect(() => {
    if (isOpen && isFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isFullScreen]);

  // Handle sending messages and starting chat
  const handleSendMessage = async (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const userMessage = input.trim();
      setMessages([...messages, { text: userMessage, sender: 'user' }]);
      setInput('');
      setIsTyping(true);

      try {
        // Start chat if no chatId exists
        let currentChatId = chatId;
        if (!currentChatId) {
          const startResponse = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/chat/start`, { userId });
          if (startResponse.data.success) {
            currentChatId = startResponse.data.chatId;
            setChatId(currentChatId);
          } else {
            throw new Error('Failed to start chat');
          }
        }

        // Check if the message is a greeting to ask for name
        const isGreeting = ['hi', 'hello', 'how are you', 'hey'].some(greeting => 
          userMessage.toLowerCase().includes(greeting)
        );

        // Send message to backend
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/chat/send`, {
          chatId: currentChatId,
          userMessage
        });

        if (response.data.success) {
          let botResponse = response.data.response;

          // If greeting and haven't asked for name yet, append name prompt
          if (isGreeting && !askedForName) {
            botResponse += "\nBy the way, what's your name?";
            setAskedForName(true);
          }

          setMessages(prev => [...prev, { text: botResponse, sender: 'ai' }]);

          // If user provides a name (assuming response after name prompt), save it
          if (askedForName && !isGreeting) {
            await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/save-user`, {
              userId,
              name: userMessage
            });
          }
        }
      } catch (error) {
        console.error('Error sending message:', error);
        setMessages(prev => [...prev, { text: 'Sorry, something went wrong.', sender: 'ai' }]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  // Animation variants
  const chatVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 }
  };

  return (
    <div className="font-sans">
      {/* Chat Icon */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-6 right-4 sm:right-6 bg-[#2E7D7B] p-3 rounded-full cursor-pointer shadow-lg hover:bg-[#266966] transition-all duration-300 z-50 flex items-center gap-2 pr-4 group"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6 text-[#F5F6F5]" />
          <span className="text-sm font-semibold text-[#F5F6F5] hidden sm:group-hover:inline">AI Greato</span>
        </motion.div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed ${isFullScreen ? 'inset-0' : 'bottom-20 right-4 sm:right-6'} bg-[#1C2526] rounded-xl shadow-2xl border border-[#2E7D7B]/30 overflow-hidden z-50 flex flex-col`}
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            style={isFullScreen ? { width: '100%', height: '100%' } : { width: '100%', maxWidth: '400px', height: '500px' }}
          >
            {/* Header */}
            <div className="bg-[#2E7D7B] p-4 flex justify-between items-center flex-shrink-0">
              <h3 className="text-lg font-semibold text-[#F5F6F5]">AI Greato Assistant</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="p-2 hover:bg-[#266966] rounded-full transition-all duration-300"
                  aria-label={isFullScreen ? "Minimize chat" : "Maximize chat"}
                >
                  {isFullScreen ? (
                    <Minimize2 className="w-5 h-5 text-[#F5F6F5]" />
                  ) : (
                    <Maximize2 className="w-5 h-5 text-[#F5F6F5]" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-[#266966] rounded-full transition-all duration-300"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5 text-[#F5F6F5]" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div
              id="chat-body"
              ref={chatBodyRef}
              className="p-4 flex-grow overflow-y-auto bg-[#1C2526]"
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-[#2E7D7B] text-[#F5F6F5]'
                        : 'bg-[#266966] text-[#F5F6F5]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#266966] p-3 rounded-lg text-[#F5F6F5]">
                    Typing...
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#1C2526] border-t border-[#2E7D7B]/30 flex-shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleSendMessage}
                placeholder="Type your message..."
                className="w-full p-3 bg-[#2E7D7B]/20 text-[#F5F6F5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D7B] transition-all duration-300"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .font-sans {
          font-family: 'Poppins', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1C2526;
        }

        ::-webkit-scrollbar-thumb {
          background: #2E7D7B;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #266966;
        }

        @media (max-width: 640px) {
          .fixed.bottom-6.right-4 {
            right: 1rem;
            bottom: 1rem;
            transform: scale(0.9);
          }

          .fixed.bottom-20.right-4 {
            right: 1rem;
            bottom: 1.5rem;
            width: calc(100% - 2rem);
            max-width: 350px;
            height: 450px;
          }
        }
      `}</style>
    </div>
  );
};

export default AIChatBot;