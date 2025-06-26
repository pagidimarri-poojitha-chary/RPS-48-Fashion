import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.7), rgba(139, 21, 56, 0.5)), url('https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-32 h-32 border border-gold-400/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-20 w-16 h-16 bg-gold-400/10 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Design Your
              <span className="block text-gold-400">Perfect Outfit</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Experience luxury fashion with our custom-made attire delivered in just 48 hours. 
            Precision tailoring meets modern convenience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-gold-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 text-white hover:text-gold-400 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full border-2 border-white/50 group-hover:border-gold-400 flex items-center justify-center transition-colors duration-300">
                <Play size={16} fill="currentColor" />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold-400 mb-1">48h</div>
              <div className="text-white/80 text-sm">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold-400 mb-1">10k+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold-400 mb-1">99%</div>
              <div className="text-white/80 text-sm">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;