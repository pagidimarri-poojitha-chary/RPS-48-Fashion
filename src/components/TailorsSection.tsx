import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Award, Clock } from 'lucide-react';

const TailorsSection: React.FC = () => {
  const tailors = [
    {
      id: 1,
      name: 'Naresh ',
      specialty: 'Evening Gowns & Formal Wear',
      experience: '15+ years',
      location: 'Hyderabad',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievements: ['Master Tailor Certified', 'Fashion Week Designer', 'Bridal Specialist'],
      description: 'Specializing in luxury evening wear with intricate beadwork and custom embellishments.',
    },
    {
      id: 2,
      name: 'Suresh',
      specialty: 'Men\'s Suits & Business Attire',
      experience: '12+ years',
      location: 'Warangal',
      rating: 4.8,
      reviews: 189,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievements: ['Savile Row Trained', 'Corporate Fashion Expert', 'Precision Fit Specialist'],
      description: 'Expert in classic and contemporary men\'s tailoring with perfect attention to fit.',
    },
    {
      id: 3,
      name: 'Krishna Sai',
      specialty: 'Women\'s Casual & Contemporary',
      experience: '10+ years',
      location: 'Nalgonda',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/3764544/pexels-photo-3764544.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievements: ['Sustainable Fashion Advocate', 'Pattern Making Expert', 'Color Consultant'],
      description: 'Creating modern, comfortable pieces that blend style with everyday wearability.',
    },
    {
      id: 4,
      name: 'Sravan',
      specialty: 'Traditional & Cultural Wear',
      experience: '18+ years',
      location: 'Ahmedabad',
      rating: 5.0,
      reviews: 98,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievements: ['Heritage Craft Master', 'Cultural Design Expert', 'Hand Embroidery Specialist'],
      description: 'Preserving traditional techniques while creating contemporary cultural garments.',
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
    <section id="tailors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Master Tailors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of expert tailors who bring decades of experience and passion 
            to every custom piece they create.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {tailors.map((tailor) => (
            <motion.div
              key={tailor.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <img
                      src={tailor.image}
                      alt={tailor.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {tailor.name}
                    </h3>
                    <p className="text-burgundy-600 font-medium mb-2">
                      {tailor.specialty}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{tailor.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{tailor.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.floor(tailor.rating)
                                ? 'text-gold-500 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {tailor.rating}
                      </span>
                      <span className="text-sm text-gray-600">
                        ({tailor.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {tailor.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tailor.achievements.map((achievement, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-burgundy-50 text-burgundy-700 rounded-full text-xs font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Book Consultation
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Our Tailors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Why Choose Our Tailors?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our master tailors combine traditional craftsmanship with modern techniques 
              to deliver exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-burgundy-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Certified Expertise</h4>
              <p className="text-sm text-gray-600">All tailors are certified professionals with proven track records</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gold-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">48-Hour Delivery</h4>
              <p className="text-sm text-gray-600">Fast turnaround without compromising on quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Perfect Fit Guarantee</h4>
              <p className="text-sm text-gray-600">We guarantee the perfect fit or we'll make it right</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TailorsSection;