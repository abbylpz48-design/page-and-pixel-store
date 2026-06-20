import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center py-12">
      <div className="bg-white p-12 md:p-16 rounded-cozy-lg shadow-cozy-lg max-w-2xl w-full flex flex-col gap-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Get in Touch</h2>
          <p className="text-lg text-ink font-sans">
            Questions about an order? Looking for a specific title? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4 p-6 bg-cream rounded-cozy-md border border-parchment transition-transform hover:scale-105">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest">Email Us</h3>
            <p className="text-xl font-serif text-primary break-words">hello@pageandpixel.com</p>
            <p className="text-sm text-ink/70">We usually reply within 2 hours.</p>
          </div>
          
          <div className="flex flex-col gap-4 p-6 bg-cream rounded-cozy-md border border-parchment transition-transform hover:scale-105">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest">Visit Our Studio</h3>
            <p className="text-lg font-serif text-primary">123 Bookworm Lane,<br />Curated City, BK 10101</p>
            <p className="text-sm text-ink/70">By appointment only.</p>
          </div>
        </div>

        <div className="literary-divider w-full px-10 text-2xl font-serif">&</div>

        <div className="bg-parchment/30 p-8 rounded-cozy-md text-center italic text-ink/80 font-sans">
          "A book is a conversation between two people, and we'd love to start one with you."
        </div>
      </div>
    </div>
  );
}

export default Contact;
