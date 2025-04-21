import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { batteries } from '../data/batteries';
import Footer from '../components/Footer';

const Products = () => {
  // Get the first 3-Wheeler battery
  const battery = batteries.find(battery => battery.category === '3-Wheeler');

  if (!battery) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow pt-16">
          <div className="pt-24 pb-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">No Battery Found</h1>
              <p className="text-gray-600 text-base">Please check back later for our 3-Wheeler battery solution.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow pt-16">
        <div className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">3-Wheeler Battery Solution</h1>
              <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
                Premium battery solution engineered for optimal performance in electric three-wheelers.
              </p>
            </motion.div>

            {/* Single Product Display */}
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Image Container */}
                  <div className="relative aspect-square">
                    <img
                      src={battery.image}
                      alt={battery.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 lg:p-0">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{battery.name}</h3>
                    <p className="text-gray-600 text-base mb-8 leading-relaxed">{battery.description}</p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <Battery className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Capacity</span>
                          <p className="font-medium text-base text-gray-900">{battery.capacity}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <Zap className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Voltage</span>
                          <p className="font-medium text-base text-gray-900">{battery.voltage}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <Shield className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Safety Rating</span>
                          <p className="font-medium text-base text-gray-900">{battery.safetyRating}</p>
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/battery/${battery.id}`}
                      className="inline-flex items-center justify-center w-full px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                      <span className="font-medium text-base">View Details</span>
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;