import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Battery, Zap, Shield, Thermometer, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { batteries } from '../data/batteries';
import Footer from '../components/Footer';

const BatteryDetails = () => {
  const { id } = useParams();
  const battery = batteries.find(b => b.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { src: battery?.image, alt: 'Front View', label: 'Front View' },
    { src: '/images/batteries/Top.png', alt: 'Top View', label: 'Top View' },
    { src: '/images/batteries/Back.png', alt: 'Back View', label: 'Back View' }
  ];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSelectedImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (e.key === 'ArrowRight') {
      setSelectedImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!battery) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow pt-16">
          <div className="pt-24 pb-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Battery Not Found</h1>
              <Link to="/products" className="text-blue-600 hover:text-blue-700 text-base">
                Return to Products
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const specifications = [
    { icon: Battery, label: 'Capacity', value: battery.capacity },
    { icon: Zap, label: 'Voltage', value: battery.voltage },
    { icon: Shield, label: 'Safety Rating', value: battery.safetyRating },
    { icon: Thermometer, label: 'Operating Temperature', value: battery.operatingTemperature }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow pt-16">
        <div className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Back Button */}
            <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors mb-12 group">
              <ChevronLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-base font-medium">Back to Products</span>
            </Link>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Image Gallery */}
              <div className="space-y-8">
                {/* Main Image */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-square bg-white rounded-2xl overflow-hidden group"
                >
                  <img
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    className="w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-105"
                  />
                  <button className="absolute top-6 right-6 p-3 bg-white/90 rounded-xl shadow-sm hover:bg-white transition-colors">
                    <Maximize2 className="w-6 h-6 text-gray-600" />
                  </button>
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setSelectedImage(prev => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-xl shadow-sm hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-xl shadow-sm hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                  </button>
                  {/* View Indicator */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-center">
                    <span className="px-4 py-2 bg-white/90 rounded-xl text-sm font-medium text-gray-600">
                      {images[selectedImage].label}
                    </span>
                  </div>
                </motion.div>

                {/* Thumbnails */}
                <div className="flex gap-4 justify-center">
                  {images.map((image, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-none w-24 h-24 rounded-xl overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-gray-900' : 'border-gray-100'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">{battery.name}</h1>
                  <p className="text-gray-600 text-base leading-relaxed">{battery.description}</p>
                </motion.div>

                {/* Specifications */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="grid grid-cols-2 gap-6"
                >
                  {specifications.map((spec) => (
                    <div key={spec.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <spec.icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">{spec.label}</span>
                          <p className="text-base font-semibold text-gray-900">{spec.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Safety Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-8">Safety Features</h2>
                  <ul className="space-y-6">
                    {battery.safetyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-gray-900 mt-2" />
                        <span className="text-gray-600 text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Enquiry Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full px-8 py-5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors group"
                  >
                    <span className="font-medium text-base">Request Information</span>
                    <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BatteryDetails; 