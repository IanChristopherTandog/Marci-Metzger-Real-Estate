import React from 'react'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'

const services = [
  {
    title: "Real Estate Done Right",
    text: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    img: service1,
  },
  {
    title: "Commercial & Residential",
    text: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    img: service2,
  },
  {
    title: "Rely on Expertise",
    text: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    img: service3,
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center">Our Services</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transform group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl">{s.title}</h3>
                <p className="mt-2 text-gray-700">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
