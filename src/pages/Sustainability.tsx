import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Factory, Award, Sun, Wind, Droplet, TreePine, Battery, Shield } from 'lucide-react';
import Footer from '../components/Footer';

const Sustainability = () => {
  const initiatives = [
    {
      icon: Sun,
      title: "Solar Power Integration",
      description: "Our manufacturing facilities are powered by solar energy, reducing carbon emissions by 75% compared to traditional power sources."
    },
    {
      icon: Recycle,
      title: "Advanced Recycling",
      description: "State-of-the-art recycling technology recovers up to 95% of battery materials for reuse in new products."
    },
    {
      icon: Wind,
      title: "Wind Energy Usage",
      description: "Strategic partnerships with wind farms provide clean energy for our operations during non-solar hours."
    },
    {
      icon: Droplet,
      title: "Water Conservation",
      description: "Innovative water recycling systems reduce our water consumption by 80% compared to industry standards."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow pt-16">
        <div className="pt-24 pb-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Environmental Commitment</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Leading the transition to sustainable energy through innovative manufacturing and responsible practices.
              </p>
            </motion.div>

            {/* Initiatives Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <initiative.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Impact Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-12 mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Our Environmental Impact</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <p className="text-blue-100">Material Recovery</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-blue-100">Renewable Energy</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50M+</div>
                  <p className="text-blue-100">CO₂ Reduction (tons)</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">80%</div>
                  <p className="text-blue-100">Water Saved</p>
                </div>
              </div>
            </motion.div>

            {/* Detailed Sections */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sustainable Manufacturing</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Factory className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Zero-Waste Facilities</h3>
                      <p className="text-gray-600">All manufacturing waste is recycled or repurposed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TreePine className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Green Supply Chain</h3>
                      <p className="text-gray-600">Partnerships with eco-conscious suppliers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Battery className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Energy Storage</h3>
                      <p className="text-gray-600">On-site renewable energy storage systems</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Standards</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">ISO 14001:2015</h3>
                      <p className="text-gray-600">Environmental Management System</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">LEED Platinum</h3>
                      <p className="text-gray-600">Highest level of building sustainability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Carbon Neutral</h3>
                      <p className="text-gray-600">Certified carbon neutral operations</p>
                    </div>
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

export default Sustainability;