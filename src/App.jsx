import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Subscription from './pages/Subscription';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream flex flex-col font-sans selection:bg-secondary/20 selection:text-secondary">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-primary text-white py-12">
          <div className="container mx-auto px-4 flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="./images/logo.png" alt="" className="h-10 w-10 brightness-0 invert opacity-80" />
              <span className="text-xl font-serif tracking-tight font-bold">
                Page & Pixel
              </span>
            </div>
            <p className="text-parchment/60 font-serif italic text-lg">"Every book tells a story."</p>
            <div className="h-px w-24 bg-secondary/30"></div>
            <p className="text-sm text-parchment/40">&copy; 2026 Page & Pixel. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
