import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';

// ------------------------
// CONTACT FORM COMPONENT
// ------------------------
const ContactForm = () => {

  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  // Validation error messages state
  const [errors, setErrors] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  // Loading / Button disabled state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Submission status (for success / error messages)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');


  // ------------------------
  // FIELD VALIDATION LOGIC
  // ------------------------
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (value.length < 2) return 'Name must be at least 2 characters long';
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name can only contain letters and spaces';
        return '';

      case 'company':
        if (value.length < 2) return 'Company name must be at least 2 characters long';
        return '';

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';

      case 'phone':
        const phoneRegex = /^[0-9]{10}$/;
        // Remove non-numeric characters and validate length
        if (!phoneRegex.test(value.replace(/\D/g, ''))) return 'Please enter a valid 10-digit phone number';
        return '';

      case 'message':
        if (value.length < 10) return 'Message must be at least 10 characters long';
        return '';

      default:
        return '';
    }
  };


  // Validate all fields before submit
  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      company: validateField('company', formData.company),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    // If ANY error exists, return false
    return !Object.values(newErrors).some(error => error !== '');
  };


  // ------------------------
  // FORM SUBMISSION HANDLER
  // ------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Run validation before sending
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS send function
      await emailjs.send(
        'service_hfy4gtq',        // EmailJS service ID
        'template_q1wh0lc',       // EmailJS template ID
        formData,                 // Data being sent
        'nk1ZZwdR1WkFqw1yn'       // EmailJS public key
      );

      // If successful
      setSubmitStatus('success');

      // Reset form
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      setErrors({ name: '', company: '', email: '', phone: '', message: '' });

    } catch (error) {
      // If failed
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      // Re-enable submit button
      setIsSubmitting(false);
    }
  };


  // ------------------------
  // HANDLE REAL-TIME INPUT UPDATE + VALIDATION
  // ------------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Update form data dynamically
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate field as user types
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };


  // ------------------------
  // JSX UI MARKUP
  // ------------------------
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-6"
    >

      {/* NAME FIELD */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`input-field ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
          required
          placeholder="Your name"
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* COMPANY FIELD */}
      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={`input-field ${errors.company ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
          required
          placeholder="Your company name"
        />
        {errors.company && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.company}
          </motion.p>
        )}
      </div>

      {/* EMAIL FIELD */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`input-field ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
          required
          placeholder="your@email.com"
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* PHONE FIELD */}
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`input-field ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
          required
          placeholder="10-digit phone number"
        />
        {errors.phone && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.phone}
          </motion.p>
        )}
      </div>

      {/* MESSAGE FIELD */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`input-field resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
          required
          placeholder="Your message..."
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* SUBMIT BUTTON */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          // Loader animation
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </motion.button>

      {/* SUCCESS MESSAGE */}
      {submitStatus === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-600 text-center"
        >
          Message sent successfully!
        </motion.p>
      )}

      {/* ERROR MESSAGE */}
      {submitStatus === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-600 text-center"
        >
          Failed to send message. Please try again.
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;