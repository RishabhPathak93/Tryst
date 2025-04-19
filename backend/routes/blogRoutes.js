//blogRoutes.js
import express from 'express';
import multer from 'multer';
import Blog from '../models/Blog.js';
import { createBlog, getBlogs, deleteBlog } from '../controllers/blogController.js';
import authMiddleware from '../middleware/authMiddleware.js';

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

const router = express.Router();

// Public routes (no auth required)
router.get('/', getBlogs);
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Protected routes (require auth)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { title, content, author, category } = req.body;
    const excerpt = content.slice(0, 150) + '...';
    const image = req.file ? `/uploads/${req.file.filename}` : '';
    const newBlog = new Blog({ title, content, author, image, category, excerpt });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { title, content, author, category, excerpt } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, author, image, category, excerpt },
      { new: true }
    );
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', authMiddleware, deleteBlog);

// Debug route (optional, remove in production)
router.get('/debug/all', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    console.log('All Blog Posts:', blogs);
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;