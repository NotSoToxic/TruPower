import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ContactForm from './components/ContactForm';
import Technology from './pages/Technology';
import Sustainability from './pages/Sustainability';
import Support from './pages/Support';
import BatteryDetails from './pages/BatteryDetails';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/battery/:id" element={<BatteryDetails />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={
            <div className="pt-24 pb-12">
              <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
                <ContactForm />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;