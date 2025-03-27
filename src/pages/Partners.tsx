import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Building2, Globe2, Users } from 'lucide-react';

const Partners = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Partners
        </motion.h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <Handshake className="h-12 w-12 text-[#004EAF] mb-4" />
          <h2 className="text-2xl font-semibold mb-6">Strategic Partnerships</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <Building2 className="h-8 w-8 mx-auto text-[#004EAF] mb-4" />
              <h3 className="font-semibold mb-2">Automotive Manufacturers</h3>
              <p className="text-gray-600 text-sm">
                Partnerships with leading automotive companies for OEM integration
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <Globe2 className="h-8 w-8 mx-auto text-[#004EAF] mb-4" />
              <h3 className="font-semibold mb-2">Global Distributors</h3>
              <p className="text-gray-600 text-sm">
                Worldwide network of certified distributors and installers
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <Users className="h-8 w-8 mx-auto text-[#004EAF] mb-4" />
              <h3 className="font-semibold mb-2">Research Institutions</h3>
              <p className="text-gray-600 text-sm">
                Collaboration with leading research facilities and universities
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Partner Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-[#004EAF] rounded-full"></div>
                <span>Access to latest battery technology</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-[#004EAF] rounded-full"></div>
                <span>Technical support and training</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-[#004EAF] rounded-full"></div>
                <span>Marketing and sales support</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-[#004EAF] rounded-full"></div>
                <span>Competitive pricing structure</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Become a Partner</h2>
            <p className="text-gray-600 mb-6">
              Join our network of global partners and help drive the future of electric mobility.
            </p>
            <button className="bg-[#004EAF] text-white px-6 py-3 rounded-md hover:bg-[#003d8c] transition-colors">
              Apply Now
            </button>
          </div>
        </div>

        <div className="bg-[#004EAF] text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Global Presence</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p>Countries</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p>Distribution Partners</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p>Certified Installers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p>Research Partners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;