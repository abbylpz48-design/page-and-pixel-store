import React from 'react';

function About() {
  return (
    <div className="flex flex-col gap-16 py-8 items-center">
      <section className="bg-white p-12 md:p-16 rounded-cozy-lg shadow-cozy-lg max-w-4xl flex flex-col gap-8 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-serif text-primary">The Page & Pixel Story</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-ink font-sans">
              We believe that in a digital world, the physical connection to a book is more important than ever. 
              Page & Pixel was born out of a love for the smell of paper, the feel of a spine, and the 
              serendipity of a handpicked recommendation.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-ink font-sans">
              Every book in our collection is curated with care. We don't use algorithms; we use our hearts. 
              When you order from us, you're not just getting a book—you're getting a package prepared with 
              love, complete with a handwritten note and a custom bookmark.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img src="/images/logo.png" alt="" className="w-48 h-48 opacity-10 md:opacity-20 rotate-12" />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 max-w-4xl w-full">
        <div className="bg-parchment/50 p-10 rounded-cozy-lg border border-parchment">
          <h3 className="text-2xl font-serif text-primary mb-4">Our Mission</h3>
          <p className="text-ink leading-relaxed">
            To preserve the magic of the physical book while embracing the convenience of modern delivery. 
            We strive to create "delightful moments" for every reader who trusts us with their next journey.
          </p>
        </div>
        <div className="bg-primary text-white p-10 rounded-cozy-lg shadow-cozy-md">
          <h3 className="text-2xl font-serif mb-4">Why the Name?</h3>
          <p className="leading-relaxed opacity-90">
            <strong>Page</strong> represents the tradition, the paper, and the tactile history of reading. 
            <strong>Pixel</strong> represents the modern world—the digital bridge that allows us to bring 
            curated culture directly to you, anywhere in the world.
          </p>
        </div>
      </section>
      
      <div className="literary-divider w-full max-w-xs px-10 text-2xl font-serif">&</div>
    </div>
  );
}

export default About;
