
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { batteries } from '../data/batteries';
import GlassRadioGroup from '../components/ui/glass-radio-group';
import Footer from '../components/Footer';

const Products = () => {
  const [selectedProductType, setSelectedProductType] = useState<'all' | 'ev-battery' | 'invertor-battery'>('all');

  const groupedProducts = useMemo(
    () => ({
      all: batteries,
      'ev-battery': batteries.filter((battery) => battery.category === '3-Wheeler'),
      'invertor-battery': batteries.filter((battery) => battery.category === 'Inverter'),
    }),
    []
  );

  const visibleProducts = groupedProducts[selectedProductType];

  if (batteries.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow pt-16">
          <div className="pt-24 pb-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">No Products Found</h1>
              <p className="text-gray-600 text-base">Please check back later for our complete battery & EV solution.</p>
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
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete Battery &amp; EV Solution</h1>
              <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
                Complete battery and EV solution, engineered for optimal performance as we expand our product range.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-5xl mx-auto mb-16"
            >
              <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 shadow-[0_14px_40px_rgba(17,24,39,0.08)]">
                <div className="flex flex-col items-center gap-5 text-center">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Browse by type</p>
                    <h2 className="text-2xl font-bold text-gray-900">Select Battery Segment</h2>
                  </div>
                  <GlassRadioGroup
                    className="w-full max-w-3xl"
                    name="product-type"
                    value={selectedProductType}
                    onChange={(value) => setSelectedProductType(value as 'all' | 'ev-battery' | 'invertor-battery')}
                    options={[
                      { label: 'All', value: 'all' },
                      { label: 'EV Battery', value: 'ev-battery' },
                      { label: 'Invertor Battery', value: 'invertor-battery' },
                    ]}
                  />
                </div>
              </div>
            </motion.div>

            {/* Products Display */}
            <div className="max-w-5xl mx-auto space-y-24">
              {visibleProducts.map((battery, index) => (
                <motion.div
                  key={battery.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Image Container */}
                    <div className={`relative aspect-square ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                      <img
                        src={battery.image}
                        alt={battery.name}
                        className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 lg:p-0">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{battery.name}</h3>
                      <p className="text-gray-600 text-base mb-8 leading-relaxed">{battery.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
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
              ))}

              {visibleProducts.length === 0 && (
                <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-600">
                  No products are currently available in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;