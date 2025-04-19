// models/Blog.js
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  image: String,
  category: String,
  excerpt: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Blog', blogSchema);
