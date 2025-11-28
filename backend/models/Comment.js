// models/Comment.js - Updated to support nested replies with parentId for tree structure
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
    required: true
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    default: null
  },
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  comment: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  likes: {
    type: Number,
    default: 0
  },
  isApproved: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes for better query performance
commentSchema.index({ blogId: 1, createdAt: -1 });
commentSchema.index({ parentId: 1 });
commentSchema.index({ blogId: 1, parentId: 1 });

export default mongoose.model('Comment', commentSchema);