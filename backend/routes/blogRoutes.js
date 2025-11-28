import express from 'express';
import { 
  addBlog, 
  updateBlog, 
  deleteBlog, 
  fetchBlogById, 
  getCategories,
  getAllBlogs
} from '../controllers/blogController.js';
import upload from '../middleware/upload.js'; // your multer config

const router = express.Router();

// POST /api/blogs - Add new blog
router.post(
  '/',
  upload.fields([
    { name: 'image', maxCount: 1 },        // Blog cover
    { name: 'authorImage', maxCount: 1 }   // Author avatar
  ]),
  addBlog
);

// GET /api/blogs - Get all blogs (no fullContent)
router.get('/', getAllBlogs);

// GET /api/blogs/categories/all - Get categories
router.get('/categories/all', getCategories);

// GET /api/blogs/:id - Fetch single blog + increment views
router.get('/:id', fetchBlogById);

// PUT /api/blogs/:id - Update blog
router.put(
  '/:id',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'authorImage', maxCount: 1 }
  ]),
  updateBlog
);

// DELETE /api/blogs/:id
router.delete('/:id', deleteBlog);

export default router;