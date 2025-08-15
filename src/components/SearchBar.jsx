import React from 'react';
import searchBg from '../assets/searchBg.png';

export default function SearchBar() {
  return (
    <section
      className="scroll-mt-24 py-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${searchBg})` }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Overlay 
        <div className="absolute inset-0 bg-black/25 rounded-2xl"></div>
*/}
        {/* Form Container */}
        <div className="relative rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white/90">
          <h2 className="font-serif text-2xl sm:text-3xl mb-6 text-center sm:text-left">
            Find Your Dream Home
          </h2>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full-width Location */}
            <input
              className="sm:col-span-2 rounded-xl border-gray-300 px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              placeholder="Location"
            />

            {/* Type & Sort By */}
            <select className="rounded-xl border-gray-300 px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none">
              <option>Type</option>
              <option>House</option>
              <option>Condo</option>
              <option>Townhome</option>
              <option>Land</option>
            </select>
            <select className="rounded-xl border-gray-300 px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none">
              <option>Sort By</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>

            {/* Bedroom & Baths */}
            <select className="rounded-xl border-gray-300 px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none">
              <option>Bedrooms</option>
              <option>Any Number</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
            <select className="rounded-xl border-gray-300 px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none">
              <option>Baths</option>
              <option>Any Number</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>

            {/* Min Price */}
            <input
              className="sm:col-span-2 rounded-xl border-gray-300 px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              placeholder="Min Price"
            />

            {/* Max Price */}
            <input
              className="sm:col-span-2 rounded-xl border-gray-300 px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              placeholder="Max Price"
            />

            {/* Search Button */}
            <div className="sm:col-span-2 flex justify-center mt-4">
              <button
                type="button"
                className="rounded-xl bg-brand-700 px-28 py-3 text-white hover:bg-brand-800 transition-colors duration-300 font-medium"
              >
                Search Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
