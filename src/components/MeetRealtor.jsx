import React from 'react';
import realtorImg from '../assets/realtor.png';

export default function MeetRealtor() {
  return (
    <section id="about" className="scroll-mt-24 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Realtor Image */}
        <div className="flex justify-center">
          <img
            src={realtorImg}
            alt="Marci Metzger Realtor"
            className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-700 mb-2">
            Marci Metzger
          </h2>
          <h3 className="text-xl font-semibold text-gray-800">
            REALTOR FOR NEARLY 3 DECADES!
          </h3>
          <p className="mt-4 text-lg font-semibold text-gray-800">
            Call: <a href="tel:2069196886" className="hover:underline">(206) 919-6886</a>
          </p>
          <p className="mt-6 text-gray-600">
            With nearly 30 years of experience in the Pahrump real estate market,
            Marci Metzger brings unparalleled expertise, market insight, and dedication
            to her clients. Whether buying, selling, or investing, she ensures
            you achieve your real estate goals with confidence and ease.
          </p>
        </div>

      </div>
    </section>
  );
}
