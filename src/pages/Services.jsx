import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ServicesGrid from '../components/ServicesGrid';
import backgroundVideo from '../assets/TrystBackground.mp4';
import backgroundImage from '../assets/images/hero-bg.jpg';
import service1 from '../assets/images/8.jpg';
import service2 from '../assets/images/44.jpg';
import service3 from '../assets/images/18.jpg';
import service4 from '../assets/images/78.jpg';
import service5 from '../assets/images/60.jpg';
import service6 from '../assets/images/30.jpg';
import service7 from "../assets/images/183.jpg";


const Services = () => {
  const serviceCategories = [
    {
      id: 1,
      title: "Women's Hair",
      description: 'From classic cuts to trendy styles, our expert stylists create looks that enhance your natural beauty.',
      image: service1,
      link: '/services/hair'
    },
    {
      id: 2,
      title: 'Skin',
      description: 'Revitalize your skin with our customized facials and advanced skincare treatments.',
      image: service2,
      link: '/services/skin'
    },
    {
      id: 3,
      title: "Men's Hair",
      description: 'Professional grooming services to keep you looking sharp and well-maintained.',
      image: service3,
      link: '/services/grooming'
    },
    {
      id: 4,
      title: 'Texture',
      description: 'Indulge in relaxing spa treatments that rejuvenate your body and mind.',
      image: service4,
      link: '/services/Texture'
    },
    {
      id: 5,
      title: 'Nail',
      description: 'Express yourself with our creative nail art and professional manicure services.',
      image: service5,
      link: '/services/nail'
    },
    {
      id: 6,
      title: 'Make Up',
      description: 'Enhance your natural features with long-lasting semi-permanent makeup solutions.',
      image: service6,
      link: '/services/makup'
    },
    {
      id: 7,
      title: 'The Beauty Edit',
      description: 'Your Must-Have Rituals for Smooth, Glowing Skin. ',
      image: service7,
      link: '/services/edit'
    }
  ];

  return (
    <div>
      <HeroSection
        title="The Beauty Edit"
        subtitle="Your Go-To Rituals for Radiant Skin, Luscious Hair, Flawless Nails & Total Self-Care  ."
        backgroundImage={backgroundImage}
        backgroundVideo={backgroundVideo}
        buttonText="BOOK NOW"
      />

      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Our Services"
            subtitle="From haircuts and coloring to spa treatments and nail care, our comprehensive range of services is designed to enhance your natural beauty and leave you feeling refreshed and rejuvenated."
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-12"
          >
            <ServicesGrid services={serviceCategories} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-almond/20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <SectionTitle
                title="Tailored to You"
                subtitle="Each service is personalized to match your unique needs and preferences. Our experienced professionals take time to understand your goals before recommending the best approach."
              />

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 text-white rounded-full bg-salon-purple">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-1 text-lg font-medium text-jet">Free Consultation</h3>
                    <p className="text-jet/70">Begin with a complimentary consultation to identify your needs and goals.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 text-white rounded-full bg-salon-purple">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-1 text-lg font-medium text-jet">Premium Products</h3>
                    <p className="text-jet/70">We use only the highest quality products from trusted brands in the industry.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 text-white rounded-full bg-salon-purple">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-1 text-lg font-medium text-jet">Skilled Professionals</h3>
                    <p className="text-jet/70">Our team of experts undergoes continuous training to stay ahead of the latest trends and techniques.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="flex items-center"
            >
              <img
                src={service4}
                alt="Salon service"
                className="object-cover w-full h-auto transition-all duration-500 rounded-lg shadow-lg grayscale hover:grayscale-0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white md:py-24 bg-champagne_pink-500/35">
        <div className="container px-4 mx-auto text-center">
          <SectionTitle
            title="Ready to experience the difference?"
            subtitle="Book your appointment today and let our experts take care of you."
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-8"
          >
            <a
              href="https://wa.me/1234567890"
              className="inline-block px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 bg-salon-purple hover:bg-black hover:text-white"
            >
              Book an Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
