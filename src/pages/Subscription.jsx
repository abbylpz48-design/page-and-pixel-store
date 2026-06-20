import React from 'react';

function Subscription() {
  return (
    <div className="flex flex-col items-center gap-12 py-8">
      <div className="flex flex-col gap-4 text-center max-w-3xl">
        <h2 className="text-5xl font-serif text-primary">Page & Pixel Picks</h2>
        <p className="text-xl text-ink font-sans">
          A monthly curated experience for true bibliophiles. Hand-selected titles, exclusive gifts, 
          and the joy of discovery, delivered to your door.
        </p>
      </div>

      <div className="bg-white p-1 md:p-10 rounded-cozy-lg shadow-cozy-lg border border-parchment max-w-4xl w-full flex flex-col md:flex-row gap-10 overflow-hidden">
        <div className="flex-1 bg-cream p-8 rounded-cozy-md flex flex-col justify-center items-center text-center gap-6">
          <img src="./images/logo.png" alt="" className="h-32 w-32 opacity-20" />
          <h3 className="text-3xl font-serif text-primary">The Monthly Surprise</h3>
          <p className="text-4xl font-bold text-secondary">$39.99 <span className="text-lg font-normal text-ink">/ month</span></p>
        </div>
        
        <div className="flex-1 flex flex-col gap-6 py-4">
          <h4 className="text-2xl font-serif text-primary">What's Inside?</h4>
          <ul className="flex flex-col gap-4 text-ink">
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl font-bold">✦</span>
              <p><strong>One Newly Released Book:</strong> A handpicked title from our "Picks of the Month" across any genre you prefer.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl font-bold">✦</span>
              <p><strong>Exclusive Themed Gift:</strong> An artisanal item (candle, tea, art print) that pairs perfectly with the book's vibe.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl font-bold">✦</span>
              <p><strong>Personalized Touch:</strong> A handwritten note and a collectible bookmark designed specifically for the box.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl font-bold">✦</span>
              <p><strong>Free Shipping:</strong> Always included for our subscription members.</p>
            </li>
          </ul>
          
          <a 
            href="https://bookshop.org/a/125372"
            className="mt-4 bg-secondary text-white w-full py-4 rounded-cozy-md font-bold text-lg hover:bg-[#B45309] transition-all shadow-cozy-md active:scale-95 text-center inline-block"
          >
            Join the Club
          </a>
          <p className="text-center text-xs text-ink/60 font-sans uppercase tracking-widest">Cancel or skip any month</p>
        </div>
      </div>

      <div className="literary-divider w-full max-w-md px-10 text-2xl font-serif">&</div>

      <section className="text-center flex flex-col gap-6">
        <h3 className="text-3xl font-serif text-primary">Gift a Subscription</h3>
        <p className="text-ink max-w-xl mx-auto">
          Share the magic of reading with someone special. We offer 3, 6, and 12-month gift subscriptions 
          that never expire and always delight.
        </p>
        <a 
          href="https://bookshop.org/a/125372"
          className="text-secondary font-bold hover:underline inline-block"
        >
          View Gift Options →
        </a>
      </section>
    </div>
  );
}

export default Subscription;
