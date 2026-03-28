import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, Shield, Headphones, ShieldCheck, Leaf, type LucideIcon } from 'lucide-react';
import Footer from '../components/Footer';
import { HeroSection } from '../components/ui/hero-section-shadcnui';
import { ContactPage } from '../components/ui/contact-page';
import { ShareholderReports, type Report } from '../components/ui/carousel';
import { useSEO } from '../hooks/useSEO';

const plans = [
  {
    id: 'plan-battery-leasing',
    title: 'Battery Leasing',
    description: 'Flexible, affordable leasing for drivers and fleet owners with transparent EMIs and dealer support',
    features: [
      'Affordable monthly EMIs',
      'Flexible lease terms',
      'Maintenance included',
      'Leasing for drivers & fleets',
      'Dealer support included',
    ]
  }
];

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'ISO certified manufacturing with advanced quality control systems and premium materials.',
    features: ['ISO 9001:2015 certified', 'Advanced quality control', 'Premium materials', 'Extended warranty']
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'State-of-the-art technology with smart BMS integration and fast charging capabilities.',
    features: ['Smart BMS integration', 'Fast charging', 'Thermal management', 'Real-time monitoring']
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support with on-site assistance and maintenance services.',
    features: ['24/7 technical support', 'On-site assistance', 'Maintenance services', 'Training & guidance']
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Comprehensive safety measures and certifications ensuring reliable operation.',
    features: ['Safety certifications', 'Protection systems', 'Regular audits', 'Testing protocols']
  },
  {
    icon: Battery,
    title: 'Performance',
    description: 'Optimized battery solutions delivering consistent and reliable power output.',
    features: ['High energy density', 'Long cycle life', 'Efficient delivery', 'Temperature stability']
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Eco-friendly solutions with minimal environmental impact and maximum efficiency.',
    features: ['Recyclable materials', 'Energy efficiency', 'Zero emissions', 'Green packaging']
  }
];

const Home: React.FC = () => {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TruPower Energies",
    "url": "https://www.trupower.co.in",
    "description": "Premium lithium-ion battery solutions for electric vehicles, 3-wheelers, and inverters with ISO 9001 certification",
    "areaServed": "IN",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "availableLanguageId": ["en", "hi"]
    }
  };

  useSEO({
    title: 'TruPower Energies - Premium EV Battery Solutions in India',
    description: 'Discover sustainable lithium-ion batteries for electric vehicles, 3-wheelers & inverters. ISO 9001 certified. 24/7 support. Battery leasing available.',
    keywords: 'EV battery, lithium ion battery, 3-wheeler battery, inverter battery, LiFePO4, electric rickshaw, renewable energy',
    ogTitle: 'TruPower Energies - Energy Redefined',
    ogDescription: 'Premium battery solutions for sustainable electric mobility',
    ogUrl: 'https://www.trupower.co.in/',
    canonicalUrl: 'https://www.trupower.co.in/',
    structuredData: organizationSchema,
  });

  const carouselReports: Report[] = [
    ...plans.map((plan) => ({
      id: plan.id,
      title: plan.title,
      description: plan.description,
      features: plan.features,
      icon: Battery,
    })),
    ...features.map((feature) => ({
      id: feature.title.toLowerCase().replace(/\s+/g, '-'),
      title: feature.title,
      description: feature.description,
      features: feature.features,
      icon: feature.icon as LucideIcon,
    })),
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Why Choose Us Section (carousel) */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We combine cutting-edge technology with sustainable practices to deliver the best in EV battery solutions.</p>
            </motion.div>

            <ShareholderReports reports={carouselReports} />
          </div>
        </section>

        {/* Trusted by Dealers / Stats Section
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Trusted by Indian EV Dealers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Trusted across dealer networks and by operators nationwide — a partner for reliable battery deployments and dealer-first support.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {stats.map((stat) => (
                <motion.div key={stat.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <StatCard value={stat.value} suffix={stat.suffix} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Get In Touch Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <ContactPage heading="Get in Touch" subheading="Contact the support team at TruPower." />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
