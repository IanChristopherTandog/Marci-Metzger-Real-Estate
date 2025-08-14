import React from 'react'
import searchBg from '../assets/searchBg.png'

export default function SearchBar() {
  return (
    <section
      className="scroll-mt-24 py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${searchBg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
        <div className="relative rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm bg-white/80">
          <h2 className="font-serif text-2xl mb-4">Find Your Dream Home</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <input className="rounded-xl border-gray-300 px-3 py-2" placeholder="Location" />
            <select className="rounded-xl border-gray-300 px-3 py-2">
              <option>Type</option>
              <option>House</option>
              <option>Condo</option>
              <option>Townhome</option>
              <option>Land</option>
            </select>
            <select className="rounded-xl border-gray-300 px-3 py-2">
              <option>Sort By</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <select className="rounded-xl border-gray-300 px-3 py-2">
              <option>Bedrooms</option>
              <option>Any Number</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
            <select className="rounded-xl border-gray-300 px-3 py-2">
              <option>Baths</option>
              <option>Any Number</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
            <input className="rounded-xl border-gray-300 px-3 py-2" placeholder="Min Price" />
            <input className="rounded-xl border-gray-300 px-3 py-2" placeholder="Max Price" />
            <button type="button" className="rounded-xl bg-brand-700 px-5 py-2 text-white hover:bg-brand-800">
              Search Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
