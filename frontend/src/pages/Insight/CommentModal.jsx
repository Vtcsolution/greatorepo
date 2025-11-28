// src/components/CommentModal.jsx - Updated API paths to match backend routes, added total comment count (including replies), removed nesting depth limit for replies, enhanced social-like features
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X, Send, User, Calendar, MessageCircle, Loader2, AlertCircle, Reply, ChevronRight } from 'lucide-react';

const CommentModal = ({ blogId, isOpen, onClose, onCommentAdded }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null); // Track if replying and to which comment
  const [formData, setFormData] = useState({
    username: '',
    comment: ''
  });

  // Recursive function to count total comments including all nested replies
  const countTotalComments = (comments) => {
    return comments.reduce((total, comment) => {
      const replyCount = comment.replies ? countTotalComments(comment.replies) : 0;
      return total + 1 + replyCount;
    }, 0);
  };

  useEffect(() => {
    if (isOpen && blogId) {
      fetchComments();
      // Load saved username from localStorage
      const savedUsername = localStorage.getItem('commentUsername');
      if (savedUsername) {
        setFormData(prev => ({ ...prev, username: savedUsername }));
      }
    }
  }, [isOpen, blogId]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      setError(null);
      // Fixed API path to match backend routes
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/comments/${blogId}/comments`);
      setComments(response.data.data || []);
    } catch (err) {
      setError('Failed to load comments');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username.trim() || !formData.comment.trim()) {
      setError('Please fill in all fields');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const payload = {
        username: formData.username.trim(),
        comment: formData.comment.trim()
      };
      if (replyingTo) {
        payload.parentId = replyingTo._id;
      }
      // Fixed API path to match backend routes
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/comments/${blogId}/comments`, payload);
      // Save username to localStorage for future use
      localStorage.setItem('commentUsername', formData.username.trim());
      setSuccess(replyingTo ? 'Reply added successfully!' : 'Comment added successfully!');
      setFormData({ username: formData.username, comment: '' });
      setReplyingTo(null); // Reset reply mode
      fetchComments(); // Update modal's local list
      if (onCommentAdded) {
        onCommentAdded(); // Notify parent to refetch and update preview/count
      }
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add comment');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReply = (comment) => {
    setReplyingTo(comment);
    setFormData(prev => ({ ...prev, comment: '' })); // Clear comment field for reply
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  // Recursive render for nested comments/replies (removed depth limit for unlimited nesting like Facebook)
  const renderComments = (comments, level = 0) => (
    <div className={`space-y-5 sm:space-y-6 ${level > 0 ? 'ml-4 sm:ml-10 pl-4 sm:pl-6 border-l border-gray-300 sm:border-l-2' : ''}`}>
      {comments.map((comment) => (
        <div key={comment._id} className={`bg-white rounded-lg p-4 sm:p-5 border border-gray-200 ${level > 0 ? 'bg-gray-50' : ''}`}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3 flex-1">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${getAuthorAvatar(comment.username)} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0`}>
                {comment.username?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">{comment.username}</p>
                <p className="text-xs text-gray-500">{formatDate(comment.createdAt)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleReply(comment)}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded transition text-xs sm:text-sm font-medium"
                aria-label={`Reply to ${comment.username}`}
              >
                <Reply className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Reply</span>
              </button>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed ml-11 sm:ml-13">{comment.comment}</p>
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 ml-11 sm:ml-13 text-xs text-gray-500 flex items-center gap-1">
              <ChevronRight className="w-3 h-3" />
              <span>{comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}</span>
            </div>
          )}
          {comment.replies && comment.replies.length > 0 && renderComments(comment.replies, level + 1)}
        </div>
      ))}
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-teal-600" />
            <h2 className="text-xl font-bold text-gray-900">Comments</h2>
            <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full">
              {countTotalComments(comments)} total
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col h-[calc(90vh-140px)]">
          {/* Comments List - Nested Display */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {loading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="w-6 h-6 text-teal-600 animate-spin" />
              </div>
            ) : error && comments.length === 0 ? (
              <div className="text-center py-10 text-gray-500">
                <AlertCircle className="w-10 h-10 mx-auto mb-3 text-gray-400" />
                <p>{error}</p>
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <MessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium text-gray-700">No comments yet</p>
                <p className="text-sm">Be the first to share your thoughts!</p>
              </div>
            ) : (
              renderComments(comments)
            )}
          </div>
          {/* Add Comment/Reply Form */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm font-medium">
                {success}
              </div>
            )}
            {error && !success && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              {replyingTo && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800 flex items-center gap-1">
                    <Reply className="w-4 h-4" />
                    <span>Replying to <strong>{replyingTo.username}</strong></span>
                  </p>
                </div>
              )}
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.username}
                  onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  maxLength={50}
                />
              </div>
              <div>
                <textarea
                  placeholder={replyingTo ? "Write your reply..." : "Write your comment..."}
                  value={formData.comment}
                  onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                  rows="4"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition resize-none"
                  maxLength={1000}
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.comment.length}/1000
                </div>
              </div>
              <div className="flex gap-2">
                {replyingTo && (
                  <button
                    type="button"
                    onClick={() => setReplyingTo(null)}
                    className="px-4 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                  >
                    Cancel Reply
                  </button>
                )}
                <button
                  type="submit"
                  disabled={submitting || !formData.username.trim() || !formData.comment.trim()}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 text-white font-semibold rounded-lg transition disabled:cursor-not-allowed shadow-sm"
                >
                  {submitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {submitting ? 'Posting...' : (replyingTo ? 'Post Reply' : 'Post Comment')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper for avatar colors (reuse from BlogDetails if possible, or define here)
const getAuthorAvatar = (name) => {
  const colors = [
    'from-teal-400 to-blue-500',
    'from-teal-700 to-teal-700',
    'from-violet-500 to-pink-500',
    'from-emerald-400 to-cyan-500',
    'from-green-400 to-green-500'
  ];
  return colors[name?.length % colors.length] || colors[0];
};

export default CommentModal;