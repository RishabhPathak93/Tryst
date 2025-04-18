import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SectionTitle = ({
  title,
  subtitle,
  center = false,
  light = false,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`mb-6 md:mb-12 px-4 sm:px-6 md:px-8 ${center ? 'text-center' : ''} ${className}`}
    >
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-lora font-semibold mb-4 ${light ? 'text-white' : 'text-dark-green'}`}>
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed tracking-normal max-w-3xl ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-white/80' : 'text-brown/80'} text-center`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  center: PropTypes.bool,
  light: PropTypes.bool,
  className: PropTypes.string,
};

export default SectionTitle;
