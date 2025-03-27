import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Battery, Leaf, Check } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { batteries } from '../data/batteries';
import { ChevronLeft } from 'lucide-react';
import Footer from '../components/Footer';

const BatteryDetails = () => {
  const { id } = useParams();
  const [battery, setBattery] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    application: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Find the battery based on ID
    const foundBattery = batteries.find(b => b.id === id);
    setBattery(foundBattery || null);
    setLoading(false);
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        application: '',
        quantity: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!battery) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Battery Not Found</h2>
          <p className="text-gray-600">The requested battery details could not be found.</p>
        </div>
      </div>
    );
  }

  const getApplications = () => {
    if (battery.category === '2-Wheeler') {
      return [
        {
          title: 'Electric Scooters',
          description: 'Perfect for personal and shared mobility solutions.'
        },
        {
          title: 'Electric Motorcycles',
          description: 'High-performance power for electric motorcycles.'
        }
      ];
    } else {
      return [
        {
          title: 'Electric Rickshaws',
          description: 'Ideal for commercial three-wheeler applications.'
        },
        {
          title: 'Electric Cargo Vehicles',
          description: 'Perfect for last-mile delivery and logistics.'
        }
      ];
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow pt-16">
        <div className="pt-24 pb-12 min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            {/* Back to Products Button */}
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Products</span>
            </Link>

            {/* Header with Single Image */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{battery.name}</h1>
                <p className="text-xl text-gray-600">
                  {battery.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-xl overflow-hidden shadow-sm"
              >
                <img
                  src={battery.image}
                  alt={battery.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Capacity</span>
                    <span className="font-semibold text-gray-900">{battery.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Voltage</span>
                    <span className="font-semibold text-gray-900">{battery.voltage}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Cycle Life</span>
                    <span className="font-semibold text-gray-900">{battery.cycleLife}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Charging Time</span>
                    <span className="font-semibold text-gray-900">{battery.chargingTime}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety Features</h2>
                <div className="space-y-4">
                  {battery.safetyFeatures.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Applications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {getApplications().map((app, index) => (
                  <div key={index} className="p-6 border rounded-lg hover:border-blue-200 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-3">{app.title}</h3>
                    <p className="text-gray-600">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Enquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Application
                      </label>
                      <select
                        name="application"
                        value={formData.application}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Application</option>
                        {getApplications().map((app, index) => (
                          <option key={index} value={app.title}>
                            {app.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        min="1"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${
                      isSubmitting
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-center">
                      Thank you for your enquiry. We'll get back to you soon!
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-center">
                      Something went wrong. Please try again.
                    </div>
                  )}
                </form>
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