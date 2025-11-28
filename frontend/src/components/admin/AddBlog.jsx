// frontend/src/pages/admin/AddBlog.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import { Upload, X, Loader2, CheckCircle, AlertCircle, Plus, Trash2, Link } from 'lucide-react';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    fullContent: '',
    category: '',
    author: '',
    authorBio: '',
    readTime: '',
    featured: false,
    trending: false,
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [authorImage, setAuthorImage] = useState(null);
  const [authorImagePreview, setAuthorImagePreview] = useState(null);
  const [backlinks, setBacklinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  // Initialize character count from formData
  const [characterCount, setCharacterCount] = useState({
    excerpt: formData.excerpt.length,
    fullContent: formData.fullContent.length,
    authorBio: formData.authorBio.length
  });

  // Load categories from backend
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blogs/categories/all`);
        setCategories(response.data.data);
      } catch (err) {
        console.error('Error loading categories:', err);
        // Fallback to default categories if API fails
        setCategories([
          'Artificial Intelligence',
          'Blockchain',
          'Data Science and Analytics',
          'Enterprise',
          'Industry',
          'Software Development',
          'Technology',
          'UI/UX Design',
        ]);
      }
    };
    loadCategories();
  }, []);

  // Update character count whenever formData changes
  useEffect(() => {
    setCharacterCount({
      excerpt: formData.excerpt.length,
      fullContent: formData.fullContent.length,
      authorBio: formData.authorBio.length
    });
  }, [formData.excerpt, formData.fullContent, formData.authorBio]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For excerpt, enforce character limit
    if (name === 'excerpt' && value.length > 200) {
      return; // Don't update if exceeding limit
    }
    // For authorBio, enforce character limit (e.g., 500)
    if (name === 'authorBio' && value.length > 500) {
      return; // Don't update if exceeding limit
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlogImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file for blog image');
        return;
      }
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Blog image size should be less than 5MB');
        return;
      }
      setImage(file);
      setError(null);
      // Generate preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  const handleAuthorImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file for author image');
        return;
      }
      // Validate file size (2MB for author image)
      if (file.size > 2 * 1024 * 1024) {
        setError('Author image size should be less than 2MB');
        return;
      }
      setAuthorImage(file);
      setError(null);
      // Generate preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setAuthorImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setAuthorImage(null);
      setAuthorImagePreview(null);
    }
  };

  const removeBlogImage = () => {
    setImage(null);
    setImagePreview(null);
    const fileInput = document.getElementById('blogImage');
    if (fileInput) fileInput.value = '';
  };

  const removeAuthorImage = () => {
    setAuthorImage(null);
    setAuthorImagePreview(null);
    const fileInput = document.getElementById('authorImage');
    if (fileInput) fileInput.value = '';
  };

  // Backlinks handlers
  const addBacklink = () => {
    setBacklinks([...backlinks, { text: '', url: '' }]);
  };

  const removeBacklink = (index) => {
    setBacklinks(backlinks.filter((_, i) => i !== index));
  };

  const updateBacklink = (index, field, value) => {
    const updated = backlinks.map((link, i) =>
      i === index ? { ...link, [field]: value } : link
    );
    setBacklinks(updated);
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError('Title is required');
      return false;
    }
    if (!formData.excerpt.trim()) {
      setError('Excerpt is required');
      return false;
    }
    if (formData.excerpt.length > 200) {
      setError('Excerpt should be less than 200 characters');
      return false;
    }
    if (!formData.fullContent.trim()) {
      setError('Full content is required');
      return false;
    }
    if (!formData.category) {
      setError('Please select a category');
      return false;
    }
    if (!formData.author.trim()) {
      setError('Author name is required');
      return false;
    }
    if (!formData.readTime.trim()) {
      setError('Read time is required');
      return false;
    }
    if (!image) {
      setError('Please select a blog image');
      return false;
    }
    // Optional fields
    if (formData.authorBio && formData.authorBio.length > 500) {
      setError('Author bio should be less than 500 characters');
      return false;
    }
    // Validate backlinks
    for (let i = 0; i < backlinks.length; i++) {
      if (!backlinks[i].text.trim() || !backlinks[i].url.trim()) {
        setError(`Backlink ${i + 1} must have both text and URL`);
        return false;
      }
      try {
        new URL(backlinks[i].url);
      } catch {
        setError(`Invalid URL for backlink ${i + 1}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!validateForm()) return;
    setLoading(true);
    try {
      const data = new FormData();
      data.append('title', formData.title.trim());
      data.append('excerpt', formData.excerpt.trim());
      data.append('fullContent', formData.fullContent.trim());
      data.append('category', formData.category);
      data.append('author', formData.author.trim());
      data.append('authorBio', formData.authorBio.trim());
      data.append('readTime', formData.readTime.trim());
      data.append('featured', formData.featured);
      data.append('trending', formData.trending);
      data.append('backlinks', JSON.stringify(backlinks));
      data.append('image', image);
      if (authorImage) {
        data.append('authorImage', authorImage);
      }
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/blogs`,
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          timeout: 30000 // 30 seconds timeout
        }
      );
      setSuccess('Blog published successfully! 🎉');
      // Reset form
      setFormData({
        title: '',
        excerpt: '',
        fullContent: '',
        category: '',
        author: '',
        authorBio: '',
        readTime: '',
        featured: false,
        trending: false,
      });
      setCharacterCount({ excerpt: 0, fullContent: 0, authorBio: 0 });
      setBacklinks([]);
      setImage(null);
      setImagePreview(null);
      setAuthorImage(null);
      setAuthorImagePreview(null);
      const blogFileInput = document.getElementById('blogImage');
      if (blogFileInput) blogFileInput.value = '';
      const authorFileInput = document.getElementById('authorImage');
      if (authorFileInput) authorFileInput.value = '';
      // Auto-clear success message after 5 seconds
      setTimeout(() => setSuccess(null), 5000);
    } catch (err) {
      console.error('Error adding blog:', err);
      if (err.code === 'ECONNABORTED') {
        setError('Request timeout. Please try again.');
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('Failed to publish blog. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#e1e1e1] via-white to-[#e1e1e1]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Create New Blog Post
              </h1>
              <p className="text-gray-600">
                Craft and publish engaging, professional content with HTML support for headings (h1-h3), paragraphs, lists, toggles (use &lt;details&gt;&lt;summary&gt;Toggle Title&lt;/summary&gt;&lt;p&gt;Content&lt;/p&gt;&lt;/details&gt;), and inline links (&lt;a href="url"&gt;Link Text&lt;/a&gt;)
              </p>
            </div>

            {/* Alert Messages */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-red-700 font-medium">Error</p>
                  <p className="text-red-600 text-sm mt-1">{error}</p>
                </div>
                <button
                  onClick={() => setError(null)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-green-700 font-medium">Success!</p>
                  <p className="text-green-600 text-sm mt-1">{success}</p>
                </div>
                <button
                  onClick={() => setSuccess(null)}
                  className="text-green-500 hover:text-green-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Blog Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#e1e1e1] overflow-hidden">
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-3">
                    Blog Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d7b] focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter a compelling blog title..."
                  />
                </div>

                {/* Excerpt with Character Counter */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label htmlFor="excerpt" className="block text-sm font-semibold text-gray-900">
                      Excerpt <span className="text-red-500">*</span>
                    </label>
                    <span className={`text-xs font-medium ${
                      characterCount.excerpt > 200
                        ? 'text-red-500'
                        : characterCount.excerpt > 150
                        ? 'text-orange-500'
                        : 'text-gray-500'
                    }`}>
                      {characterCount.excerpt}/200
                    </span>
                  </div>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                    rows="3"
                    maxLength="200"
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d7b] focus:border-transparent transition-all duration-200 resize-none placeholder-gray-400 ${
                      characterCount.excerpt > 200
                        ? 'border-red-300 ring-1 ring-red-200'
                        : characterCount.excerpt > 150
                        ? 'border-orange-300'
                        : 'border-gray-300'
                    }`}
                    placeholder="Write a brief summary that captures attention (max 200 characters)..."
                  />
                  {characterCount.excerpt > 150 && characterCount.excerpt <= 200 && (
                    <p className="text-xs text-orange-600 mt-2">
                      {200 - characterCount.excerpt} characters remaining
                    </p>
                  )}
                  {characterCount.excerpt > 200 && (
                    <p className="text-xs text-red-600 mt-2">
                      Excerpt exceeds 200 character limit!
                    </p>
                  )}
                </div>

                {/* Full Content with Character Counter */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label htmlFor="fullContent" className="block text-sm font-semibold text-gray-900">
                      Full Content <span className="text-red-500">*</span>
                    </label>
                    <span className="text-xs text-gray-500 font-medium">
                      {characterCount.fullContent} characters
                    </span>
                  </div>
                  <textarea
                    id="fullContent"
                    name="fullContent"
                    value={formData.fullContent}
                    onChange={handleChange}
                    required
                    rows="12"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d7b] focus:border-transparent transition-all duration-200 resize-vertical placeholder-gray-400"
                    placeholder={`Write your complete blog post here... Use HTML for professional formatting:

Example:
&lt;h2&gt;Main Heading&lt;/h2&gt;
&lt;p&gt;Paragraph text with &lt;a href="https://example.com"&gt;inline linkable text&lt;/a&gt;.&lt;/p&gt;
&lt;ul&gt;
  &lt;li&gt;List item 1&lt;/li&gt;
  &lt;li&gt;List item 2&lt;/li&gt;
&lt;/ul&gt;

For toggles/accordions (expandable sections):
&lt;details class="toggle-section"&gt;
  &lt;summary class="toggle-summary"&gt;Toggle: Case Study&lt;/summary&gt;
  &lt;div class="toggle-content"&gt;
    &lt;p&gt;Hidden content here...&lt;/p&gt;
  &lt;/div&gt;
&lt;/details&gt;

This ensures headings, paragraphs, lists, and toggles render professionally.`}
                  />
                  <p className="text-xs text-gray-500 mt-2 italic">Tip: Use HTML tags for rich content. Inline links show only text (not full URL). Toggles use &lt;details&gt; for expandable sections like in professional blogs.</p>
                </div>

                {/* Category, Author, Read Time */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-3">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d7b] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat} className="py-2">{cat}</option>
                      ))}
                    </select>
                  </div>
                
                  <div>
                    <label htmlFor="author" className="block text-sm font-semibold text-gray-900 mb-3">
                      Author <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d7b] focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      placeholder="Author name"
                    />
                  </div>
                
                  <div>
                    <label htmlFor="readTime" className="block text-sm font-semibold text-gray-900 mb-3">
                      Read Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="readTime"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d7b] focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      placeholder='e.g., "5 min read"'
                    />
                  </div>
                </div>

                {/* Author Bio */}
                <div>
                  <label htmlFor="authorBio" className="block text-sm font-semibold text-gray-900 mb-3">
                    Author Bio
                  </label>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500">Optional short bio about the author</span>
                    <span className={`text-xs font-medium ${
                      characterCount.authorBio > 500 ? 'text-red-500' : 'text-gray-500'
                    }`}>
                      {characterCount.authorBio}/500
                    </span>
                  </div>
                  <textarea
                    id="authorBio"
                    name="authorBio"
                    value={formData.authorBio}
                    onChange={handleChange}
                    rows="3"
                    maxLength="500"
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d7b] focus:border-transparent transition-all duration-200 resize-none placeholder-gray-400 ${
                      characterCount.authorBio > 500 ? 'border-red-300 ring-1 ring-red-200' : 'border-gray-300'
                    }`}
                    placeholder="Add a brief bio about the author (e.g., 'AI enthusiast with 10+ years in tech')..."
                  />
                  {characterCount.authorBio > 500 && (
                    <p className="text-xs text-red-600 mt-2">
                      Author bio exceeds 500 character limit!
                    </p>
                  )}
                </div>

                {/* Blog Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Blog Image <span className="text-red-500">*</span>
                  </label>
                
                  {/* File Upload Area */}
                  {!imagePreview ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#2e7d7b] transition-colors duration-200 bg-gray-50">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Drag & drop your blog image here</p>
                      <p className="text-sm text-gray-500 mb-4">or</p>
                      <label htmlFor="blogImage" className="cursor-pointer">
                        <span className="px-6 py-3 bg-[#2e7d7b] text-white rounded-lg font-medium hover:bg-[#256967] transition-colors duration-200 inline-block">
                          Browse Files
                        </span>
                        <input
                          type="file"
                          id="blogImage"
                          name="image"
                          onChange={handleBlogImageChange}
                          accept="image/*"
                          required
                          className="hidden"
                        />
                      </label>
                      <p className="text-xs text-gray-500 mt-3">PNG, JPG, JPEG up to 5MB</p>
                    </div>
                  ) : (
                    /* Image Preview */
                    <div className="relative">
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                        <p className="text-sm font-medium text-gray-700 mb-3">Blog Image Preview</p>
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full sm:w-48 h-48 object-cover rounded-lg shadow-sm border border-gray-300"
                          />
                          <div className="flex-1">
                            <p className="text-sm text-gray-600 mb-2">
                              {image?.name} ({(image?.size / 1024 / 1024).toFixed(2)} MB)
                            </p>
                            <button
                              type="button"
                              onClick={removeBlogImage}
                              className="flex items-center space-x-2 text-red-600 hover:text-red-800 font-medium text-sm transition-colors duration-200"
                            >
                              <X className="w-4 h-4" />
                              <span>Remove Image</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Author Image Upload (Optional) */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Author Profile Image
                  </label>
                
                  {/* File Upload Area */}
                  {!authorImagePreview ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#2e7d7b] transition-colors duration-200 bg-gray-50">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Drag & drop author image here (optional)</p>
                      <p className="text-sm text-gray-500 mb-4">or</p>
                      <label htmlFor="authorImage" className="cursor-pointer">
                        <span className="px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors duration-200 inline-block">
                          Browse Files
                        </span>
                        <input
                          type="file"
                          id="authorImage"
                          name="authorImage"
                          onChange={handleAuthorImageChange}
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                      <p className="text-xs text-gray-500 mt-3">PNG, JPG, JPEG up to 2MB</p>
                    </div>
                  ) : (
                    /* Image Preview */
                    <div className="relative">
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                        <p className="text-sm font-medium text-gray-700 mb-3">Author Image Preview</p>
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                          <img
                            src={authorImagePreview}
                            alt="Author Preview"
                            className="w-full sm:w-32 h-32 object-cover rounded-full shadow-sm border border-gray-300"
                          />
                          <div className="flex-1">
                            <p className="text-sm text-gray-600 mb-2">
                              {authorImage?.name} ({(authorImage?.size / 1024 / 1024).toFixed(2)} MB)
                            </p>
                            <button
                              type="button"
                              onClick={removeAuthorImage}
                              className="flex items-center space-x-2 text-red-600 hover:text-red-800 font-medium text-sm transition-colors duration-200"
                            >
                              <X className="w-4 h-4" />
                              <span>Remove Image</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Backlinks */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Backlinks <span className="text-gray-500">(Optional)</span>
                  </label>
                  <p className="text-xs text-gray-500 mb-4">Add end-of-blog links (shows only text, not full URL). For inline links in content, use &lt;a&gt; tags directly in Full Content.</p>
                  <div className="space-y-3">
                    {backlinks.map((link, index) => (
                      <div key={index} className="flex flex-col sm:flex-row gap-3 p-3 bg-gray-50 rounded-lg">
                        <input
                          type="text"
                          placeholder="Link text (e.g., About AI)"
                          value={link.text}
                          onChange={(e) => updateBacklink(index, 'text', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2e7d7b]"
                        />
                        <input
                          type="url"
                          placeholder="URL (e.g., https://aboutai/intro)"
                          value={link.url}
                          onChange={(e) => updateBacklink(index, 'url', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2e7d7b]"
                        />
                        <button
                          type="button"
                          onClick={() => removeBacklink(index)}
                          className="px-3 py-2 text-red-600 hover:text-red-800 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    {backlinks.length === 0 && (
                      <p className="text-xs text-gray-500 italic">No backlinks added yet.</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={addBacklink}
                    className="mt-3 flex items-center space-x-2 px-4 py-2 bg-[#2e7d7b] text-white rounded-lg hover:bg-[#256967] transition-colors text-sm font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Backlink</span>
                  </button>
                </div>

                {/* Checkboxes */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="featured"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 border-2 rounded transition-all duration-200 ${
                        formData.featured
                          ? 'bg-[#2e7d7b] border-[#2e7d7b]'
                          : 'border-gray-300 group-hover:border-[#2e7d7b]'
                      }`}>
                        {formData.featured && (
                          <CheckCircle className="w-4 h-4 text-white absolute top-0.5 left-0.5" />
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      Featured Post
                    </span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="trending"
                        name="trending"
                        checked={formData.trending}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 border-2 rounded transition-all duration-200 ${
                        formData.trending
                          ? 'bg-[#2e7d7b] border-[#2e7d7b]'
                          : 'border-gray-300 group-hover:border-[#2e7d7b]'
                      }`}>
                        {formData.trending && (
                          <CheckCircle className="w-4 h-4 text-white absolute top-0.5 left-0.5" />
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      Trending Post
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={loading || characterCount.excerpt > 200 || characterCount.authorBio > 500}
                    className="w-full sm:w-auto px-8 py-4 bg-[#2e7d7b] hover:bg-[#256967] disabled:bg-gray-400 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-w-[140px]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Publishing...</span>
                      </>
                    ) : (
                      <span>Publish Blog</span>
                    )}
                  </button>
                  {(characterCount.excerpt > 200 || characterCount.authorBio > 500) && (
                    <p className="text-red-600 text-sm mt-2">
                      Please fix character limits before publishing
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddBlog;