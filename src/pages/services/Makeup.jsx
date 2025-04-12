import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import SectionTitle from '../../components/SectionTitle';
import backgroundVideo from '../../assets/HeroVideo-recompressed.mp4';
import backgroundImage from '../../assets/images/hero-bg.jpg';

const Makeup = () => {
  const makeupServices = [
    {
      title: 'Signature Makeup',
      subtitle: 'Enhance Your Natural Beauty',
      content: 'Custom looks from soft & subtle to bold & glamorous. Celebrate your unique style with our expert artists.',
      cta: 'Explore styles'
    },
    {
      title: 'Bridal Makeup',
      subtitle: 'Your Picture-Perfect Look',
      content: 'Flawless bridal beauty tailored to your vision, outfit, and personal style for your special day.',
      cta: 'Book consultation'
    },
    {
      title: 'Engagement Makeup',
      subtitle: 'Timeless Elegance',
      content: 'Exclusive services to make you feel radiant for your once-in-a-lifetime moment.',
      cta: 'View packages'
    },
    {
      title: 'Groom Makeup',
      subtitle: 'Subtle & Sophisticated',
      content: 'Natural-looking HD makeup and styling for the modern groom.',
      cta: 'Groom services'
    },
    {
      title: 'Wedding Party',
      subtitle: 'Everyone Shines',
      content: 'Tailored makeup and hairstyling for your friends and family.',
      cta: 'Group options'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection
        title="Makeup Services"
        subtitle="Designed to Highlight Your Beauty"
        backgroundImage={backgroundImage}
        backgroundVideo={backgroundVideo}
        buttonText="BOOK NOW"
        buttonLink="/booking"
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <SectionTitle
            title="Our Services"
            subtitle="Professional makeup for every occasion"
            center
          />

          <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {makeupServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-medium text-salon-purple">{service.title}</h3>
                <h4 className="mb-3 text-gray-600">{service.subtitle}</h4>
                <p className="mb-4 text-sm text-gray-700">{service.content}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-semibold tracking-wider transition-colors text-salon-purple hover:text-black"
                >
                  {service.cta}
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="https://wa.me/1234567890"
              className="inline-flex items-center px-6 py-2 text-sm font-medium text-white uppercase transition-all bg-black rounded-full hover:bg-salon-purple"
            >
              Get Started
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Makeup;