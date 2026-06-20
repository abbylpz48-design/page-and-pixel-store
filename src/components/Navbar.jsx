import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-primary text-white shadow-cozy-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="./images/logo.png" alt="Page & Pixel Logo" className="h-12 w-12 object-contain" />
          <span className="text-2xl font-serif tracking-tight font-bold">
            Page <span className="text-secondary">&</span> Pixel
          </span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="font-medium hover:text-secondary transition-colors">Home</Link>
          <Link to="/catalog" className="font-medium hover:text-secondary transition-colors">Catalog</Link>
          <Link to="/subscription" className="font-medium hover:text-secondary transition-colors">Subscription</Link>
          <Link to="/about" className="font-medium hover:text-secondary transition-colors">About</Link>
          <Link to="/contact" className="bg-secondary text-white px-5 py-2 rounded-cozy-md font-bold hover:scale-105 transition-all shadow-cozy-sm">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
