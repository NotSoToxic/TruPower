import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Technology from './pages/Technology';
import Sustainability from './pages/Sustainability';
import Support from './pages/Support';
import BatteryDetails from './pages/BatteryDetails';
import Policy from './pages/Policy';
import { StatsProvider } from './context/StatsContext';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <StatsProvider>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/battery/:id" element={<BatteryDetails />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/support" element={<Support />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </StatsProvider>
      </div>
    </Router>
  );
};

export default App;