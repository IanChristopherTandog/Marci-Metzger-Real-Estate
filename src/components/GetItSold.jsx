import React from 'react'
import house1 from '../assets/house1.png'
import house2 from '../assets/house2.png'
import house3 from '../assets/house3.png'

const data = [
  {
    title: "Top Residential Sales Last 5 Years",
    text: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
    img: house1,
  },
  {
    title: "Don't Just List it... Get it SOLD!",
    text: "We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    img: house2,
  },
  {
    title: "Guide to Buyers",
    text: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    img: house3,
  },
]

export default function GetItSold() {
  return (
    <section id="getitsold" className="scroll-mt-24 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center">Get it SOLD</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <article key={item.title} className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transform group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
