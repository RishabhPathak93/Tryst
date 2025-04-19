//server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import blogRoutes from './routes/blogRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || 'supersecretkey123';
const ADMIN_PASSKEY = process.env.ADMIN_PASSKEY || 'letmein123';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blogDB';

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json({ limit: '10mb' }));
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// MongoDB connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Admin login route (passkey only)
app.post('/admin/login', (req, res) => {
  const { password } = req.body;

  if (password === ADMIN_PASSKEY) {
    const token = jwt.sign({ role: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid passkey' });
});

// Blog routes (authMiddleware applied in blogRoutes.js for specific routes)
app.use('/api/blogs', blogRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});