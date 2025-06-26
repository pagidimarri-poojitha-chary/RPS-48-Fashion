import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Ruler, ArrowRight, Upload, Check } from 'lucide-react';

interface MeasurementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MeasurementModal: React.FC<MeasurementModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'camera' | 'manual'>('camera');
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    hips: '',
    shoulder: '',
    height: '',
    inseam: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setMeasurements(prev => ({ ...prev, [field]: value }));
  };

  const measurementFields = [
    { key: 'chest', label: 'Chest', unit: 'inches' },
    { key: 'waist', label: 'Waist', unit: 'inches' },
    { key: 'hips', label: 'Hips', unit: 'inches' },
    { key: 'shoulder', label: 'Shoulder', unit: 'inches' },
    { key: 'height', label: 'Height', unit: 'inches' },
    { key: 'inseam', label: 'Inseam', unit: 'inches' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-serif font-bold text-gray-900">Get Your Measurements</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('camera')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                  activeTab === 'camera'
                    ? 'text-burgundy-600 border-b-2 border-burgundy-600 bg-burgundy-50'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Camera className="w-5 h-5 mx-auto mb-2" />
                Camera Scan
              </button>
              <button
                onClick={() => setActiveTab('manual')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                  activeTab === 'manual'
                    ? 'text-burgundy-600 border-b-2 border-burgundy-600 bg-burgundy-50'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Ruler className="w-5 h-5 mx-auto mb-2" />
                Manual Input
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {activeTab === 'camera' ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-center"
                >
                  <div className="mb-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-burgundy-100 to-gold-100 rounded-full flex items-center justify-center mb-4">
                      <Camera size={48} className="text-burgundy-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Measurement</h3>
                    <p className="text-gray-600 mb-6">
                      Use our advanced AI technology to get precise measurements instantly. 
                      Simply upload a photo following our guidelines.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                    >
                      <Upload size={20} />
                      <span>Upload Photo</span>
                    </motion.button>

                    <div className="grid grid-cols-3 gap-3 mt-6">
                      {[1, 2, 3].map((step) => (
                        <div key={step} className="text-center">
                          <div className="w-8 h-8 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                            {step}
                          </div>
                          <p className="text-xs text-gray-600">
                            {step === 1 && 'Stand straight'}
                            {step === 2 && 'Good lighting'}
                            {step === 3 && 'Full body shot'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Measurements</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {measurementFields.map((field) => (
                      <div key={field.key}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={measurements[field.key as keyof typeof measurements]}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all duration-200"
                            placeholder="0"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                            {field.unit}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Measurement Tips</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Measure over undergarments for accuracy</li>
                      <li>• Keep the tape measure level and snug</li>
                      <li>• Stand naturally with relaxed posture</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex space-x-4">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                >
                  <span>Next: Delivery Info</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MeasurementModal;