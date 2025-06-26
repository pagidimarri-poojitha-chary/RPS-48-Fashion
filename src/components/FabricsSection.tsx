import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Leaf, Globe } from 'lucide-react';

const FabricsSection: React.FC = () => {
  const fabrics = [
    {
      id: 1,
      name: 'Premium Silk',
      description: 'Luxurious mulberry silk with natural sheen',
      image: 'https://images.pexels.com/photos/6765414/pexels-photo-6765414.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      properties: ['Breathable', 'Hypoallergenic', 'Temperature Regulating'],
      icon: Sparkles,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      name: 'Italian Wool',
      description: 'Fine merino wool from Italian mills',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      properties: ['Wrinkle Resistant', 'Durable', 'Classic'],
      icon: Award,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      id: 3,
      name: 'Organic Cotton',
      description: 'Sustainably sourced organic cotton',
      image: 'https://images.pexels.com/photos/6765415/pexels-photo-6765415.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      properties: ['Eco-Friendly', 'Soft Touch', 'Chemical-Free'],
      icon: Leaf,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      id: 4,
      name: 'French Linen',
      description: 'Premium linen from French flax fields',
      image: 'https://images.pexels.com/photos/6765416/pexels-photo-6765416.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      properties: ['Lightweight', 'Moisture-Wicking', 'Timeless'],
      icon: Globe,
      gradient: 'from-amber-500 to-orange-500',
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
    <section id="fabrics" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Premium Fabrics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We source the finest materials from around the world to ensure your custom garments 
            are not only beautiful but also comfortable and long-lasting.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {fabrics.map((fabric) => (
            <motion.div
              key={fabric.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${fabric.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-300`} />
                  
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <fabric.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-burgundy-600 transition-colors duration-300">
                    {fabric.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {fabric.description}
                  </p>
                  
                  <div className="space-y-2">
                    {fabric.properties.map((property, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gold-500 rounded-full" />
                        <span className="text-sm text-gray-700">{property}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fabric Care Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-burgundy-600 to-burgundy-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Expert Fabric Care
            </h3>
            <p className="text-burgundy-100 mb-8 max-w-2xl mx-auto">
              Each fabric is carefully selected and treated with specialized techniques to ensure 
              longevity, comfort, and the perfect drape for your custom garments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Quality Tested</h4>
                <p className="text-sm text-burgundy-100">Every fabric batch is rigorously tested</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Eco-Conscious</h4>
                <p className="text-sm text-burgundy-100">Sustainable sourcing practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Global Sources</h4>
                <p className="text-sm text-burgundy-100">Premium materials worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FabricsSection;