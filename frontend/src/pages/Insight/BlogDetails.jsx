// src/pages/BlogDetails.jsx - ORIGINAL DESIGN + FULLY RESPONSIVE (no horizontal scroll)
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import {
  Clock, User, Calendar, Eye, ArrowLeft, Share2, Bookmark,
  Facebook, Twitter, Linkedin, MessageCircle, Tag,
  ChevronRight, Award, Sparkles, TrendingUp, Star, BookOpen,
  Menu, Hash, Reply, X
} from 'lucide-react';
import CommentModal from './CommentModal';

// Auto-linkify URLs in plain text
const linkify = (text) => {
  const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
  return text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-teal-600 hover:text-teal-700 underline font-medium">${url}</a>`;
  });
};

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [toc, setToc] = useState([]);
  const [showToc, setShowToc] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null); // Track reply target

  // Count total comments including nested replies
  const countTotalComments = (comments) => {
    return comments.reduce((total, comment) => {
      const replyCount = comment.replies ? countTotalComments(comment.replies) : 0;
      return total + 1 + replyCount;
    }, 0);
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        setError(null);
        const blogResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blogs/${id}`);
        const fetchedBlog = blogResponse.data.data;

        // Process content: preserve HTML + linkify plain URLs
        let processedContent = fetchedBlog.fullContent.replace(/\n+/g, '\n').trim();
        const parts = processedContent.split(/(<[^>]+>)/g);
        const linkedParts = parts.map(part => {
          if (part.startsWith('<') && part.endsWith('>')) return part;
          return linkify(part);
        });
        fetchedBlog.fullContent = linkedParts.join('');
        setBlog(fetchedBlog);

        // Extract TOC
        const headingRegex = /<h([2-3])(?:[^>]*)>(.*?)<\/h\1>/gi;
        const newToc = [];
        let match;
        while ((match = headingRegex.exec(fetchedBlog.fullContent)) !== null) {
          const headingText = match[2].replace(/<[^>]*>/g, '').trim();
          const id = headingText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
          newToc.push({ level: parseInt(match[1]), text: headingText, id });
        }
        setToc(newToc);

        // Fetch related blogs
        const allBlogsResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blogs`);
        const related = allBlogsResponse.data.data
          .filter(b => b._id !== id && b.category === fetchedBlog.category)
          .slice(0, 3);
        setRelatedBlogs(related);

        await fetchComments();
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err.response?.status === 404 ? 'Blog not found.' : 'Failed to load blog.');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchBlogData();
  }, [id]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/comments/${id}/comments`);
      const fetchedComments = response.data.data || [];
      setComments(fetchedComments);
      setCommentCount(countTotalComments(fetchedComments));
    } catch (err) {
      setComments([]);
      setCommentCount(0);
    }
  };

  const handleCommentAdded = () => {
    fetchComments();
    setReplyingTo(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  const formatCommentDate = (dateString) => {
    const commentDate = new Date(dateString);
    const diffTime = Math.abs(new Date() - commentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return commentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const shareBlog = (platform) => {
    const url = window.location.href;
    const title = blog?.title;
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

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

  const renderContent = () => {
    if (!blog?.fullContent) return null;
    const sanitized = DOMPurify.sanitize(blog.fullContent, {
      ADD_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'p', 'strong', 'em', 'br', 'a', 'details', 'summary'],
      ADD_ATTR: ['target', 'rel', 'href', 'id', 'class']
    });
    return { __html: sanitized };
  };

  // Recursive render for comment + replies (Facebook-style)
  const renderCommentThread = (comment, level = 0) => {
    const isReply = level > 0;
    const indentClass = level > 0 ? 'ml-2 sm:ml-12 pl-2 sm:pl-6 border-l border-gray-200 sm:border-l-2' : '';
    const bgClass = isReply ? 'bg-gray-50' : 'bg-white';

    return (
      <article
        key={comment._id}
        className={`p-4 sm:p-5 rounded-2xl shadow-sm border hover:border-teal-200 hover:shadow-md transition-all ${bgClass} ${indentClass}`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3 flex-1">
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br ${getAuthorAvatar(
                comment.username
              )} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
            >
              {comment.username?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-black">{comment.username}</p>
              <p className="text-sm text-black">{formatCommentDate(comment.createdAt)}</p>
              <p className="text-black leading-relaxed mt-1">{comment.comment}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => {
                setReplyingTo(comment);
                setIsCommentModalOpen(true);
              }}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-gray-50 text-black hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all text-xs sm:text-sm font-medium"
              aria-label={`Reply to ${comment.username}`}
            >
              <Reply className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Reply</span>
            </button>
          </div>
        </div>

        {/* Nested replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-6 space-y-5 sm:space-y-6">
            {comment.replies.map((reply) => renderCommentThread(reply, level + 1))}
          </div>
        )}
      </article>
    );
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 sm:py-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded-2xl mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="lg:col-span-3 space-y-4">
                <div className="h-96 bg-gray-200 rounded-2xl mb-8"></div>
                <div className="space-y-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-gray-200 rounded-2xl"></div>
                <div className="h-64 bg-gray-200 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border">
            <h2 className="text-2xl font-bold text-black mb-3">Blog Not Found</h2>
            <p className="text-black mb-8">{error}</p>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Top Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/blogs"
              className="flex items-center gap-2 sm:gap-3 text-black hover:text-black transition-all"
            >
              <div className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-medium text-sm sm:text-base hidden sm:inline">Back to blogs</span>
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2.5 rounded-lg transition-all border ${
                  isBookmarked
                    ? 'bg-amber-50 text-amber-600 border-amber-200'
                    : 'bg-gray-100 text-black hover:bg-gray-200 hover:border-gray-300'
                }`}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
              >
                <Bookmark className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Blog Header */}
            <header className="text-center mb-10 sm:mb-12">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-sm">
                <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {blog.category}
                {blog.featured && (
                  <>
                    <span className="mx-1">•</span>
                    <span className="flex items-center gap-1 text-amber-600">
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                      Featured
                    </span>
                  </>
                )}
                {blog.trending && (
                  <>
                    <span className="mx-1">•</span>
                    <span className="flex items-center gap-1 text-red-600">
                      <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Trending
                    </span>
                  </>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5 sm:mb-6 leading-tight">
                {blog.title}
              </h1>
              <p className="text-lg sm:text-xl text-black max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10">
                {blog.excerpt}
              </p>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-black">
                <div className="hidden lg:block h-10 w-px bg-gray-300"></div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    {formatDate(blog.date || blog.createdAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-teal-600" />
                    {blog.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-teal-600" />
                    {blog.views || 0} views
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-teal-600" />
                    {commentCount} comments
                  </span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={`${import.meta.env.VITE_BASE_URL}${blog.image}`}
                alt={blog.title}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=500&fit=crop';
                }}
              />
            </div>

            {/* Table of Contents */}
            {toc.length > 0 && (
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border sticky top-20 lg:top-24 z-10">
                <button
                  onClick={() => setShowToc(!showToc)}
                  className="flex items-center gap-2 text-teal-600 font-medium mb-4 hover:text-teal-700 transition-colors w-full text-left text-sm sm:text-base"
                >
                  <Menu className="w-4 h-4" />
                  <span>Table of Contents</span>
                  <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${showToc ? 'rotate-90' : ''}`} />
                </button>
                {showToc && (
                  <nav className="space-y-2">
                    {toc.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className={`flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors block py-1 px-2 rounded ${
                          item.level === 2 ? 'pl-0' : 'pl-4'
                        } text-black hover:text-teal-600 hover:bg-teal-50`}
                      >
                        <Hash className="w-3 h-3 flex-shrink-0" />
                        <span>{item.text}</span>
                      </a>
                    ))}
                  </nav>
                )}
              </div>
            )}

            {/* Blog Content */}
            <section className="prose prose-lg max-w-none mx-auto
              prose-headings:text-black prose-p:text-black prose-li:text-black
              prose-strong:text-black prose-em:text-black prose-a:text-teal-600
              prose-a:no-underline hover:prose-a:underline prose-ol:pl-6
              prose-ul:pl-6 prose-li:my-2 prose-p:leading-relaxed
              prose-blockquote:border-l-4 prose-blockquote:border-teal-200
              prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:bg-teal-50
              prose-blockquote:text-black prose-code:bg-gray-100 prose-code:px-1
              prose-code:rounded prose-code:text-black prose-details:mb-4
              prose-summary:cursor-pointer prose-summary:font-semibold prose-summary:text-black">
              <div
                className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border space-y-6"
                dangerouslySetInnerHTML={renderContent()}
                style={{ lineHeight: '1.8', fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#000000' }}
              />
            </section>

            {/* Backlinks */}
            {blog.backlinks && blog.backlinks.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-teal-600" />
                  Further Reading
                </h2>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border space-y-4">
                  {blog.backlinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-5 bg-gradient-to-r from-gray-50 to-teal-50 hover:from-teal-50 hover:to-blue-50 rounded-xl transition-all duration-300 border border-gray-200 hover:border-teal-300 hover:shadow-md flex items-center justify-between group"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-black group-hover:text-teal-700 transition-colors">{link.text}</p>
                        <p className="text-sm text-black truncate mt-1">Visit source</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-black group-hover:text-teal-600 transition-all transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mt-12 p-5 sm:p-6 bg-white rounded-2xl border shadow-sm">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-black font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <button onClick={() => shareBlog('twitter')} className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 text-black hover:text-blue-500 transition-all shadow-sm border hover:border-blue-200" title="Twitter">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button onClick={() => shareBlog('facebook')} className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 text-black hover:text-blue-600 transition-all shadow-sm border hover:border-blue-200" title="Facebook">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button onClick={() => shareBlog('linkedin')} className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 text-black hover:text-blue-700 transition-all shadow-sm border hover:border-blue-200" title="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => setIsCommentModalOpen(true)}
                className="flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2E7D7B] hover:from-teal-700 hover:to-blue-700 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Add a Comment ({commentCount})</span>
              </button>
            </div>

            {/* Comments Preview */}
            {comments.length > 0 && (
              <section className="mt-12 sm:mt-16">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8">
                  <div className="w-1 h-10 sm:h-12 bg-gradient-to-b from-teal-600 to-blue-600 rounded-full"></div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black">Reader Comments</h3>
                    <p className="text-black">Join the conversation below</p>
                  </div>
                  <span className="px-3 sm:px-4 py-1.5 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 rounded-full text-xs sm:text-sm font-semibold ml-auto">
                    {commentCount} {commentCount === 1 ? 'comment' : 'comments'} (incl. replies)
                  </span>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {comments.slice(0, 3).map((comment) => renderCommentThread(comment, 0))}

                  {comments.length > 3 && (
                    <div className="text-center pt-6 border-t border-gray-200">
                      <button
                        onClick={() => setIsCommentModalOpen(true)}
                        className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 mx-auto transition-all text-sm sm:text-base"
                      >
                        View all {commentCount} comments & replies
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* CTA */}
            <section className="mt-12 sm:mt-16 text-center p-8 sm:p-10 bg-gradient-to-r from-teal-50 via-blue-50 to-indigo-50 rounded-3xl border border-teal-100 shadow-lg">
              <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                {commentCount === 0 ? 'Be the first to comment!' : 'Continue the discussion'}
              </h3>
              <p className="text-black mb-6 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
                {commentCount === 0
                  ? 'Your insights could spark a great conversation. Share your thoughts!'
                  : 'What are your takes on this? Add your comment below.'}
              </p>
              <button
                onClick={() => setIsCommentModalOpen(true)}
                className="px-6 sm:px-8 py-3 bg-[#2E7D7B] hover:from-teal-700 hover:to-blue-700 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Write a Comment
              </button>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1 lg:sticky lg:top-24 h-fit space-y-6 sm:space-y-8">
            {/* Author Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border">
              <div className="text-center">
                {blog.authorImage ? (
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${blog.authorImage}`}
                    alt={blog.author}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto mb-4 shadow-lg ring-2 ring-teal-100"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(blog.author)}&background=0f766e&color=fff&size=80`;
                    }}
                  />
                ) : (
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${getAuthorAvatar(blog.author)} rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-4 shadow-lg ring-2 ring-teal-100`}>
                    {blog.author?.charAt(0).toUpperCase() || 'A'}
                  </div>
                )}
                <h4 className="font-bold text-black text-base sm:text-lg mb-1">{blog.author}</h4>
                <p className="text-teal-600 text-xs sm:text-sm font-medium mb-3">Senior AI Researcher</p>
                {blog.authorBio && (
                  <p className="text-black text-xs sm:text-sm mb-4 italic text-center">{blog.authorBio}</p>
                )}
               
               
              </div>
            </div>

            {/* Related Blogs */}
            {relatedBlogs.length > 0 && (
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <h4 className="font-bold text-black text-sm sm:text-base">Related Articles</h4>
                </div>
                <div className="space-y-4">
                  {relatedBlogs.map(related => (
                    <Link
                      key={related._id}
                      to={`/blog/${related._id}`}
                      className="block group p-3 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all shadow-sm"
                    >
                      <div className="flex gap-3">
                        <img
                          src={`${import.meta.env.VITE_BASE_URL}${related.image}`}
                          alt={related.title}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0 shadow-md"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop';
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-black text-xs sm:text-sm line-clamp-2 group-hover:text-teal-600 transition-colors">
                            {related.title}
                          </h5>
                          <p className="text-xs text-black mt-1 flex items-center gap-1">
                            {formatDate(related.date || related.createdAt)} • {related.readTime}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>

      {/* Comment Modal */}
      <CommentModal
        blogId={id}
        isOpen={isCommentModalOpen}
        onClose={() => {
          setIsCommentModalOpen(false);
          setReplyingTo(null);
        }}
        onCommentAdded={handleCommentAdded}
        replyingTo={replyingTo}
      />
    </div>
  );
};

export default BlogDetails;