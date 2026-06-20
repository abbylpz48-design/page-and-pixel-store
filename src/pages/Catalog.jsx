import React from 'react';
import products from '../data/products.json';

function Catalog() {
  return (
    <div className="flex flex-col gap-10 py-8">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-4xl font-serif text-primary">Our Curated Collection</h2>
        <p className="text-lg text-ink max-w-2xl font-sans">
          Discover handpicked gems across fiction, non-fiction, and children's literature. 
          Each one chosen for its ability to transport, inform, and delight.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map(product => (
          <div key={product.id} className="book-card group flex flex-col h-full overflow-hidden">
            <div className="relative overflow-hidden aspect-[2/3]">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute top-4 right-4">
                <span className="bg-cream/90 backdrop-blur-sm text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-cozy-sm">
                  {product.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-serif text-primary group-hover:text-secondary transition-colors line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-accent font-script-brand text-lg">
                  by {product.author}
                </p>
              </div>
              
              <p className="text-ink text-sm leading-relaxed line-clamp-3">
                {product.description}
              </p>
              
              <div className="mt-auto pt-6 flex justify-between items-center border-t border-parchment">
                <span className="text-2xl font-serif text-primary">${product.price.toFixed(2)}</span>
                <a 
                  href={product.stripeLink}
                  className="bg-secondary text-white px-6 py-2 rounded-cozy-md font-bold hover:bg-[#B45309] transition-all shadow-cozy-sm hover:shadow-cozy-md active:scale-95"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
