//src/admin/AdminBlogEdit.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CATEGORIES = [
  'Hair Care',
  'Skin Care',
  'Nail Care',
  'Spa & Wellness',
  'Beauty Tips',
  'Salon News',
  'Trends & Style',
  'Product Reviews',
];

const AdminBlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: CATEGORIES[0],
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Not authenticated!');
        return;
      }

      try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setFormData({
            title: data.title,
            content: data.content,
            category: data.category,
          });
          setImagePreview(data.image || '');
        } else {
          alert('Failed to fetch blog: ' + data.message);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        alert('Server error while fetching blog.');
      }
    };

    fetchBlog();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('You are not authenticated!');
        return;
      }

      let imageUrl = imagePreview;
      if (selectedImage) {
        imageUrl = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(selectedImage);
        });
      }

      const updatedPost = {
        title: formData.title,
        content: formData.content,
        excerpt: formData.content.slice(0, 150) + '...',
        author: 'Tryst Salon',
        category: formData.category,
        image: imageUrl,
      };

      const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedPost),
      });

      if (res.ok) {
        alert('Blog updated successfully!');
        navigate('/admin/blog');
      } else {
        const err = await res.json();
        alert('Error: ' + err.message);
      }
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Error updating post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Edit Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-salon-purple focus:border-salon-purple"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-salon-purple focus:border-salon-purple"
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <div className="flex items-center mt-1 space-x-4">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              Choose Image
            </button>
            {imagePreview && (
              <button
                type="button"
                onClick={() => {
                  setSelectedImage(null);
                  setImagePreview('');
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Remove Image
              </button>
            )}
          </div>
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="object-cover w-48 h-32 rounded-md"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={10}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-salon-purple focus:border-salon-purple"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/admin/blog')}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-white rounded-md bg-salon-purple hover:bg-dark-green disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : 'Update Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminBlogEdit;