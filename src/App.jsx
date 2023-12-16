import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Whoweare from './components/Whoweare'
import Feedback from './components/Feedback'
import HomeBanner from './components/HomeBanner'
import Howwework from './components/Howwework'
import Offices from './components/Offices'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Categories />
    <Whoweare />
    <Feedback start={`What our `} end={`say about us`} italic={`clients`} />
    <HomeBanner />
    <Howwework />
    <Offices />
    <Footer />
    </>
  )
}

export default App
