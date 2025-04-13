import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminBlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Not authenticated!');
        return;
      }

      try {
        const res = await fetch('http://localhost:5000/admin/blogs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setPosts(data);
        } else {
          alert('Failed to fetch blogs: ' + data.message);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        alert('Server error while fetching blogs.');
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this post?');
    if (!confirmed) return;

    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`http://localhost:5000/admin/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setPosts((prev) => prev.filter((post) => post.id !== id));
      } else {
        const err = await res.json();
        alert('Failed to delete post: ' + err.message);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Server error while deleting post.');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manage Blog Posts</h1>
        <Link
          to="/admin/blog/new"
          className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-md bg-salon-purple hover:bg-dark-green"
        >
          Create New Post
        </Link>
      </div>

      <div className="overflow-hidden bg-white rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Author
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Category
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{post.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{post.author}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    {post.category || 'Uncategorized'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <Link
                    to={`/admin/blog/edit/${post.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="ml-4 text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlogList;
