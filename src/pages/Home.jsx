import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { FaMapMarkerAlt } from "react-icons/fa";
import ServiceCard from '../components/ServiceCard';
import TestimonialSection from '../components/TestimonialSection';
import { Link } from 'react-router-dom';
import salon1 from '../assets/images/11.jpg';
import salon2 from '../assets/images/44.jpg';
import salon3 from '../assets/images/18.jpg';
import salon4 from '../assets/images/5.jpg';
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';
import heroBg from '../assets/images/13.jpg';
import salon5 from '../assets/images/28.jpg'
import heroImage from '../assets/images/hero.jpeg';
import heroVideo from '../assets/TrystBackground.mp4';




const Home = () => {
  const services = [
    {
      id: 1,
      title: "Women's Hair",
      description: 'Own your day with confidence — and hair that’s ready to steal the spotlight! We specialize in precision cuts and expert styling, offering personalized services that match your mood, your vibe, and every occasion!',
      image: salon1,
      link: '/services/hair',
      reversed: false
    },
    {
      id: 2,
      title: 'Hair Colouring',
      description: "At Tryst, we don’t just color hair — we create head-turning magic! Whether you’re vibing with ombré, craving bold streaks, or dreaming of balayage, foliage, highlights, or even money piece (yep, we do that too!) — we’ve got the skills to make it pop. Pick your vibe with our Sunkissed or À La Carte color options — both designed to keep your hair healthy while bringing major color energy. No damage, just pure hair happiness!",
      image: salon2,
      link: '/services/Haircolor',
      reversed: true
    },
    {
      id: 3,
      title: 'Skin',
      description: "Whether youre after a quick refresh or a high-performance skin treatment, we’ve got you covered. From gentle exfoliation and deep hydration to targeted solutions for fine lines, dark spots, and dullness — our treatments are designed to bring out your best skin.",
      image: salon5,
      link: '/services/skin',
      reversed: false
    },
    {
      id: 4,
      title: "Men's Hair",
      description: "At Tryst, men’s hair and grooming isn’t an afterthought — it’s a craft. From sharp beard shaping to sleek haircuts and personalized styling, we offer a full spectrum of services tailored just for you. With a team of skilled stylists, each bringing their unique flair, you're sure to find the perfect match for your vibe. Ready to elevate your look? Book your session today. ",
      image: salon3,
      link: '/services/Menshair',
      reversed: true
    },
    {
      id: 5,
      title: 'Hair Texture',
      description: 'For smoother texture and long-lasting shine, explore our advanced smoothing services or treat yourself to our premium, professional Hair Botox treatment — formaldehyde-free, absolutely safe, and completely transformative.',
      image: salon4,
      link: '/services/Texture',
      reversed: false
    }
  ];

  return (
    <div className="bg-white">
     <HeroSection
             title="Our Blog"
             subtitle="Discover beauty insights, trends, and stories from the Tryst family"
             youtubeVideoId="YF_eMPKJqG0" // YouTube video ID
             backgroundImage={undefined} // Explicitly disable to avoid conflict
             backgroundVideo={undefined} // Explicitly disable to avoid conflict
             buttonText={undefined}
             buttonLink={undefined}
           />

      <section className="py-16 bg-champagne-pink/10">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="#CraftedWithCare"
            subtitle="We’re all about crafting confidence — through personalized care, thoughtful service, and a genuine commitment to clean beauty."
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-8 mb-12 text-center"
          >
            <Link
              to="/about"
              className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-brown border-dark-green hover:bg-dark-green hover:text-white"
            >
              More about us
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white md:py-24">
        <div className="container px-4 mx-auto mb-16">
          <SectionTitle
            title="Our Services"
            subtitle="Experience premium services tailored to your unique style and needs."
            center
          />
        </div>

        <div className="space-y-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
              reversed={service.reversed}
            />
          ))}
        </div>

        <div className="container px-4 mx-auto mt-16 text-center">
          <Link
            to="/services"
            className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-[#917565] border-dark-green hover:bg-dark-green hover:text-white"
          >
            Explore all services
          </Link>
        </div>
      </section>

      <TestimonialSection />

      <section className="relative py-16 overflow-hidden text-jet md:py-24 bg-champagne-pink/10">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative z-10 space-y-6">
              <SectionTitle
                title="Our work"
                subtitle="From styling specialists to skincare pros, we take your beauty journey personally. Here’s a glimpse of what passion looks like."
                className="mb-0"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Link
                  to="https://www.instagram.com/tryst.salon/"
                  className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-brown border-dark-green hover:bg-dark-green hover:text-white"
                >
                  View our work
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative z-10 grid grid-cols-2 gap-4"
            >
              <div className="col-span-2 row-span-2 overflow-hidden rounded-lg shadow-lg md:col-span-1 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service1} 
                    alt="Our work" 
                    className="object-cover w-full h-full transition-all duration-500 transform grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-black opacity-20 group-hover:opacity-0" />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service2} 
                    alt="Our work" 
                    className="object-cover w-full h-48 transition-all duration-500 transform grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-black opacity-20 group-hover:opacity-0" />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service3} 
                    alt="Our work" 
                    className="object-cover w-full h-48 transition-all duration-500 transform grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-black opacity-20 group-hover:opacity-0" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 bg-gradient-to-br from-dun/50 to-champagne-pink/50"
        />
      </section>

      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="order-2 md:order-1"
            >
              <img
                src={heroBg}
                alt="Make a booking"
                className="object-cover w-full rounded-lg shadow-lg h-80"
              />
            </motion.div>

            <div className="order-1 md:order-2">
              <SectionTitle
                title="Here to help"
                subtitle="Got questions or ready to book your glow-up? Let’s get you connected."
              />
              <div className='my-2'>
              <span><FaMapMarkerAlt />Location: </span>
                <span className=' font-medium'>Tryst Salon, 1st Floor, 2nd Cross Rd, 2nd Block, Koramangala, Bengaluru, Karnataka 560034</span>
              </div>
              <div className="mb-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-center"
                >
                  <div className="mr-2 font-medium text-jet">Banglore: </div>
                  <a href="tel:+917411058413" className="text-jet hover:underline">7411058413</a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-center"
                >
                  <div className="mr-2 font-medium text-jet">Banglore: </div>
                  <a href="tel:+918035800762" className="text-jet hover:underline">8035800762</a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
              <a
              href="mailto:example@email.com?subject=Inquiry%20from%20Tryst%20Salon&body=Hello,%20I%20have%20a%20question..."
              className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-brown border-dark-green hover:bg-dark-green hover:text-white"
            >
              Send us an email
            </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
