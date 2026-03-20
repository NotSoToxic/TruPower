import React from 'react';
import Footer from '../components/Footer';
import { ContactSection } from '@/components/ui/contact';

const Contact: React.FC = () => {
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
