import React, { useState, useRef, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [showAllHours, setShowAllHours] = useState(false)
  const containerRef = useRef(null)

  const officeHours = [
    { day: 'Mon', hours: '08:00 am – 07:00 pm' },
    { day: 'Tue', hours: '08:00 am – 07:00 pm' },
    { day: 'Wed', hours: '08:00 am – 07:00 pm' },
    { day: 'Thu', hours: '08:00 am – 07:00 pm' },
    { day: 'Fri', hours: '08:00 am – 07:00 pm' },
    { day: 'Sat', hours: '08:00 am – 07:00 pm' },
    { day: 'Sun', hours: '08:00 am – 07:00 pm' },
  ]

  const todayIndex = new Date().getDay()
  const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const todayName = dayNames[todayIndex]
  const todayHours = officeHours.find(o => o.day === todayName)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = showAllHours
        ? `${containerRef.current.scrollHeight}px`
        : '0px'
    }
  }, [showAllHours])

  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Header */}
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 text-center mb-16">
          Call or Visit
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <p className="text-gray-700">
              Have questions about buying, selling, or the Pahrump market? We’re here to help.
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/12069196886"
              target="_blank"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl hover:bg-green-600 font-medium shadow-md transition duration-200 w-max"
            >
              <FaWhatsapp className="text-lg" /> Message us on WhatsApp
            </a>

            {/* Address & Phone */}
            <div className="space-y-2 text-gray-800 mt-4">
              <p className="font-semibold">Marci Metzger - THE RIDGE REALTY GROUP</p>
              <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
              <p>
                <strong>Phone:</strong> 
                <a className="hover:text-brand-700 ml-1" href="tel:2069196886">(206) 919-6886</a>
              </p>
            </div>

            {/* Office Hours */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">Office Hours</h3>

              {/* Today */}
              <button
                onClick={() => setShowAllHours(!showAllHours)}
                className="flex justify-between items-center w-full text-left py-3 px-4 bg-white rounded-xl shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-300 transition duration-200"
              >
                <div>
                  <span className="font-medium">Open today</span>
                  <p className="text-gray-600 text-sm">{todayName} {todayHours.hours}</p>
                </div>
                <span className="text-xl font-bold">{showAllHours ? '−' : '+'}</span>
              </button>

              {/* Other Days */}
              <div
                ref={containerRef}
                className="overflow-hidden transition-all duration-500 ease-in-out mt-2 rounded-xl bg-white shadow-inner"
              >
                <div className="px-4 py-3 space-y-1">
                  {officeHours.filter(o => o.day !== todayName).map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-gray-700">
                      <span>{day}</span>
                      <span>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-3">
                Appointments outside office hours available upon request. Just call!
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg">
              <input type="text" placeholder="First name" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-300 transition duration-200" />
              <input type="text" placeholder="Last name" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-300 transition duration-200" />
              <input type="email" placeholder="Email" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-300 transition duration-200 md:col-span-2" />
              <textarea placeholder="Tell us what you're looking for..." rows="5" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-300 transition duration-200 md:col-span-2"></textarea>
              <button type="submit" className="rounded-xl bg-brand-700 px-6 py-3 text-white hover:bg-brand-800 md:col-span-2 font-medium shadow-md transition duration-200">Send message</button>
              <p className="text-xs text-gray-500 md:col-span-2 mt-2">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
