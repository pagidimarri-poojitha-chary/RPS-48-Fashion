import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Company: ['About Us', 'Our Story', 'Careers', 'Press', 'Contact'],
    Services: ['Custom Tailoring', 'Fabric Selection', 'Measurements', 'Alterations', 'Rush Orders'],
    Support: ['Help Center', 'Size Guide', 'Order Tracking', 'Returns', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold text-gold-400 mb-4">
                RPS 48Fashion
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Experience luxury fashion with our custom-made attire delivered in just 48 hours. 
                Precision tailoring meets modern convenience.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-gold-400" />
                  <span className="text-gray-300">rps48fashion@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-gold-400" />
                  <span className="text-gray-300">+91 8125883729</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-gold-400" />
                  <span className="text-gray-300">Secunderabad, Hyderabad</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gold-400">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gold-400">
                Stay Updated
              </h4>
              <p className="text-gray-300">
                Subscribe to get the latest fashion trends and exclusive offers.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            © 2024 RPS 48Fashion. All rights reserved.
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 bg-gray-800 hover:bg-gold-600 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;