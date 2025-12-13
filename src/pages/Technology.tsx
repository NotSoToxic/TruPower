import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Battery, Leaf, BarChart, Wifi, ThermometerSun } from 'lucide-react';
import Footer from '../components/Footer';

const Technology = () => {
  const features = [
    {
      icon: Cpu,
      title: "Smart BMS",
      description: "Advanced battery management system with real-time monitoring and predictive analytics"
    },
    {
      icon: Zap,
      title: "Fast Charging",
      description: "Innovative charging technology enabling rapid power delivery with thermal management"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Multi-layer protection systems ensuring reliable and secure operation"
    },
    {
      icon: Battery,
      title: "High Density",
      description: "Maximum power in compact form factor with industry-leading energy density"
    }
  ];

  const specifications = [
    {
      title: "Energy Efficiency",
      description: "Optimized power delivery system with intelligent energy management for maximum performance and minimal waste.",
      stats: [
        { label: "Energy Recovery", value: "95%" },
        { label: "Power Efficiency", value: "98%" }
      ]
    },
    {
      title: "Battery Management",
      description: "Intelligent BMS with real-time monitoring and adaptive optimization for maximum efficiency and safety.",
      stats: [
        { label: "Response Time", value: "<10ms" },
        { label: "Efficiency", value: "99.9%" }
      ]
    },
    {
      title: "Thermal Management",
      description: "Advanced cooling system with intelligent temperature control for optimal performance in all conditions.",
      stats: [
        { label: "Operating Range", value: "-20°C to 60°C" },
        { label: "Cooling Efficiency", value: "95%" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow pt-16">
        <div className="pt-24 pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Advanced Battery Technology</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Pioneering the future of energy storage with cutting-edge innovation and sustainable solutions.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <feature.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Innovation Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Innovation at Our Core</h2>
                <p className="text-gray-600 mb-8 text-sm">
                  Our battery technology represents the pinnacle of energy storage innovation. 
                  We combine advanced materials science with sophisticated engineering to create 
                  batteries that set new standards for performance and reliability.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Wifi className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-700 text-sm">Remote Monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ThermometerSun className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-700 text-sm">Thermal Control</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Leaf className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-700 text-sm">Eco-Friendly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-700 text-sm">Performance Analytics</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden bg-white p-8 shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50 rounded-2xl" />
                <div className="relative flex items-center justify-center h-[500px]">
                  <img 
                    src="/images/batteries/front.jpg" 
                    alt="Battery Technology" 
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300 rounded-xl"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent rounded-b-2xl" />
              </motion.div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={spec.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{spec.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{spec.description}</p>
                    <div className="space-y-2">
                      {spec.stats.map(stat => (
                        <div key={stat.label} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-600 text-sm">{stat.label}</span>
                          <span className="font-semibold text-gray-900 text-sm">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Technology;