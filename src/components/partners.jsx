import React, { useEffect } from 'react'
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'

export default function Partners() {
  const partners = [partner1, partner2, partner3, partner4]

  // Simple fade-in on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.fade-in')
    const handleScroll = () => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('opacity-100', 'translate-y-0')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-16 bg-white-50" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-serif text-center mb-12">Our Trusted Partners</h2>
        <div className="flex justify-between items-center gap-12 flex-wrap">
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-24 object-contain transform opacity-0 translate-y-6 transition duration-700 ease-out fade-in"
              style={{ transitionDelay: `${index * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
