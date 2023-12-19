import React from 'react';
import Navbar from '../components/Navbar';
import { products } from '../components/data';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const ProdCategories = () => {
  return (
    <div>
      <div className='relative h-screen'>
        <Navbar />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: [0.075, 0.082, 0.165, 1] }}
          exit={{ opacity: 0 }}
          src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/manufacturing.jpg?updatedAt=1702806643746'
          className='w-full h-full absolute top-0 -z-10 object-cover'
          alt='...'
        />
        <motion.h2
          animate={{ y: [500, 0], type: "spring", stiffness: 2000 }}
          transition={{ duration: 1, ease: [0.075, 0.082, 0.165, 1] }} 
          className='text-3xl absolute top-1/2 left-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-8 md:mt-16 text-secondary w-11/12 mx-auto'>
          <span className='italic'>Let’s look</span> into our <br />{' '}
          <span className='italic'>product catalog</span>
        </motion.h2>
      </div>
      <div className='w-11/12 mx-auto relative pb-8 md:pb-16'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl py-8 md:py-16'>
          <span className='italic'>Product Categories</span>
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8'>
          {products.map((item, index) => (
            <motion.div
            whileHover={{
              scale: 1.05,
              transition:{ duration: 0.2, ease: 'easeInOut' }
            }}
            whileTap={{ scale: 0.9 }}
              key={index}
              className='w-full rounded-2xl h-[40vh] md:h-[50vh] bg-secondary bg-opacity-20  backdrop-blur-md bg-clip-padding backdrop-filter border border-opacity-30 border-white shadow-md relative '
            >
              <img
                src={item.logo}
                className='rounded-xl w-full h-full object-cover'
                alt=''
              />
              <button className='hover:bg-dark hover:text-secondary duration-300 transition-all ease-in-out outline-none py-2 w-11/12 absolute bottom-2 bg-secondary rounded-xl px-4 italic font-newsreader left-1/2 transform -translate-x-1/2'>
                {item.category}
              </button>
              <h2 className='py-2'>{item.title}</h2>
            </motion.div>
          ))}
        </div>
        <img
          src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/ellipse.png?updatedAt=1702548819472'
          className='absolute top-1/3 left-1/3 -z-10'
          alt='...'
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProdCategories;
