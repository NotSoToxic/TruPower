import React from 'react';
import Footer from '../components/Footer';
import { ContactSection } from '@/components/ui/contact';
import { useSEO } from '../hooks/useSEO';

const Contact: React.FC = () => {
  useSEO({
    title: 'Contact TruPower Energies - 24/7 Support',
    description: 'Get in touch with TruPower for product inquiries, technical support, or partnerships. 24/7 customer support. ISO 9001 certified.',
    keywords: 'contact TruPower, battery support, customer service, 24/7 support',
    ogTitle: 'Contact TruPower Energies',
    ogDescription: 'Reach out to our customer support team',
    ogUrl: 'https://www.trupower.co.in/contact',
    canonicalUrl: 'https://www.trupower.co.in/contact',
  });

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="flex-grow pt-16">
        <section className="px-4 py-10">
          <div className="mx-auto max-w-7xl">
            <ContactSection />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
