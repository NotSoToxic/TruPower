import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Users, Target, Lightbulb, Award, Globe, Leaf, Zap } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: Battery,
      title: "Innovation",
      description: "Pioneering advanced battery technologies that power the future of sustainable transportation."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to environmental responsibility through green manufacturing and recycling practices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with partners, dealers, and customers to deliver exceptional energy solutions."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Setting industry standards through quality, reliability, and continuous improvement."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About TruPower
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                "We don't just power vehicles. We power the transformation towards a sustainable future, 
                making electric mobility accessible, reliable, and efficient for everyone."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  TruPower is the specialized energy vertical of <strong>Abiroo Strategyz Technologies Pvt Ltd</strong>, 
                  a forward-thinking technology company dedicated to solving real-world challenges through innovation 
                  and strategic solutions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Building on our parent company's expertise in technology consulting and business transformation, 
                  TruPower focuses exclusively on revolutionizing the electric vehicle battery ecosystem. We bring 
                  together cutting-edge technology, sustainable practices, and customer-centric solutions to accelerate 
                  the adoption of electric mobility.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is simple yet powerful: to make high-quality, reliable battery solutions accessible 
                  to everyone while contributing to a cleaner, more sustainable planet.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    To democratize access to advanced battery technology, making electric mobility affordable, 
                    sustainable, and reliable for businesses and individuals across India.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Powering Progress</p>
                      <p className="text-blue-100 text-sm">Through Innovation & Sustainability</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What TruPower Does</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We bring together all the necessary technology and services to help our clients 
                transition to sustainable energy solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Battery className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Battery Manufacturing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced lithium-ion battery systems designed specifically for 2-wheeler and 3-wheeler 
                  electric vehicles with superior performance and safety features.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Leasing Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Flexible battery leasing programs through our Pointo Network, making electric vehicle 
                  adoption affordable with structured EMI plans and comprehensive support.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IoT Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Smart battery management systems with real-time monitoring, predictive analytics, 
                  and remote management capabilities for optimal performance and security.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Guided by principles that drive innovation, sustainability, and customer success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Parent Company */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Part of the Strategyz Family</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                TruPower leverages the technological expertise and innovative culture of our parent company, 
                Abiroo Strategyz Technologies Pvt Ltd, which has a proven track record of delivering 
                transformative solutions across various industries.
              </p>
            </motion.div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Abiroo Strategyz Technologies</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our parent company brings together technology consulting, business transformation, 
                    and innovative solutions to help organizations solve complex challenges and drive 
                    meaningful impact in their respective industries.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Excellence in Innovation</p>
                      <p className="text-gray-300 text-sm">Trusted partner for technology transformation</p>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <a 
                    href="https://www.strategyzinc.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <span className="text-sm">Learn more about</span>
                    <span className="font-semibold">Strategyz Inc.</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Power Your Future?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have chosen TruPower for their electric mobility needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/products"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Products
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;