import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import GetItSold from './components/GetItSold'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Social from './components/Social'
import Directions from './components/Direction'
import MeetRealtor from './components/MeetRealtor'
import Partners from './components/partners';

import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <MeetRealtor />
        <GetItSold />
        <SearchBar />
        <Partners />
        <Services />
        <Gallery />
        <Contact />
        <Directions />
        <Social />
      </main>
      <Footer />
    </div>
  )
}
