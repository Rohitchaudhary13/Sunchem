import { useEffect, useRef, useState } from 'react'
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
import {Scrollbar} from 'smooth-scrollbar-react';
import { AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Link, ScrollRestoration } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { DarkButton } from './components/Button'

function App() {
  

  return (
    <>
    <ScrollRestoration />
    <Navbar />
    <Hero />
    <div className='fixed bottom-8 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2'>
    <Link to="contact">
    <button className='px-6 py-4 bg-primary text-dark w-96 hover:bg-dark hover:text-primary transition-all duration-300 ease-in-out'>Contact Us</button>
    </Link>
    </div>
    <Categories />
    <Whoweare />
    <Feedback start={`What our `} end={`say about us`} italic={`clients`} />
    <ParallaxProvider
      >
    <HomeBanner />
    </ParallaxProvider>
    <Howwework />
    <Offices />
    <Footer />
    </>
  )
}

export default App
