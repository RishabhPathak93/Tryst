import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <HeroSection
        title="Our Blog"
        subtitle="Discover beauty insights, trends, and stories from the Tryst family"
        youtubeVideoId="YF_eMPKJqG0"
        backgroundImage={undefined}
        backgroundVideo={undefined}
        buttonText={undefined}
        buttonLink={undefined}
      />

      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Latest Posts"
            subtitle="Explore our curated collection of beauty wisdom and salon stories"
            center
          />

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-16 h-16 border-4 rounded-full border-salon-purple border-t-transparent animate-spin"></div>
            </div>
          ) : error ? (
            <div className="mt-12 text-center">
              <p className="text-lg text-red-600">{error}</p>
            </div>
          ) : posts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3"
            >
              {posts.map((post) => (
                <BlogPost key={post._id} post={post} />
              ))}
            </motion.div>
          ) : (
            <div className="mt-12 text-center">
              <p className="text-lg text-jet/70">No blog posts available yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;