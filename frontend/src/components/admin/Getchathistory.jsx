// frontend/src/pages/GetChatHistory.jsx
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, RefreshCw, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar'; // Adjust path as needed
import AdminHeader from '../../components/admin/AdminHeader'; // Adjust path as needed

const GetChatHistory = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [selectedChatMessages, setSelectedChatMessages] = useState([]);
  const chatBodyRef = useRef(null);

  // Fetch all chats for admin (all users)
  const fetchAllChats = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/chat/all-users`);
      if (response.data.success) {
        const fetchedChats = response.data.chats || [];
        setChats(fetchedChats);
        if (fetchedChats.length > 0 && !selectedChatId) {
          const firstChat = fetchedChats[0];
          setSelectedChatId(firstChat.chatId);
          setSelectedChatMessages(firstChat.messages || []);
        }
      }
    } catch (err) {
      console.error('Error fetching chats:', err);
      setError('Failed to load chat history. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle chat selection (use existing messages from chats state)
  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
    const selectedChat = chats.find((chat) => chat.chatId === chatId);
    if (selectedChat) {
      setSelectedChatMessages(selectedChat.messages || []);
    }
  };

  useEffect(() => {
    fetchAllChats();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [selectedChatMessages]);

  // Helper to check if username is a UUID (to display nicely)
  const isUUID = (username) => {
    return username && username.length === 36 && username.includes('-');
  };

  // Helper to get display preview for chat
  const getChatPreview = (messages) => {
    if (!messages || messages.length === 0) return 'New Chat';
    const lastMessage = messages[messages.length - 1];
    return lastMessage.content.slice(0, 50) + (lastMessage.content.length > 50 ? '...' : '');
  };

  // Markdown components for rendering messages
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

  if (loading && !chats.length) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-[#e1e1e1] via-white to-[#e1e1e1] items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-[#2e7d7b] mx-auto mb-4" />
          <p className="text-gray-600">Loading chat history...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#e1e1e1] via-white to-[#e1e1e1]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex items-center space-x-4">
              <Link
                to="/admin/dashboard" // Adjust to admin dashboard route
                className="inline-flex items-center space-x-2 text-[#2e7d7b] hover:text-[#256967] font-medium transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </Link>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex-1">
                Chat History
              </h1>
              <button
                onClick={fetchAllChats}
                disabled={loading}
                className="px-4 py-2 bg-[#2e7d7b] text-white rounded-xl hover:bg-[#256967] disabled:opacity-50 transition-colors flex items-center space-x-2"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-red-700 font-medium">Error</p>
                  <p className="text-red-600 text-sm mt-1">{error}</p>
                </div>
              </div>
            )}

            {chats.length === 0 ? (
              <div className="text-center py-12">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Chat History</h3>
                <p className="text-gray-600 mb-4">No conversations found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chat List Sidebar */}
                <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-[#e1e1e1] p-4 h-fit">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">All Conversations</h2>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {chats.map((chat) => {
                      const displayUsername = isUUID(chat.username) ? 'Anonymous User' : chat.username;
                      return (
                        <button
                          key={chat.chatId}
                          onClick={() => handleSelectChat(chat.chatId)}
                          className={`w-full p-3 rounded-xl text-left transition-all duration-200 ${
                            selectedChatId === chat.chatId
                              ? 'bg-[#2e7d7b] text-white shadow-md'
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          <p className="text-xs text-gray-500 mb-1">{displayUsername}</p>
                          <p className="font-medium truncate">{getChatPreview(chat.messages)}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(chat.createdAt).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-gray-400">{chat.messages?.length || 0} messages</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-[#e1e1e1] overflow-hidden flex flex-col">
                  <div className="p-6 border-b border-[#e1e1e1]">
                    <h2 className="text-lg font-semibold text-gray-900">Conversation Details</h2>
                    {selectedChatId && (
                      <>
                        <p className="text-sm text-gray-600 mt-2">
                          {selectedChatMessages.length} messages
                        </p>
                        <div className="mt-2">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">ID: {selectedChatId}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div
                    ref={chatBodyRef}
                    className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50"
                  >
                    {selectedChatMessages.length === 0 ? (
                      <div className="text-center py-12 text-gray-500">
                        Select a conversation to view messages.
                      </div>
                    ) : (
                      selectedChatMessages.map((msg, index) => (
                        <div
                          key={index}
                          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] p-4 rounded-2xl shadow-sm border transition-all duration-200 break-words overflow-hidden ${
                              msg.role === 'user'
                                ? 'bg-gradient-to-r from-[#2e7d7b] to-teal-600 text-white rounded-br-sm'
                                : 'bg-white border-gray-200 text-gray-900 rounded-bl-sm'
                            }`}
                          >
                            <div className="markdown prose prose-sm max-w-none dark:prose-invert">
                              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                                {msg.content}
                              </ReactMarkdown>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default GetChatHistory;