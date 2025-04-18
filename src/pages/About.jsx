import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import SectionTitle from '../components/SectionTitle'
import { Link } from 'react-router-dom'
import heroImage from '../assets/images/hero.jpeg'
import salon1Image from '../assets/images/1.jpg'
import heroVideo from '../assets/TrystBackground.mp4'

const About = () => {
  return (
    <div>
      <HeroSection
        title='#Crafted With Care'
        subtitle='Step into our world — where style, sustainability, and comfort come together.'
        backgroundImage={heroImage}
        backgroundVideo={heroVideo}
        buttonText='EXPLORE OUR WORK'
        buttonLink='https://www.instagram.com/tryst.salon/'
      />

      <section className='py-10 bg-white md:py-24'>
        <div className='container px-4 mx-auto'>
          <div className='grid items-center gap-12 md:grid-cols-2'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <SectionTitle
                title='Our Story'
              />
              <div className='mt-3 space-y-4 text-[#917565] text-justify'>
              <p>At Tryst, we bring together inspiration, artistry, creativity and sustainability in a space that truly reflects our values. This vision is the heartbeat of everything we do — and that’s what makes each of your visits truly unique.</p>

                <p>At our salon, we blend timeless elegance with heartfelt care. Founded in 2023, our goal has always been to create a space where you can unwind, feel empowered, rejuvenated and leave looking your best!

We’re all about crafting confidence — through personalized care, thoughtful service, and a genuine commitment to clean beauty. By using all-natural, eco-friendly products, we ensure every treatment is a mindful blend of what’s best for you and for the planet.

Step into a beautifully designed space, created to offer a warm, inviting atmosphere that makes you feel completely comfortable and at ease. Here, you are valued, rejuvenated, and treated with the utmost care – because your radiance is our purpose.
</p>
                  <p>Welcome to Tryst — a retreat where timeless elegance meets
                  heartfelt care. From day one, our mission has been simple: to
                  help you look and feel your best through services crafted with
                  love, intention, and integrity.
                </p>
                
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className='relative'
            >
              <img
                src={salon1Image}
                alt='Tryst salon interior'
                className='relative z-10 object-cover w-full transition-all duration-500 rounded-lg shadow-lg grayscale hover:grayscale-0'
              />
              <div className='absolute w-32 h-32 rounded-lg -bottom-4 -right-4 bg-salon-purple -z-0' />
            </motion.div>
          </div>
        </div>
      </section>

      <section className='py-10 bg-white md:py-24'>
        <div className='container px-4 mx-auto'>
          <SectionTitle
            title='Our Values'
            subtitle='The core principles that guide our approach to beauty and care.'
            center
          />

          <div className='grid gap-8 px-4 mt-12 md:grid-cols-3'>
            {[
              {
                title: 'Sustainability',
                description: `At our salon, sustainability isn’t just a choice — it’s a commitment to both our clients, community and the environment. We thoughtfully select clean, eco-conscious products that are as gentle on you as they are respectful to the planet.`,
                icon: (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                  />
                )
              },
              {
                title: 'Personalization',
                description: `Luxury lies in the details—and we pay attention to every one of them. No two clients are the same—and neither are our services. From the moment you walk in, everything we do is tailored to your unique style, needs, and vibe. Whether it's a complete makeover or a subtle refresh, our expert stylists create looks that are as individual as you are. Because you deserve nothing less than made-for-you beauty.`,
                icon: (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
                  />
                )
              },
              {
                title: 'Comfort',
                description: `Welcome to our salon – a retreat where elegance, confidence, and care come together. Founded just two years ago, we are dedicated to helping you look and feel your best. Our approach goes beyond enhancing your appearance. Step into a beautifully designed space, created to offer a warm, inviting atmosphere that makes you feel completely comfortable and at ease. Here, you are valued, rejuvenated, and treated with the utmost care – because your radiance is our purpose.`,
                icon: (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  />
                )
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                viewport={{ once: true, margin: '-100px' }}
                className='p-6 text-center transition-transform duration-300 shadow-lg bg-white/5 backdrop-blur-md rounded-2xl hover:scale-105'
              >
                <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-champagne_pink/30'>
                  <svg
                    className='w-8 h-8 text-salon-purple'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className='mb-3 text-xl font-semibold font-lora text-salon-purple'>
                  {item.title}
                </h3>
                <p className='text-sm leading-relaxed text-justify text-jet/80'>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 text-jet md:py-24 bg-champagne_pink/35'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-3xl mx-auto text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className='mb-6 text-3xl md:text-4xl font-lora text-salon-purple'
          >
            Experience beauty with integrity
          </motion.h2>
    
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className='mb-8 text-jet/80'
          >
            Ready to experience personalized care in our warm and inviting
            space?
          </motion.p>
    
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Link
              to='https://wa.me/1234567890'
              className='inline-block px-8 py-3 mr-4 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 bg-salon-purple hover:bg-black hover:text-white'
            >
              Book an Appointment
            </Link>
            <Link
              to='/services'
              className='inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-salon-purple border-salon-purple hover:bg-salon-purple hover:text-white'
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
