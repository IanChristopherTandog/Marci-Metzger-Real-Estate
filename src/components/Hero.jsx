import React from 'react';
import heroImg from '../assets/hero.png';

export default function Hero() {
  // Custom smooth scroll handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative h-[78vh] min-h-[520px] w-full"
      id="home"
      aria-label="Hero"
    >
      {/* Local hero image */}
      <img
        src={heroImg}
        alt="Pahrump Nevada"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white/0"></div>

      {/* Hero text */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white reveal">
          <p className="uppercase tracking-[0.2em] text-sm/6">Pahrump Realtor</p>
          <h1 className="mt-2 font-serif text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-lg">
            MARCI METZGER
          </h1>
          <p className="mt-4 max-w-2xl text-base/7 md:text-lg/8 opacity-90">
            The Ridge Realty Group — Serving Pahrump for Nearly 3 Decades
          </p>

          {/* Links with smooth scroll */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={(e) => handleScroll(e, 'getitsold')}
              className="rounded-xl bg-brand-700 px-5 py-2.5 text-white hover:bg-brand-800"
            >
              Browse Listings
            </button>
            <button
              onClick={(e) => handleScroll(e, 'contact')}
              className="rounded-xl border border-white/60 px-5 py-2.5 text-white hover:bg-white hover:text-gray-900"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
