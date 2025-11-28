import React, { useState, useEffect } from 'react';
import { Search, Clock, User, ArrowRight, Filter, ChevronDown, Calendar, Eye, TrendingUp, BookOpen, Code, Smartphone, Database, Brain, Blocks, Building, Users, Palette, X, Rocket, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Helmet } from "react-helmet-async";
const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blogs`);
        
        if (response.data && response.data.data) {
          setBlogs(response.data.data);
        } else {
          setBlogs([]);
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs. Please try again.');
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = [
    { name: 'All', icon: Filter },
    { name: 'Artificial Intelligence', icon: Brain },
    { name: 'Blockchain', icon: Blocks },
    { name: 'Data Science and Analytics', icon: Database },
    { name: 'Enterprise', icon: Building },
    { name: 'Industry', icon: Users },
    { name: 'Software Development', icon: Code },
    { name: 'Technology', icon: Smartphone },
    { name: 'UI/UX Design', icon: Palette }
  ];

  // Filter blogs based on category and search
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get trending blogs (you can modify this logic based on your criteria)
  const trendingBlogs = blogs.filter(blog => blog.trending).slice(0, 3);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-48 bg-[#1E1E1E] rounded-xl mb-4"></div>
      <div className="h-4 bg-[#1E1E1E] rounded mb-2"></div>
      <div className="h-4 bg-[#1E1E1E] rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-[#1E1E1E] rounded w-1/2"></div>
    </div>
  );

  const BlogCard = ({ blog }) => (
    <div className="group relative overflow-hidden rounded-2xl bg-[#1E1E1E] hover:bg-[#252525] transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl w-full text-left">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 to-[#93C5FD]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative">
        <div className="relative overflow-hidden h-48">
          <img 
            src={`${import.meta.env.VITE_BASE_URL}${blog.image}`}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x200?text=No+Image';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {blog.trending && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#6EE7B7]/90 text-[#121212] text-xs font-semibold rounded-full backdrop-blur-sm">
                <TrendingUp className="w-3 h-3" />
                Trending
              </span>
            )}
            {blog.featured && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#93C5FD]/90 text-[#121212] text-xs font-semibold rounded-full backdrop-blur-sm">
                Featured
              </span>
            )}
          </div>

          {/* Views counter */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2 py-1 bg-black/50 text-[#E5E7EB] text-xs rounded-full backdrop-blur-sm">
            <Eye className="w-3 h-3" />
            {blog.views || 0}
          </div>
        </div>

        <div className="p-6">
          {/* Category */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-[#6EE7B7]/10 text-[#6EE7B7] text-xs font-medium rounded-full border border-[#6EE7B7]/20">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-[#E5E7EB] mb-3 group-hover:text-[#6EE7B7] transition-colors duration-300 line-clamp-2 text-lg">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-[#9CA3AF] mb-4 line-clamp-3 leading-relaxed text-sm">
            {blog.excerpt}
          </p>

          {/* Meta info */}
          <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {blog.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(blog.date || blog.createdAt)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {blog.readTime}
              </div>
            </div>
            <Link 
              to={`/blog/${blog._id}`}
              className="flex items-center gap-1 text-[#6EE7B7] hover:text-[#93C5FD] transition-colors duration-300"
            >
              Read More
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#121212] text-[#E5E7EB]">
      {/* Hero Section */}

      <Helmet>
      <title>Blogs - Greatodeal</title>
      <meta
        name="description"
        content="Read the latest blogs about AI, Blockchain, Data Science, and Technology on Greatodeal."
      />
      <link rel="canonical" href="https://greatodeal.com/blogs" />
    </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#0f1419] py-20 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#6EE7B7]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#93C5FD]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#E5E7EB] via-[#6EE7B7] to-[#93C5FD] bg-clip-text text-transparent">
              Insights and Expertise
            </h1>
            <p className="text-xl md:text-xl text-[#9CA3AF] max-w-4xl mx-auto leading-relaxed">
              Stay informed on the latest technology trends, software development best practices, and industry insights
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-xl text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#6EE7B7] focus:ring-2 focus:ring-[#6EE7B7]/20 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-[#6EE7B7] text-[#121212] shadow-lg shadow-[#6EE7B7]/25'
                        : 'bg-[#1E1E1E] text-[#9CA3AF] hover:bg-[#252525] hover:text-[#E5E7EB] border border-[#333] hover:border-[#6EE7B7]/50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-900/20 border border-red-700 rounded-xl text-red-300 text-center">
            {error}
          </div>
        )}

        {/* Latest Articles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-[#6EE7B7]" />
            <h2 className="text-3xl font-bold text-[#E5E7EB]">
              Latest Articles {!isLoading && `(${filteredBlogs.length})`}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#6EE7B7]/50 to-transparent"></div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <LoadingSkeleton key={i} />
              ))}
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-[#9CA3AF] text-lg mb-4">
                {blogs.length === 0 ? 'No blogs available yet.' : 'No blogs match your search criteria.'}
              </div>
              {blogs.length === 0 && (
                <div className="text-sm text-[#6EE7B7]">
                  Check back later for new articles!
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredBlogs.slice(0, visibleArticles).map((blog, index) => (
                  <div key={blog._id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <BlogCard blog={blog} />
                  </div>
                ))}
              </div>

              {filteredBlogs.length > visibleArticles && (
                <div className="text-center">
                  <button
                    onClick={() => setVisibleArticles(prev => prev + 6)}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] text-[#121212] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6EE7B7]/25 transform hover:scale-105 transition-all duration-300"
                  >
                    Load More Articles
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        {/* Trending Blogs Section */}
        {trendingBlogs.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-[#93C5FD]" />
              <h2 className="text-3xl font-bold text-[#E5E7EB]">Trending Articles</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#93C5FD]/50 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingBlogs.map((blog, index) => (
                <div key={blog._id} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Insights;