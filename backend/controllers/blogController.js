import Blog from '../models/Blog.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Add a new blog
const addBlog = async (req, res) => {
  try {
    const { title, excerpt, fullContent, category, author, authorBio, readTime, featured, trending, backlinks: backlinksStr } = req.body;

    // Validate category against enum
    const validCategories = [
      'Artificial Intelligence',
      'Blockchain',
      'Data Science and Analytics',
      'Enterprise',
      'Industry',
      'Software Development',
      'Technology',
      'UI/UX Design'
    ];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ message: 'Invalid category. Must be one of: ' + validCategories.join(', ') });
    }

    // Parse backlinks if provided
    let backlinks = [];
    if (backlinksStr) {
      try {
        backlinks = JSON.parse(backlinksStr);
        if (!Array.isArray(backlinks)) {
          return res.status(400).json({ message: 'Backlinks must be an array of objects with text and url' });
        }
      } catch (parseErr) {
        return res.status(400).json({ message: 'Invalid backlinks format. Must be valid JSON array.' });
      }
    }

    // Handle blog image upload (required)
    let image = '';
    if (req.files && req.files['image'] && req.files['image'].length > 0) {
      image = `/uploads/blogs/${req.files['image'][0].filename}`;
    } else {
      return res.status(400).json({ message: 'Blog image is required' });
    }

    // Handle author image upload (optional)
    let authorImage = '';
    if (req.files && req.files['authorImage'] && req.files['authorImage'].length > 0) {
      authorImage = `/uploads/authors/${req.files['authorImage'][0].filename}`;
    }

    const newBlog = new Blog({
      title,
      excerpt,
      fullContent,
      category,
      author,
      authorBio,
      readTime,
      image,
      authorImage,
      backlinks,
      featured: featured || false,
      trending: trending || false,
    });

    const savedBlog = await newBlog.save();
    res.status(201).json({
      message: 'Blog added successfully',
      data: savedBlog,
    });
  } catch (error) {
    console.error('Error adding blog:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = [
      'Artificial Intelligence',
      'Blockchain',
      'Data Science and Analytics',
      'Enterprise',
      'Industry',
      'Software Development',
      'Technology',
      'UI/UX Design'
    ];
    
    res.status(200).json({
      message: 'Categories fetched successfully',
      data: categories,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// Update a blog by ID
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    console.log('Update request received:', { id, updateData, files: req.files }); // Debug log

    // Validate category if provided
    if (updateData.category) {
      const validCategories = [
        'Artificial Intelligence',
        'Blockchain',
        'Data Science and Analytics',
        'Enterprise',
        'Industry',
        'Software Development',
        'Technology',
        'UI/UX Design'
      ];
      if (!validCategories.includes(updateData.category)) {
        return res.status(400).json({ message: 'Invalid category. Must be one of: ' + validCategories.join(', ') });
      }
    }

    // Parse backlinks if provided
    if (updateData.backlinks) {
      try {
        updateData.backlinks = JSON.parse(updateData.backlinks);
        if (!Array.isArray(updateData.backlinks)) {
          return res.status(400).json({ message: 'Backlinks must be an array of objects with text and url' });
        }
      } catch (parseErr) {
        return res.status(400).json({ message: 'Invalid backlinks format. Must be valid JSON array.' });
      }
    }

    // Handle blog image upload if new image is provided
    if (req.files && req.files['image'] && req.files['image'].length > 0) {
      updateData.image = `/uploads/blogs/${req.files['image'][0].filename}`;
      console.log('New blog image uploaded:', updateData.image); // Debug log
    } else {
      console.log('No new blog image provided, keeping current image'); // Debug log
      delete updateData.image; // Prevent overwriting if not provided
    }

    // Handle author image upload if new image is provided
    if (req.files && req.files['authorImage'] && req.files['authorImage'].length > 0) {
      updateData.authorImage = `/uploads/authors/${req.files['authorImage'][0].filename}`;
      console.log('New author image uploaded:', updateData.authorImage); // Debug log
    } else {
      console.log('No new author image provided, keeping current author image'); // Debug log
      delete updateData.authorImage; // Prevent overwriting if not provided
    }

    // Convert string booleans to actual booleans
    if (updateData.featured === 'true' || updateData.featured === 'false') {
      updateData.featured = updateData.featured === 'true';
    }
    if (updateData.trending === 'true' || updateData.trending === 'false') {
      updateData.trending = updateData.trending === 'true';
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { ...updateData },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    console.log('Blog updated successfully:', updatedBlog); // Debug log

    res.status(200).json({
      message: 'Blog updated successfully',
      data: updatedBlog,
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({
      message: 'Blog deleted successfully',
      data: deletedBlog,
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Fetch blog by ID
const fetchBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.status(200).json({
      message: 'Blog fetched successfully',
      data: blog,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 }) // Sort by latest first
      .select('-fullContent'); // Exclude full content for better performance

    res.status(200).json({
      message: 'Blogs fetched successfully',
      data: blogs,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
export { addBlog, updateBlog, deleteBlog, fetchBlogById,getCategories,getAllBlogs };