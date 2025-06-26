import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Menu, X, ShoppingBag } from 'lucide-react';

interface NavigationProps {
  onAuthModalOpen: (type: 'login' | 'signup') => void;
}

const Navigation: React.FC<NavigationProps> = ({ onAuthModalOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Women', 'Men', 'Kids', 'Fabrics', 'Tailors'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <h1 className={`text-2xl lg:text-3xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? 'text-burgundy-900' : 'text-white'
            }`}>
              RPS 48Fashion
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.a
              href="#home"
              whileHover={{ y: -2 }}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-burgundy-600' : 'text-white hover:text-gold-400'
              }`}
            >
              Home
            </motion.a>
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-burgundy-600' : 'text-white hover:text-gold-400'
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <ShoppingBag size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAuthModalOpen('login')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-burgundy-600 hover:bg-burgundy-50'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <User size={16} />
              <span className="text-sm font-medium">My Account</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md"
        >
          <div className="px-4 py-6 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-burgundy-600 font-medium">
              Home
            </a>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-burgundy-600 font-medium"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => onAuthModalOpen('login')}
              className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-burgundy-600 font-medium"
            >
              <User size={16} />
              <span>My Account</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;