import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/images/tryst salon and academy.png'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState({})
  const [isMenuScrolled, setIsMenuScrolled] = useState(false)
  // Removed unused 'location' variable

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (mobileMenuOpen) {
      setOpenSubmenus({})
    }
  }

  const toggleSubmenu = name => {
    setOpenSubmenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  const handleMenuScroll = e => {
    setIsMenuScrolled(e.target.scrollTop > 10)
  }

  const handleNavigation = () => {
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }

  const navLinks = [
    { name: 'HOME', path: '/' },
    {
      name: 'ABOUT',
      path: '/about',
      children: [
        { name: 'Tryst', path: '/about' },
        { name: 'Locations', path: '/locations' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'We Care', path: '/we-care' },
        { name: 'Blog', path: '/blog' }
      ]
    },
    {
      name: 'SERVICES',
      path: '/services',
      children: [
        { name: 'Hair', path: '/services/hair' },
        { name: 'Nail', path: '/services/nail' },
        { name: 'Skin', path: '/services/skin' },
        { name: 'Spa', path: '/services/spa' },
        { name: 'Grooming', path: '/services/grooming' },
        { name: 'SPMU', path: '/services/spmu' }
      ]
    },
    {name:'MAKEUP',path:'/services/makeup'},
    { name: 'BLOG', path: '/blog' },
    {
      name: 'BOOK APPOINTMENT',
      path: 'https://wa.me/1234567890',
      external: true
    },
    { name: 'OFFERS', path: '/offers' }
  ]

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Hair Services', path: '/services/hair' },
        { name: 'Nail Services', path: '/services/nail' },
        { name: 'Skin Care', path: '/services/skin' },
        { name: 'Spa Treatments', path: '/services/spa' }
      ]
    }
  ]

  return (
    <div className='flex flex-col min-h-screen overflow-x-hidden font-montserrat text-brown'>
      <ScrollToTop />
      
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#2b3f2a] shadow-md py-3' : 'bg-[#2b3f2a] py-3'
        }`}
      >
        <div className='container flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <Link to='/' className='flex items-center shrink-0 group' onClick={handleNavigation}>
            <img
              src={logo}
              alt='Tryst Salon'
              className='object-contain h-10 transition-all duration-300 sm:h-12 md:h-14 group-hover:scale-105'
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='items-center hidden space-x-6 lg:flex'>
            {navLinks.map(link => (
              <div key={link.name} className='relative group'>
                {link.external ? (
                  <a
                    href={link.path}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative text-xs font-medium tracking-wider uppercase transition text-[#eaded5] hover:underline group'
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className='relative text-xs font-medium tracking-wider uppercase transition text-[#eaded5] hover:underline group'
                    onClick={handleNavigation}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='flex items-center p-2 -mr-2 transition-colors rounded-md lg:hidden hover:bg-secondary-beige'
            onClick={toggleMobileMenu}
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6 text-[#917565]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className='fixed inset-0 z-40 bg-dark-green/50 backdrop-blur-sm lg:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
          >
            <motion.div
              className='absolute top-0 right-0 w-[85vw] max-w-sm h-full overflow-y-auto bg-beige flex flex-col'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              onClick={e => e.stopPropagation()}
              onScroll={handleMenuScroll}
            >
              {/* Menu Header with Close Button */}
              <div
                className={`sticky top-0 z-10 p-4 transition-all duration-300 ${
                  isMenuScrolled ? 'bg-beige shadow-sm' : 'bg-transparent'
                }`}
              >
                <div className='flex items-center justify-between'>
                  <img
                    src={logo}
                    alt='Tryst Salon'
                    className='object-contain h-10'
                  />
                  <button
                    onClick={toggleMobileMenu}
                    className='p-2 transition-colors rounded-full text-brown hover:bg-dark-green hover:text-white'
                    aria-label='Close menu'
                  >
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Menu Content */}
              <div className='flex-1 px-4 pb-8'>
                <nav className='space-y-2'>
                  {navLinks.map(link => (
                    <div
                      key={link.name}
                      className='border-b border-secondary-beige/50'
                    >
                      {link.external ? (
                        <a
                          href={link.path}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center justify-between w-full px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg text-brown hover:text-white hover:bg-dark-green'
                          onClick={handleNavigation}
                        >
                          {link.name}
                        </a>
                      ) : !link.children ? (
                        <Link
                          to={link.path}
                          className='flex items-center justify-between w-full px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg text-brown hover:text-white hover:bg-dark-green'
                          onClick={handleNavigation}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() => toggleSubmenu(link.name)}
                            className='flex items-center justify-between w-full px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg text-brown hover:text-white hover:bg-dark-green'
                            aria-expanded={openSubmenus[link.name]}
                          >
                            <span>{link.name}</span>
                            <svg
                              className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                                openSubmenus[link.name] ? 'rotate-180' : ''
                              }`}
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M19 9l-7 7-7-7'
                              />
                            </svg>
                          </button>
                          <AnimatePresence>
                            {openSubmenus[link.name] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className='overflow-hidden'
                              >
                                <div className='pb-2 ml-4 space-y-1'>
                                  {link.children.map(child => (
                                    <Link
                                      key={child.name}
                                      to={child.path}
                                      className='block px-4 py-2 text-sm transition-all duration-300 rounded-lg text-light-brown hover:text-white hover:bg-dark-green'
                                      onClick={handleNavigation}
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Scroll Indicator */}
              {isMenuScrolled && (
                <div className='absolute left-0 right-0 flex justify-center top-16'>
                  <div className='w-16 h-1 rounded-full bg-dark-green/30'></div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className='flex-grow pt-20'>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className='py-6 text-light-gray bg-[#2b3f2a]'>
        <div className='container px-4 mx-auto'>
          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {footerSections.map((section, index) => (
              <div key={index} className='space-y-2'>
                <h3 className='text-sm font-semibold text-white'>
                  {section.title}
                </h3>
                <ul className='space-y-1'>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.external ? (
                        <a
                          href={link.path}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-xs transition hover:text-white hover:underline'
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className='text-xs transition hover:text-white hover:underline'
                          onClick={handleNavigation}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='pt-6 mt-6 border-t border-light-gray/20'>
            <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
              <div className='flex flex-col items-center sm:items-start'>
                <p className='text-xs text-center text-light-gray/80 sm:text-left'>
                  © {new Date().getFullYear()} Tryst Salon. All rights reserved.
                </p>
                <div className='flex items-center mt-1'>
                  <Link
                    to='/admin/login'
                    className='ml-3 text-xs text-light-gray/50 hover:text-light-gray'
                    onClick={handleNavigation}
                  >
                    Admin
                  </Link>
                </div>
              </div>
              <div className='flex space-x-3'>
                <a
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 transition rounded-full hover:bg-dark-green/80'
                  aria-label='Facebook'
                >
                  <FaFacebookF className='w-4 h-4' />
                </a>
                <a
                  href='https://www.instagram.com/tryst.salon/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 transition rounded-full hover:bg-dark-green/80'
                  aria-label='Instagram'
                >
                  <FaInstagram className='w-4 h-4' />
                </a>
                <a
                  href='https://wa.me/1234567890'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 transition rounded-full hover:bg-dark-green/80'
                  aria-label='WhatsApp'
                >
                  <FaWhatsapp className='w-4 h-4' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href='https://wa.me/1234567890'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed z-40 flex items-center justify-center w-12 h-12 p-3 transition rounded-full shadow-lg text-light-gray bg-dark-green bottom-6 right-6 hover:bg-dark-brown md:w-14 md:h-14'
        aria-label='Chat on WhatsApp'
        style={{ marginBottom: 'env(safe-area-inset-bottom, 20px)' }}
      >
        <FaWhatsapp className='w-6 h-6' />
      </a>
    </div>
  )
}

export default MainLayout