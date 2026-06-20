import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white p-12 md:p-20 rounded-cozy-lg shadow-cozy-md flex flex-col items-center text-center gap-8">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <img src="./images/logo.png" alt="" className="w-64 h-64 rotate-12" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif text-primary max-w-4xl leading-tight">
          Curated Books for <br /><span className="text-secondary italic">Discerning Readers</span>
        </h1>
        <p className="text-lg md:text-xl text-ink max-w-2xl font-sans">
          Welcome to Page & Pixel. We handpick physical books that deserve a spot on your shelf, delivered with the warmth of a local boutique.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <Link to="/catalog" className="bg-secondary text-white px-10 py-4 rounded-cozy-md font-bold text-lg hover:scale-105 transition-all shadow-cozy-md">
            Browse the Collection
          </Link>
        </div>
      </section>

      {/* Literary Divider */}
      <div className="literary-divider px-10 text-2xl font-serif">&</div>

      {/* Featured Why Us */}
      <section className="grid md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-secondary text-3xl font-serif shadow-cozy-sm">1</div>
          <h3 className="text-2xl font-serif">Handpicked</h3>
          <p className="text-ink leading-relaxed">No algorithms here. Every book is selected by people who love to read and share great stories.</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-secondary text-3xl font-serif shadow-cozy-sm">2</div>
            <h3 className="text-2xl font-serif">Support Local</h3>
            <p className="text-ink leading-relaxed">Every purchase supports independent bookstores through our partnership with Bookshop.org.</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-secondary text-3xl font-serif shadow-cozy-sm">3</div>
          <h3 className="text-2xl font-serif">Fast & Thoughtful</h3>
          <p className="text-ink leading-relaxed">Fast delivery meets personal care. We ship within 24 hours in beautiful, eco-friendly packaging.</p>
        </div>
      </section>

    </div>
  );
}

export default Home;
