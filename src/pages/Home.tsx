import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, Truck, Shield, Headphones, ShieldCheck, Check, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState('quality');
  const tabs = [
    { id: 'quality', label: 'Quality', icon: Shield },
    { id: 'innovation', label: 'Innovation', icon: Zap },
    { id: 'support', label: 'Support', icon: Headphones },
    { id: 'safety', label: 'Safety', icon: ShieldCheck },
    { id: 'performance', label: 'Performance', icon: Battery },
    { id: 'sustainability', label: 'Sustainability', icon: Leaf }
  ];

  const tabContent = {
    quality: {
      title: 'Premium Quality',
      description: 'Our batteries are manufactured using the highest quality materials and undergo rigorous testing to ensure reliability and durability.',
      features: [
        'ISO 9001:2015 certified manufacturing',
        'Advanced quality control systems',
        'Premium-grade materials',
        'Extended warranty coverage'
      ]
    },
    innovation: {
      title: 'Cutting-edge Technology',
      description: 'We continuously invest in research and development to bring you the latest advancements in battery technology.',
      features: [
        'Smart BMS integration',
        'Advanced thermal management',
        'Fast-charging capabilities',
        'Real-time monitoring systems'
      ]
    },
    support: {
      title: '24/7 Customer Support',
      description: 'Our dedicated support team is always ready to assist you with any queries or concerns.',
      features: [
        'Round-the-clock technical support',
        'On-site assistance',
        'Regular maintenance services',
        'Training and guidance'
      ]
    },
    safety: {
      title: 'Safety First',
      description: 'We prioritize safety in every aspect of our battery design and manufacturing process.',
      features: [
        'Multiple safety certifications',
        'Advanced protection systems',
        'Regular safety audits',
        'Comprehensive testing protocols'
      ]
    },
    performance: {
      title: 'Optimal Performance',
      description: 'Our batteries deliver consistent and reliable performance across various applications.',
      features: [
        'High energy density',
        'Long cycle life',
        'Efficient power delivery',
        'Temperature stability'
      ]
    },
    sustainability: {
      title: 'Eco-friendly Solutions',
      description: 'We are committed to sustainable practices and reducing environmental impact.',
      features: [
        'Recyclable materials',
        'Energy-efficient manufacturing',
        'Zero harmful emissions',
        'Green packaging'
      ]
    }
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400; // Adjust this value to control scroll distance
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Powering the Future of
              <span className="text-blue-600"> Electric Mobility</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Advanced EV battery solutions for a sustainable tomorrow
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Explore Products
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with sustainable practices to deliver the best in EV battery solutions.
            </p>
          </motion.div>

          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-hidden gap-6 pb-6 -mx-4 px-4 scroll-smooth"
            >
              {[
                {
                  icon: Shield,
                  title: "Premium Quality",
                  description: "ISO certified manufacturing with advanced quality control systems and premium materials.",
                  features: [
                    "ISO 9001:2015 certified",
                    "Advanced quality control",
                    "Premium materials",
                    "Extended warranty"
                  ]
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  description: "State-of-the-art technology with smart BMS integration and fast charging capabilities.",
                  features: [
                    "Smart BMS integration",
                    "Fast charging",
                    "Thermal management",
                    "Real-time monitoring"
                  ]
                },
                {
                  icon: Headphones,
                  title: "24/7 Support",
                  description: "Round-the-clock technical support with on-site assistance and maintenance services.",
                  features: [
                    "24/7 technical support",
                    "On-site assistance",
                    "Maintenance services",
                    "Training & guidance"
                  ]
                },
                {
                  icon: ShieldCheck,
                  title: "Safety First",
                  description: "Comprehensive safety measures and certifications ensuring reliable operation.",
                  features: [
                    "Safety certifications",
                    "Protection systems",
                    "Regular audits",
                    "Testing protocols"
                  ]
                },
                {
                  icon: Battery,
                  title: "Performance",
                  description: "Optimized battery solutions delivering consistent and reliable power output.",
                  features: [
                    "High energy density",
                    "Long cycle life",
                    "Efficient delivery",
                    "Temperature stability"
                  ]
                },
                {
                  icon: Leaf,
                  title: "Sustainability",
                  description: "Eco-friendly solutions with minimal environmental impact and maximum efficiency.",
                  features: [
                    "Recyclable materials",
                    "Energy efficiency",
                    "Zero emissions",
                    "Green packaging"
                  ]
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-none w-[350px] bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Scroll Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scroll('left')}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors ml-2"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scroll('right')}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors mr-2"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or services? We're here to help.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;