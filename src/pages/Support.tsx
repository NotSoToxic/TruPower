import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, FileText, MessageSquare, BookOpen, Phone, Mail, Clock, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  const supportCards = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance for all your battery needs",
      contact: "XXXXXXXXXX",
      isPhone: true
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed assistance via email",
      contact: "energy@strategyzinc.com",
      isPhone: false
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "User Manuals",
      description: "Comprehensive guides for all our products"
    },
    {
      icon: Wrench,
      title: "Maintenance Guides",
      description: "Regular maintenance procedures and best practices"
    },
    {
      icon: FileText,
      title: "Technical Specs",
      description: "Detailed technical specifications and data sheets"
    }
  ];

  return (
    <div className="pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Support</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get expert assistance and resources for your battery solutions
          </p>
        </motion.div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {supportCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h2>
              <p className="text-gray-600 mb-6">{card.description}</p>
              {card.isPhone ? (
                <Link 
                  to="/contact"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer"
                >
                  +91 {card.contact}
                </Link>
              ) : (
                <p className="text-blue-600 font-medium">{card.contact}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-8 mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer list-none p-4 rounded-lg hover:bg-gray-50">
                <span className="font-medium text-gray-900">What is the warranty period for your batteries?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 px-4 text-gray-600">
                Our batteries come with a standard 8-year warranty covering manufacturing defects and capacity degradation below 70%.
              </p>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer list-none p-4 rounded-lg hover:bg-gray-50">
                <span className="font-medium text-gray-900">How often should I service my battery?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 px-4 text-gray-600">
                We recommend annual inspections by certified technicians, though our batteries are designed for minimal maintenance.
              </p>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer list-none p-4 rounded-lg hover:bg-gray-50">
                <span className="font-medium text-gray-900">What is the expected lifespan of your batteries?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 px-4 text-gray-600">
                Under normal operating conditions, our batteries maintain over 80% capacity for 10+ years or 2000+ charging cycles.
              </p>
            </details>
          </div>
        </motion.div>

        {/* Resources Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <resource.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;