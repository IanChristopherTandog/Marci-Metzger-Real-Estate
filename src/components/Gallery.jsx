import React, { useEffect, useState, useRef } from 'react';
import g1 from '../assets/gallery1.png';
import g2 from '../assets/gallery2.png';
import g3 from '../assets/gallery3.png';
import g4 from '../assets/gallery4.png';
import g5 from '../assets/gallery5.png';
import g6 from '../assets/gallery6.png';
import g7 from '../assets/gallery7.png';

const slides = [g1, g2, g3, g4, g5, g6, g7];

export default function Gallery() {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(false);
  const touchStartX = useRef(null);

  // Autoplay
  useEffect(() => {
    const id = setInterval(() => {
      changeSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // Slide change with fade animation
  const changeSlide = (updateFn) => {
    setFade(true);
    setTimeout(() => {
      setI((prev) =>
        typeof updateFn === 'function' ? updateFn(prev) : updateFn
      );
      setFade(false);
    }, 300);
  };

  const prev = () =>
    changeSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => changeSlide((prev) => (prev + 1) % slides.length);

  const prevIndex = (i - 1 + slides.length) % slides.length;
  const nextIndex = (i + 1) % slides.length;

  // Touch handling for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      // Swipe threshold
      if (diff > 0) next(); // Swipe left → next
      else prev(); // Swipe right → prev
    }
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="scroll-mt-24 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center">Gallery</h2>

        {/* Carousel */}
        <div
          className="mt-8 relative flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur px-3 py-2 shadow hover:bg-white"
          >
            ‹
          </button>

          {/* Peek layout on all devices */}
          <div className="flex items-center justify-center gap-2 w-full max-w-5xl">
            {/* Thin peek prev */}
            <img
              src={slides[prevIndex]}
              alt="Previous"
              onClick={() => changeSlide(prevIndex)}
              className="w-[15%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] object-cover rounded-lg opacity-50 hover:opacity-70 transition cursor-pointer"
            />
            {/* Main image */}
            <img
              src={slides[i]}
              alt={`Slide ${i + 1}`}
              className={`w-[70%] h-[200px] sm:h-[250px] md:h-[440px] object-cover rounded-2xl shadow-lg transition-all duration-500 ${
                fade ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
              }`}
            />
            {/* Thin peek next */}
            <img
              src={slides[nextIndex]}
              alt="Next"
              onClick={() => changeSlide(nextIndex)}
              className="w-[15%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] object-cover rounded-lg opacity-50 hover:opacity-70 transition cursor-pointer"
            />
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur px-3 py-2 shadow hover:bg-white"
          >
            ›
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 flex justify-center gap-2 flex-wrap">
          {slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => changeSlide(idx)}
              className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 transition ${
                idx === i
                  ? 'border-brand-700'
                  : 'border-transparent hover:border-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
