import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sudeeksha',
      role: 'Fashion Blogger',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'RPS 48Fashion exceeded my expectations! The custom dress fit perfectly and arrived exactly on time. The quality is exceptional and the attention to detail is remarkable.',
    },
    {
      id: 2,
      name: 'Pranav Ram',
      role: 'Business Executive',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'I needed a custom suit for an important presentation, and RPS 48Fashion delivered in just 48 hours. The craftsmanship is outstanding and the fit is perfect.',
    },
    {
      id: 3,
      name: 'Sarala',
      role: 'Wedding Planner',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'As a wedding planner, I recommend RPS 48Fashion to all my clients. Their ability to create stunning custom outfits in such a short time is incredible.',
    },
    {
      id: 4,
      name: 'Siddhu',
      role: 'Tech Entrepreneur',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The AI measurement technology is game-changing. I got my measurements done remotely and the final product fit like it was made just for me - which it was!',
    },
    {
      id: 5,
      name: 'Swathi',
      role: 'Interior Designer',
      avatar: 'https://images.pexels.com/photos/3764544/pexels-photo-3764544.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The fabric selection is incredible and the tailoring is impeccable. RPS 48Fashion has become my go-to for all special occasions. Highly recommended!',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust RPS 48Fashion for their custom clothing needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote size={48} className="text-burgundy-600" />
              </div>

              {/* Avatar and info */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold-500 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-burgundy-500 to-gold-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-burgundy-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-burgundy-600 mb-2">99.8%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-burgundy-600 mb-2">48hrs</div>
            <div className="text-gray-600">Average Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-burgundy-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;