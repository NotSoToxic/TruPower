import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Battery, Leaf, BarChart, Wifi, ThermometerSun } from 'lucide-react';

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
      title: "Cell Chemistry",
      description: "Advanced lithium-ion technology with proprietary electrolyte formulation for enhanced performance and longevity.",
      stats: [
        { label: "Energy Density", value: "260 Wh/kg" },
        { label: "Cycle Life", value: "2000+" }
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
    <div className="pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Advanced Battery Technology</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pioneering the future of energy storage with cutting-edge innovation and sustainable solutions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Innovation Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Innovation at Our Core</h2>
            <p className="text-gray-600 mb-8">
              Our battery technology represents the pinnacle of energy storage innovation. 
              We combine advanced materials science with sophisticated engineering to create 
              batteries that set new standards for performance and reliability.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Wifi className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Remote Monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <ThermometerSun className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Thermal Control</span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-3">
                <BarChart className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Performance Analytics</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-sm"
          >
            <img 
              src="/images/tech/techh.jpg" 
              alt="Battery Technology" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{spec.title}</h3>
                <p className="text-gray-600 mb-4">{spec.description}</p>
                <div className="space-y-2">
                  {spec.stats.map(stat => (
                    <div key={stat.label} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="font-semibold text-gray-900">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;