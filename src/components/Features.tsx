import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Palette, Camera, User, ArrowRight } from 'lucide-react';

interface FeaturesProps {
  onMeasurementOpen: () => void;
  onAuthModalOpen: (type: 'login' | 'signup') => void;
}

const Features: React.FC<FeaturesProps> = ({ onMeasurementOpen, onAuthModalOpen }) => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Trending Outfits',
      description: 'Discover the latest fashion trends curated by our expert designers',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      gradient: 'from-pink-500 to-rose-500',
      action: () => {},
    },
    {
      icon: Palette,
      title: 'Premium Fabrics',
      description: 'Choose from our collection of luxury fabrics sourced worldwide',
      image: 'https://images.pexels.com/photos/6765414/pexels-photo-6765414.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      gradient: 'from-purple-500 to-indigo-500',
      action: () => {},
    },
    {
      icon: Camera,
      title: 'Smart Measurements',
      description: 'Get precise measurements using our AI-powered camera scanning technology',
      image: 'https://images.pexels.com/photos/4968542/pexels-photo-4968542.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      gradient: 'from-teal-500 to-cyan-500',
      action: onMeasurementOpen,
    },
    {
      icon: User,
      title: 'My Account',
      description: 'Manage your orders, measurements, and preferences in one place',
      image: 'https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      gradient: 'from-orange-500 to-amber-500',
      action: () => onAuthModalOpen('login'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Crafting Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of traditional craftsmanship and modern technology 
            in every custom piece we create.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={feature.action}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-burgundy-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;