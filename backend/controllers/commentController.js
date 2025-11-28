// controllers/commentController.js - Updated to handle parentId for replies and localStorage note (handled in frontend)
import Comment from '../models/Comment.js';

// Add a new comment or reply
const addComment = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { username, comment, parentId } = req.body;

    // Validate input
    if (!username || !username.trim()) {
      return res.status(400).json({ message: 'Username is required' });
    }

    if (!comment || !comment.trim()) {
      return res.status(400).json({ message: 'Comment is required' });
    }

    if (username.length > 50) {
      return res.status(400).json({ message: 'Username must be less than 50 characters' });
    }

    if (comment.length > 1000) {
      return res.status(400).json({ message: 'Comment must be less than 1000 characters' });
    }

    // If parentId provided, verify it exists and belongs to the same blog
    let validParentId = null;
    if (parentId) {
      const parentComment = await Comment.findOne({ _id: parentId, blogId });
      if (!parentComment) {
        return res.status(400).json({ message: 'Invalid parent comment' });
      }
      validParentId = parentId;
    }

    const newComment = new Comment({
      blogId,
      parentId: validParentId,
      username: username.trim(),
      comment: comment.trim()
    });

    const savedComment = await newComment.save();

    // Populate parent for reply context
    const populatedComment = await Comment.findById(savedComment._id).populate('parentId', 'username comment');

    res.status(201).json({
      message: 'Comment added successfully',
      data: populatedComment
    });

  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET comments - return nested tree
const getCommentsByBlogId = async (req, res) => {
  try {
    const { blogId } = req.params;

    const comments = await Comment.find({ 
      blogId, 
      isApproved: true 
    })
    .populate('parentId', 'username comment')
    .sort({ createdAt: -1 })
    .select('-__v');

    // Build tree
    const commentMap = new Map();
    const topLevel = [];

    comments.forEach(c => {
      const obj = c.toObject();
      obj.replies = [];
      commentMap.set(obj._id.toString(), obj);
      if (!obj.parentId) {
        topLevel.push(obj);
      }
    });

    comments.forEach(c => {
      if (c.parentId) {
        const parent = commentMap.get(c.parentId._id.toString());
        if (parent) {
          parent.replies.push(commentMap.get(c._id.toString()));
        }
      }
    });

    res.status(200).json({
      message: 'Comments fetched successfully',
      data: topLevel,
      count: comments.length // Total comments + replies
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
// Like a comment (works for top-level and replies)
const likeComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findByIdAndUpdate(
      commentId,
      { $inc: { likes: 1 } },
      { new: true }
    );

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.status(200).json({
      message: 'Comment liked successfully',
      data: comment
    });

  } catch (error) {
    console.error('Error liking comment:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a comment (admin functionality, cascades to replies if needed)
const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    // Delete replies first (recursive, but for simplicity, delete direct replies)
    await Comment.deleteMany({ parentId: commentId });
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.status(200).json({
      message: 'Comment deleted successfully',
      data: deletedComment
    });

  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export { 
  addComment, 
  getCommentsByBlogId, 
  likeComment, 
  deleteComment 
};