import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
  isTrending?: boolean;
}

interface ProductGalleryProps {
  title: string;
  products: Product[];
  category: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ title, products, category }) => {
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
    hidden: { opacity: 0, y: 30 },
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
    <section id={category.toLowerCase()} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium {category.toLowerCase()} fashion, 
            tailored to perfection and delivered in just 48 hours.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="bg-burgundy-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      TRENDING
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                  >
                    <Heart size={16} className="text-gray-700" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                  >
                    <ShoppingBag size={16} className="text-gray-700" />
                  </motion.button>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-burgundy-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-burgundy-600">{product.price}</span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-burgundy-600 hover:text-burgundy-700 flex items-center space-x-1 text-sm font-medium"
                  >
                    <span>Customize</span>
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>View All {title}</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;