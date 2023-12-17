import React from 'react'
import Navbar from '../components/Navbar'
import { products, promise } from '../components/data'
import Footer from '../components/Footer'

const ProdCategories = () => {
  return (
    <div>
        <div className='relative h-screen'>
      <Navbar />
        <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/manufacturing.jpg?updatedAt=1702806643746' className='w-full h-full absolute top-0 -z-10 object-cover' alt='...' />
        <h2 className='text-6xl mt-48 text-secondary w-11/12 mx-auto'><span className='italic'>Let’s look</span> into our <br /> <span className='italic'>product catalog</span></h2>
      </div>
      <div className='w-11/12 mx-auto relative pb-16'>
          <h2 className='text-5xl py-16'><span className="italic">Product Categories</span></h2>
          <div className='inline-flex gap-8 flex-wrap justify-center'>
          {
            products.map((item) => (
              <>
                <div className='w-60 rounded-xl text-center h-80 bg-secondary bg-opacity-20  backdrop-blur-md bg-clip-padding backdrop-filter border border-opacity-30 border-white shadow-md relative '>
                    <img src={item.logo} className='rounded-xl w-full object-cover h-full' alt='' />
                    <button className='outline-none py-2 w-11/12 absolute bottom-2 bg-secondary rounded-xl px-4 italic font-newsreader left-1/2 transform -translate-x-1/2'>{item.category}</button>
                  <h2 className='py-2'>{item.title}</h2>
                </div>
              </>
            ))
          }
          </div>
          <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/ellipse.png?updatedAt=1702548819472' className='absolute top-1/3 left-1/3 -z-10' alt='...' />
        </div>
        <Footer />
    </div>
  )
}

export default ProdCategories