import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { batteries } from '../data/batteries';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | '2-Wheeler' | '3-Wheeler'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBatteries = batteries.filter(battery => {
    const matchesCategory = selectedCategory === 'all' || battery.category === selectedCategory;
    const matchesSearch = battery.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         battery.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-performance battery solutions for electric vehicles.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory('2-Wheeler')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === '2-Wheeler' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              2-Wheeler Solutions
            </button>
            <button
              onClick={() => setSelectedCategory('3-Wheeler')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === '3-Wheeler' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              3-Wheeler Solutions
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredBatteries.map((battery, index) => (
            <motion.div
              key={battery.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="h-72 overflow-hidden">
                <img
                  src={battery.image}
                  alt={battery.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{battery.name}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-grow">{battery.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Battery className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">{battery.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">{battery.voltage}</span>
                  </div>
                </div>
                <Link
                  to={`/battery/${battery.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;