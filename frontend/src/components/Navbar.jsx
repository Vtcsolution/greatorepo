import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, MessageCircle, Maximize2, Minimize2, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import axios from 'axios';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatFullScreen, setIsChatFullScreen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatId, setChatId] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // State for scroll-to-top button visibility
  const [isFetching, setIsFetching] = useState(false); // To prevent multiple fetches
  const mobileMenuRef = useRef(null);
  const dropdownRef = useRef(null);
  const chatBodyRef = useRef(null);

  // Generate or retrieve unique user ID for anonymous sessions
  const getUserId = () => {
    let userId = localStorage.getItem('chatUserId');
    if (!userId) {
      userId = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substr(2);
      localStorage.setItem('chatUserId', userId);
    }
    return userId;
  };

  // Scroll-to-top functionality
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to fetch or start chat and update messages
  const fetchOrStartChat = async () => {
    if (isFetching) return;
    setIsFetching(true);

    try {
      // Use unique user ID instead of 'Anonymous' for separate chat per user/session
      const userId = getUserId();
      const startResponse = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/chat/start`, { username: userId });
      if (startResponse.data.success) {
        const newChatId = startResponse.data.chatId;
        setChatId(newChatId);
        setMessages(startResponse.data.messages.map(msg => ({
          text: msg.content,
          sender: msg.role
        })));
      }
    } catch (error) {
      console.error('Error starting/fetching chat:', error);
      setMessages([{ text: 'Sorry, something went wrong starting the chat.', sender: 'ai' }]);
    } finally {
      setIsFetching(false);
    }
  };

  // Markdown components
  const markdownComponents = {
    p: ({ node, ...props }) => (
      <p {...props} className="text-sm leading-relaxed mb-2 last:mb-0 break-words text-gray-700 dark:text-gray-300" />
    ),
    a: ({ node, ...props }) => {
      const rawHref = props.href || (props.children && String(props.children)) || '';
      const normalizedHref = rawHref.match(/^https?:\/\//i)
        ? rawHref
        : rawHref.startsWith('//')
          ? `https:${rawHref}`
          : `https://${rawHref.replace(/^\/+/, '')}`;
      return (
        <a
          href={normalizedHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium underline decoration-1 underline-offset-2 transition-colors duration-200"
        >
          {props.children}
        </a>
      );
    },
    img: ({ node, ...props }) => (
      <div className="my-3">
        <img
          {...props}
          alt={props.alt || "Preview image"}
          className="max-w-full h-auto rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] mx-auto"
          loading="lazy"
        />
      </div>
    ),
    code: ({ node, inline, ...props }) =>
      inline ? (
        <code {...props} className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono text-red-600 dark:text-red-400" />
      ) : (
        <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-xs font-mono my-3 border border-gray-800 dark:border-gray-700">
          <code {...props} />
        </pre>
      ),
    ul: ({ node, ...props }) => (
      <ul {...props} className="list-disc list-inside space-y-1 text-sm mt-2 mb-3 text-gray-700 dark:text-gray-300 pl-0" />
    ),
    ol: ({ node, ...props }) => (
      <ol {...props} className="list-decimal list-inside space-y-1 text-sm mt-2 mb-3 text-gray-700 dark:text-gray-300 pl-0" />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote {...props} className="border-l-4 border-teal-500 pl-4 italic bg-teal-50 dark:bg-teal-900/20 py-3 my-4 rounded-r-lg" />
    ),
    h1: ({ node, ...props }) => <h1 {...props} className="text-lg font-bold mb-3 mt-6 text-gray-900 dark:text-white" />,
    h2: ({ node, ...props }) => <h2 {...props} className="text-base font-semibold mb-2 mt-5 text-gray-900 dark:text-white" />,
    h3: ({ node, ...props }) => <h3 {...props} className="text-sm font-semibold mb-2 mt-4 text-gray-900 dark:text-white" />,
  };

  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle scroll for navbar transparency and outside clicks
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
        setMobileDropdowns({});
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setMobileDropdowns({});
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
        setMobileDropdowns({});
        setIsChatOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Prevent body scroll when mobile menu or chat is in full screen
  useEffect(() => {
    if (isOpen || (isChatOpen && isChatFullScreen)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isChatOpen, isChatFullScreen]);

  // Consolidated link handling for chat messages
  useEffect(() => {
    const container = chatBodyRef.current;
    if (!container) return;

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a');
      if (!a || !container.contains(a)) return;

      const href = a.getAttribute('href') || a.textContent || '';
      if (!href) return;

      e.preventDefault();
      const normalized = href.match(/^https?:\/\//i)
        ? href
        : href.startsWith('//')
          ? `https:${href}`
          : `https://${href.replace(/^\/+/, '')}`;

      try {
        window.open(normalized, '_blank', 'noopener,noreferrer');
      } catch (err) {
        window.location.href = normalized;
      }
    };

    container.addEventListener('click', onClick);
    return () => container.removeEventListener('click', onClick);
  }, [chatBodyRef.current]);

  // Auto-scroll chat to latest message
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // Fetch chat on open and refetch on tab visibility change
  useEffect(() => {
    if (isChatOpen) {
      fetchOrStartChat();
    }
  }, [isChatOpen]);

  // Refetch history when tab becomes visible/active
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && isChatOpen && chatId) {
        // Refetch latest history from backend
        const fetchLatestHistory = async () => {
          try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/chat/${chatId}`);
            if (response.data.success) {
              setMessages(response.data.messages.map(msg => ({
                text: msg.content,
                sender: msg.role
              })));
            }
          } catch (error) {
            console.error('Error fetching latest history:', error);
          }
        };
        fetchLatestHistory();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleVisibilityChange);
    };
  }, [isChatOpen, chatId]);

  // Handle sending messages
  const handleSendMessage = async (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const userMessage = input.trim();
      setMessages([...messages, { text: userMessage, sender: 'user' }]);
      setInput('');
      setIsTyping(true);

      try {
        let currentChatId = chatId;
        if (!currentChatId) {
          await fetchOrStartChat();
          currentChatId = chatId; // Update after fetch
        }

        if (!currentChatId) {
          throw new Error('No chat ID available');
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/chat/send`, {
          chatId: currentChatId,
          userMessage
        });

        if (response.data.success) {
          setMessages(prev => [...prev, { text: response.data.response, sender: 'ai' }]);
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        setMessages(prev => [...prev, { text: 'Sorry, something went wrong. Please try again.', sender: 'ai' }]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  // Handle AI Assistant button click to open chatbot
  const handleOpenChatbot = () => {
    setIsChatOpen(true);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdowns({});
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'How we work', path: '/howwork' },
   
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Website Development', path: '/solutions/webapps' },
        { name: 'Mobile Application', path: '/solutions/mobileapps' },
        { name: 'Custom Software', path: '/solutions/custom_software' },
        { name: 'Infrastructure Services', path: '/solutions/infrastructure' },
        { name: 'Machine Learning', path: '/solutions/machine_learning' },
        { name: 'UiUx Design', path: '/solutions/uiux' },
        { name: 'API Development & Integration', path: '/solutions/api_development' },
        { name: 'AI Saas Platform', path: '/solutions/saasplatform' },
      ]
    },
     {
      name: 'Industries',
      path:'/industries',
      dropdown: [
        { name: 'Banking', path: '/focus-areas/banking' },
        { name: 'Education', path: '/focus-areas/education' },
        { name: 'Investment', path: '/focus-areas/investment' },
        { name: 'Oil & Gas', path: '/focus-areas/oil-gas' },
        { name: 'Public Sector', path: '/focus-areas/public-sector' },
        { name: 'Supply Chain & Logistics', path: '/focus-areas/logistics' },
        { name: 'Construction', path: '/focus-areas/construction' },
        { name: 'Ecommerce', path: '/focus-areas/ecommerce' },
      ]
    },
    { name: 'Insights', path: '/blogs' }
  ];

  const chatVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 }
  };

  // WhatsApp redirect URL with pre-filled message
  const whatsappUrl = `https://wa.me/923011060841?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20IT%20services.`;

  return (
    <>
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:block hidden"
          onClick={closeDropdown}
        />
      )}
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-1 right-4 p-3 bg-teal-500 hover:bg-teal-600 rounded-full transition-all duration-300 z-50 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
      
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 sm:bottom-32 right-3 sm:right-6 bg-[#14b8a6] p-2 sm:p-3 rounded-full cursor-pointer shadow-lg hover:bg-[#128C7E] transition-all duration-300 z-50 flex items-center justify-center gap-1"
        aria-label="Contact us on WhatsApp"
      >
        
        <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-8 sm:h-8 text-white flex-shrink-0">
          <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill="currentColor" fillRule="evenodd"></path>
        </svg>
        <span className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">WhatsApp</span>
      </a>
      {!isChatOpen && (
        <motion.div
          className="fixed bottom-12 sm:bottom-16 right-3 sm:right-6 bg-teal-500 p-2 sm:p-3 rounded-full cursor-pointer shadow-lg hover:bg-teal-600 transition-all duration-300 z-50 flex items-center gap-1 sm:gap-2 pr-3 sm:pr-4 group"
          onClick={() => setIsChatOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-white">AI Greato</span>
        </motion.div>
      )}
      {/* Chat Section */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className={`fixed ${isChatFullScreen ? 'inset-0' : 'bottom-20 sm:right-6'} bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700/50 overflow-hidden z-50 flex flex-col pointer-events-auto`}
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            style={isChatFullScreen ? { width: '100%', height: '100%' } : { width: '100%', maxWidth: '420px', height: '600px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Professional Header */}
            <div className="bg-gradient-to-r from-cyan-900 to-green-900 px-6 py-4 flex justify-between items-center flex-shrink-0 border-b border-teal-100/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">AI Greato Assistant</h3>
                  <p className="text-teal-100 text-sm">Professional IT & AI Support</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsChatFullScreen(!isChatFullScreen)} 
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  title={isChatFullScreen ? "Minimize" : "Expand"}
                >
                  {isChatFullScreen ? (
                    <Minimize2 className="w-4 h-4 text-white" />
                  ) : (
                    <Maximize2 className="w-4 h-4 text-white" />
                  )}
                </button>
                <button 
                  onClick={() => { 
                    setIsChatOpen(false); 
                    setMessages([]); 
                    setChatId(null); 
                    setInput(''); 
                  }} 
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  title="Close"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div id="chat-body" ref={chatBodyRef} className="flex-grow overflow-y-auto bg-gray-50 dark:bg-gray-900/50 relative z-10 px-4 py-3" style={{ WebkitOverflowScrolling: 'touch' }}>
              {/* Welcome Message */}
              {messages.length === 0 && !isTyping && (
                <div className="flex justify-center items-center h-48">
                  <div className="text-center max-w-md">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hello!</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      I'm AI Greato, your professional IT consultant. How can I assist you with your technology needs today?
                    </p>
                  </div>
                </div>
              )}

              {/* Messages */}
              <div className="space-y-4 mb-4">
                {messages.map((msg, index) => (
                  <motion.div
                    key={`${index}-${msg.sender}-${msg.text.slice(0,20)}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`relative max-w-[90%] p-4 rounded-2xl shadow-sm border transition-all duration-200 break-words overflow-hidden ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-br-sm' 
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-bl-sm'
                    }`}>
                      <div className="markdown prose prose-sm max-w-none dark:prose-invert">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                      <div className={`absolute ${msg.sender === 'user' ? 'bottom-2 right-3' : 'bottom-2 left-3'}`}>
                        <div className={`w-2 h-2 rounded-full ${
                          msg.sender === 'user' ? 'bg-white/70' : 'bg-gray-300 dark:bg-gray-600'
                        }`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm max-w-[90%]">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">AI Greato is typing...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="px-4 py-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
              <div className="relative">
                <input 
                  type="text" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  onKeyPress={handleSendMessage} 
                  placeholder="Ask me about IT solutions, AI automation, web development..." 
                  className="w-full pr-12 pl-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none" 
                />
                <button
                  onClick={() => input.trim() && handleSendMessage({ key: 'Enter' })}
                  disabled={!input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-teal-600 hover:text-teal-700 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                <button 
                  onClick={() => setInput("What services do you offer?")} 
                  className="px-3 py-1.5 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-lg hover:bg-teal-200 dark:hover:bg-teal-800/50 transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => setInput("Show me your portfolio")} 
                  className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => setInput("How I can connect to your support team?")} 
                  className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors"
                >
                  Support Team 
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-gray-900/95 shadow-2xl' : 'backdrop-blur-md bg-gray-900/80'}`}>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 px-4 lg:px-0">
            <div className="flex-shrink-0 z-50">
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
                <img
                  src={logo}
                  alt="GreatDeals Logo"
                  className="h-10 sm:h-12 md:h-14 lg:h-14 xl:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center space-x-1 sm:space-x-2 xl:space-x-1">
                {navItems.map((item, index) => (
                  <div key={item.name} className="relative" style={{ animationDelay: `${index * 100}ms` }}>
                    {item.dropdown ? (
                      <div className="flex items-center">
                        <Link
                          to={item.path || '#'}
                          className={`px-3 xl:px-4 py-2 rounded-md text-sm xl:text-base font-medium flex items-center space-x-1 transition-all duration-300 whitespace-nowrap hover:bg-gray-800/50 ${
                            window.location?.pathname === item.path
                              ? 'text-green-400'
                              : 'text-gray-300 hover:text-green-400'
                          }`}
                        >
                          <span>{item.name}</span>
                        </Link>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="text-gray-300 hover:text-green-400 transition-all duration-300 p-1 rounded hover:bg-gray-800/50 ml-1"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-all duration-300 ${
                              activeDropdown === item.name ? 'rotate-180 text-green-400' : ''
                            }`}
                          />
                        </button>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`px-3 xl:px-4 py-2 rounded-md text-sm xl:text-base font-medium flex items-center space-x-1 transition-all duration-300 whitespace-nowrap hover:bg-gray-800/50 ${
                          window.location?.pathname === item.path
                            ? 'text-green-400'
                            : 'text-gray-300 hover:text-green-400'
                          }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center flex-shrink-0 mr-2 sm:mr-4">
              <button
                onClick={handleOpenChatbot}
                className="relative group bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] text-gray-900 px-4 xl:px-6 py-2.5 rounded-xl font-bold tracking-wide hover:shadow-2xl transition-all duration-500 overflow-hidden text-sm xl:text-base hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>AI Assistant</span>
                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </button>
            </div>
            <div className="lg:hidden flex items-center space-x-2 pr-2 sm:pr-4">
              <button
                onClick={handleOpenChatbot}
                className="hidden sm:flex relative group bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm tracking-wide hover:shadow-lg transition-all duration-500 overflow-hidden hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>AI Assistant</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </button>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-green-400 p-2 rounded-md transition-all duration-300 relative z-50 hover:bg-gray-800/50 active:scale-90"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <Menu 
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          ref={dropdownRef}
          className={`absolute top-full left-1/2 -translate-x-1/2 z-40 hidden lg:block transition-all duration-500 ease-out
            ${activeDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          onMouseLeave={closeDropdown}
        >
          <div className={`transition-all duration-500 ease-out ${activeDropdown ? 'max-h-[100vh] scale-100' : 'max-h-0 scale-95'} overflow-hidden`}>
            <div className="max-w-6xl w-[90vw] mx-auto mt-3 p-8 bg-[#000000] border border-gray-800/60 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-5 text-gray-100 tracking-tight animate-fade-in">
                {activeDropdown}
                <div className="h-0.5 bg-gradient-to-r from-green-400 to-blue-500 w-20 mt-2 rounded-full animate-expand"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {navItems.find(item => item.name === activeDropdown)?.dropdown.map((subItem, idx) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    className="group block p-4 rounded-xl bg-gray-900/40 border border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.25)] hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${idx * 50}ms` }}
                    onClick={closeDropdown}
                  >
                    <h4 className="text-sm font-medium text-gray-200 group-hover:text-green-400 transition-colors duration-300">
                      {subItem.name}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-screen w-full bg-black z-40 transform transition-all duration-500 ease-in-out shadow-2xl ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="relative h-16 sm:h-18 lg:h-20 flex items-center justify-center px-6 border-b border-gray-800">
            <button 
              onClick={closeMobileMenu}
              className="absolute right-4 sm:right-6 text-gray-300 hover:text-green-400 p-2 rounded-md transition-all duration-300 hover:bg-gray-800/50 active:scale-90"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          <div className="pt-6 pb-8 px-6 h-[calc(100%-5rem)] overflow-y-auto">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <div 
                  key={item.name} 
                  className={`border-b border-gray-800 last:border-0 animate-slide-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between px-4 py-4 text-base text-gray-200 hover:text-green-400 rounded-lg transition-all duration-300 hover:bg-gray-800/50"
                        onClick={() => toggleMobileDropdown(item.name)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown 
                          className={`w-5 h-5 transition-all duration-300 ${
                            mobileDropdowns[item.name] ? 'rotate-180 text-green-400' : ''
                          }`} 
                        />
                      </button>
                      <div
                        className={`ml-4 pl-4 border-l-2 border-gray-700 space-y-1 overflow-hidden transition-all duration-500 ease-out ${
                          mobileDropdowns[item.name] ? 'max-h-[500px] opacity-100 pb-3' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-3 py-2.5 text-sm text-gray-400 hover:text-blue-400 rounded-lg transition-all duration-300 hover:bg-gray-800/30 animate-slide-in`}
                            style={{ animationDelay: `${subIndex * 50}ms` }}
                            onClick={closeMobileMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-4 text-base text-gray-200 hover:text-green-400 rounded-lg transition-all duration-300 hover:bg-gray-800/50 font-medium"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 px-4">
              <button
                onClick={handleOpenChatbot}
                className="block w-full bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] text-gray-900 px-6 py-4 rounded-xl font-bold text-center tracking-wide hover:shadow-xl transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>AI Assistant</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;