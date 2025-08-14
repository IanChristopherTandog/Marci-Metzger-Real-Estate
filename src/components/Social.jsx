import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from 'react-icons/fa';

export default function Social() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl">Follow Us</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-700">
          <a
            href="https://www.facebook.com/MarciHomes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-white transition"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://www.instagram.com/marciandlauren_nvrealtors/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-white transition"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/marci-metzger-30642496/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-white transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-white transition"
          >
            <FaYelp /> Yelp
          </a>
        </div>
      </div>
    </section>
  );
}
