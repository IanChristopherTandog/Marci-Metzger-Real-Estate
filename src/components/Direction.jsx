import React from 'react';

export default function Directions() {
  return (
    <section id="directions" className="scroll-mt-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-center">
          Get Directions
        </h2>
        <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=3190+S+Highway+160%2C+Suite+F%2C+Pahrump%2C+NV+89048&output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Directions"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
