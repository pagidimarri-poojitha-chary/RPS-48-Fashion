import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGallery from './components/ProductGallery';
import FabricsSection from './components/FabricsSection';
import TailorsSection from './components/TailorsSection';
import MeasurementModal from './components/MeasurementModal';
import AuthModal from './components/AuthModal';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { womenProducts, menProducts, kidsProducts } from './data/products';

function App() {
  const [isMeasurementModalOpen, setIsMeasurementModalOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'signup' }>({
    isOpen: false,
    type: 'login',
  });

  const handleGetStarted = () => {
    setIsMeasurementModalOpen(true);
  };

  const handleAuthModalOpen = (type: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, type });
  };

  const handleAuthModalClose = () => {
    setAuthModal({ isOpen: false, type: 'login' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onAuthModalOpen={handleAuthModalOpen} />
      <Hero onGetStarted={handleGetStarted} />
      <Features 
        onMeasurementOpen={() => setIsMeasurementModalOpen(true)}
        onAuthModalOpen={handleAuthModalOpen}
      />
      
      {/* Product Galleries */}
      <ProductGallery 
        title="Women's Collection" 
        products={womenProducts} 
        category="Women" 
      />
      <ProductGallery 
        title="Men's Collection" 
        products={menProducts} 
        category="Men" 
      />
      <ProductGallery 
        title="Kids Collection" 
        products={kidsProducts} 
        category="Kids" 
      />
      
      {/* Additional Sections */}
      <FabricsSection />
      <TailorsSection />
      <Testimonials />
      <Footer />

      {/* Modals */}
      <MeasurementModal
        isOpen={isMeasurementModalOpen}
        onClose={() => setIsMeasurementModalOpen(false)}
      />
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={handleAuthModalClose}
        initialType={authModal.type}
      />
    </div>
  );
}

export default App;