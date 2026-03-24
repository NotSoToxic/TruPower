import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    // { path: '/technology', label: 'Technology' },
    { path: '/sustainability', label: 'Sustainability' },
    { path: '/support', label: 'Support' },
    { path: '/policy', label: 'Policy' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 sm:h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/images/batteries/unnamed1.png"
                alt="TruPower Logo"
                className="h-12 sm:h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={label}
                to={path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-1"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 backdrop-blur-md"
          >
            <div className="px-3 pt-2 pb-4 space-y-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={label}
                  to={path}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === path
                      ? 'text-blue-600 bg-blue-50/70'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/70'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
