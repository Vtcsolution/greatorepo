// models/Blog.js (Mongoose Model) - No changes needed, already supports fullContent as HTML string
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  excerpt: {
    type: String,
    required: true,
    trim: true,
  },
  fullContent: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Artificial Intelligence',
      'Blockchain',
      'Data Science and Analytics',
      'Enterprise',
      'Industry',
      'Software Development',
      'Technology',
      'UI/UX Design'
    ], // Restricted to predefined categories
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  authorBio: {
    type: String,
    trim: true,
  },
  authorImage: {
    type: String, // URL to author profile image
  },
  date: {
    type: Date,
    default: Date.now,
  },
  readTime: {
    type: String,
    required: true, // e.g., "7 min read"
  },
  views: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: true, // URL to blog image
  },
  backlinks: [{
    text: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
  }],
  featured: {
    type: Boolean,
    default: false,
  },
  trending: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// Index for better query performance on category and trending
blogSchema.index({ category: 1 });
blogSchema.index({ trending: 1 });

export default mongoose.model('Blog', blogSchema);