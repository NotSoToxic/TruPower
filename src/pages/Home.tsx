import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, Shield, Headphones, ShieldCheck, Check, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import StatCard from '../components/StatCard';
import { HeroSection } from '../components/ui/hero-section-shadcnui';
import { ContactPage } from '../components/ui/contact-page';
import { useStats } from '../context/StatsContext';

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

const PlanCard: React.FC<{ title: string; description: string; features?: string[] }> = ({ title, description, features }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
        <Battery className="h-6 w-6 text-blue-600" />
      </div>
  <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      {features && features.length > 0 && (
        <div className="mt-auto">
          <ul className="space-y-3">
            {features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-blue-600" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scroll = (dir: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const stats = useStats().stats;

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

            <div className="relative">
              <div className="px-1 sm:px-4">
                <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x snap-mandatory">
                  {plans.map((plan, pIndex) => (
                    <motion.div key={plan.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * pIndex }} viewport={{ once: true }} className="flex-none w-[280px] sm:w-[350px] bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-300 border border-gray-100 snap-center">
                      <PlanCard title={plan.title} description={plan.description} features={plan.features} />
                    </motion.div>
                  ))}

                  {features.map((item, index) => (
                    <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="flex-none w-[280px] sm:w-[350px] bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-300 border border-gray-100 snap-center">
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
              </div>

              {/* Scroll Buttons */}
              <div className="hidden sm:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between pointer-events-none">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => scroll('left')} className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors ml-2">
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => scroll('right')} className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors mr-2">
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
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
