import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const testimonials = [
  {
    id: 1,
    content: "Awesome experience ..appointments were easily available and they were so warm and equally professional ..OT was a pleasant experience .thank u for being considerate too. Nail gel paint was also beautifully and patiently done. Curl hair cut is a challenge by itself but they did it beautifully.",
    author: "Deepa Santhosh",
    location: "Bangalore"
  },
  {
    id: 2,
    content: "I recently visited this salon and had a fantastic experience. Imran did an excellent job with my haircut…it turned out exactly as I wanted. Kunti with top-notch nail service, leaving me very satisfied with the results. The atmosphere was welcoming, and the staff were friendly and professional.",
    author: "Reshma Angadi",
    location: "Bangalore"
  },
  {
    id: 3,
    content: "If you want to pamper yourself to a rejuvenating salon treatment then Tryst is the place to go to! Got a pedi, facial and hair spa done and it was so worth it! Vikas, Sudeeksha and Kanti were simply fantastic. Tryst also has some amazing products and they've got some good deals and offers on! Do give this place a try!",
    author: "Kanisha Gulwadi",
    location: "Bangalore"
  },
  {
    id: 4,
    content: "Loved the service, we did men and women both hair wash and hair cuts, good stylists, vikas and nizam, co operative staff, reasonable pricing. Must visit. Recommended.",
    author: "Rabiya Shaikh",
    location: "Bangalore"
  },
  {
    id: 5,
    content: "My daughters and me were very happy with the way the store people discussed and brought the best for us. Yonus did an amazing job and complete makeover of my daughters. Keep up the good work 👏🏻👏🏻",
    author: "Anusha R",
    location: "Bangalore"
  },
  {
    id: 6,
    content: "A Fantastic experience,very patient and nice service by Vikas.The place is Beautifully Done up.Very Clean and Crisp.",
    author: "Reshma Angadi",
    location: "Bangalore"
  },
  {
    id: 7,
    content: "Clean, beautiful space coupled with very skilled and kind stylists makes this salon a great choice.",
    author: "Jyothsna Deshpande",
    location: "Bangalore"
  },
  {
    id: 8,
    content: "I had the most amazing experience at Tryst, and I couldn’t wait to share! I opted for a scalp detox treatment, a pedicure, and a haircut—and each service exceeded my expectations.",
    author: "Deboleena",
    location: "Bangalore"
  },
  {
    id: 9,
    content: "my experience was so good , they dont misguide you they properly do your skin or hair consultation before doing anything and they advise the best for you , I am a regular customer of tryst now and no other place feels better than this 😍",
    author: "Chetan Shriyan",
    location: "Bangalore"
  },
  {
    id: 10,
    content: "Tryst is an oasis for hair, body and mind. As you step into this salon you’re transported to serene bliss. Every member of the specialist team is kind, super professional and extremely talented. I had the most amazing (heavenly) body scrub experience at Tryst - while my friends had their hair and nails transformed. I recommend this team highly, if you’re looking for quality and exceptional care - especially for curly South Asian hair…the results were magic!",
    author: "Shanti Pathmanathan",
    location: "Bangalore"
  },
  {
    id: 11,
    content: "This salon is a hidden gem for anyone with curly hair in South Bangalore! I went in specifically for a curly hair dry cut and treatment, and it was the best decision I've made for my locks in a long time.",
    author: "Naimisha Sanjay",
    location: "Bangalore"
  },
  
  
  
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-champagne_pink/20">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="What our clients love about us"
          subtitle="Real feedback from real clients — here's what they had to say."
          center
        />

        <div className="relative max-w-4xl mx-auto mt-12 min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                x: index === activeIndex ? 0 : 50,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0
              }}
              transition={{ duration: 0.5 }}
              className={`bg-white p-8 shadow-md rounded-md ${
                index === activeIndex ? 'z-10' : 'z-0'
              }`}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <svg className="w-10 h-10 mb-4 text-salon-purple/30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="mb-6 text-lg italic text-jet/90">"{testimonial.content}"</p>
                </div>
                <div>
                  <p className="font-medium text-jet">
                    {testimonial.author}
                    {testimonial.location && (
                      <span className="font-normal text-jet/70"> — {testimonial.location}</span>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute left-0 right-0 flex justify-center gap-2 mt-6 -bottom-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-salon-purple scale-110' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${testimonial.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
