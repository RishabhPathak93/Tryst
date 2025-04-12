import { motion } from 'framer-motion'
import { FiArrowRight, FiClock, FiUserCheck } from 'react-icons/fi'
import HeroSection from '../../components/HeroSection'
import SectionTitle from '../../components/SectionTitle'

const ServiceTemplate = ({
  title,
  subtitle,
  heroImage,
  services,
  additionalContent
}) => {
  return (
    <div className='overflow-hidden'>
      <HeroSection
        title={title}
        subtitle={subtitle}
        backgroundImage={heroImage}
        buttonText='BOOK NOW'
      />

      <section className='px-4 py-16 mx-auto bg-white max-w-7xl md:py-24'>
        <div className='w-full text-center'>
          <SectionTitle
            title='Our Services'
            subtitle='Experience excellence with our carefully curated range of premium services'
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            className='grid w-full grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3'
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className='flex flex-col overflow-hidden transition-all duration-300 bg-white border rounded-lg shadow-sm hover:shadow-md border-almond/30'
              >
                <div className='flex flex-col flex-grow p-6 text-center'>
                  <h3 className='mb-3 text-xl font-bold font-lora text-salon-purple'>
                    {service.name}
                  </h3>
                  <p className='mb-4 text-jet/80'>{service.description}</p>

                  {service.price && (
                    <p className='mb-4 text-lg font-semibold text-salon-purple'>
                      {service.price}
                    </p>
                  )}

                  <div className='flex justify-center gap-4 mb-4 text-sm text-jet/60'>
                    {service.duration && (
                      <span className='flex items-center gap-1'>
                        <FiClock size={14} /> {service.duration}
                      </span>
                    )}
                    {service.bestFor && (
                      <span className='flex items-center gap-1'>
                        <FiUserCheck size={14} /> {service.bestFor}
                      </span>
                    )}
                  </div>

                  {service.details && (
                    <div className='mt-4'>
                      <h4 className='mb-2 text-sm font-semibold uppercase text-jet/70'>
                        Treatment Highlights
                      </h4>
                      <ul className='space-y-1 text-sm text-left text-jet/80'>
                        {service.details.map((detail, i) => (
                          <li key={i} className='flex items-start gap-2'>
                            <span className='mt-1 text-salon-purple'>
                              <FiArrowRight size={12} />
                            </span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className='px-6 py-3 text-center border-t bg-almond/10 border-almond/20'>
                  <button className='w-full max-w-xs py-2 text-sm font-medium tracking-wide text-white uppercase transition-all duration-300 rounded bg-salon-purple hover:bg-black'>
                    Book This Service
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {additionalContent}

      <section className='px-4 py-16 mx-auto text-center bg-almond/50'>
        <div className='w-full'>
          <SectionTitle
            title='Ready to transform your look?'
            subtitle='Book your appointment at Tryst Salon and let our experts create magic.'
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className='flex flex-wrap justify-center gap-4 mt-8'
          >
            <a
              href='https://wa.me/1234567890'
              className='inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 bg-salon-purple hover:bg-black'
            >
              WhatsApp Booking
            </a>
            <a
              href='tel:+1234567890'
              className='inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wider text-black uppercase transition-all duration-300 bg-white hover:bg-salon-purple hover:text-white'
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServiceTemplate