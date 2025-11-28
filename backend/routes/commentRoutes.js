// routes/commentRoutes.js - No major changes, but ensured consistency for nested support
import express from 'express';
import { 
  addComment, 
  getCommentsByBlogId, 
  likeComment, 
  deleteComment 
} from '../controllers/commentController.js';

const router = express.Router();

// POST /api/blogs/:blogId/comments - Add a new comment or reply (parentId in body)
router.post('/:blogId/comments', addComment);

// GET /api/blogs/:blogId/comments - Get all comments (tree structure)
router.get('/:blogId/comments', getCommentsByBlogId);

// PUT /api/blogs/comments/:commentId/like - Like a comment or reply
router.put('/:commentId/like', likeComment)
// DELETE /api/blogs/comments/:commentId - Delete a comment or reply
router.delete('/comments/:commentId', deleteComment);

export default router;