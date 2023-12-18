import React from 'react';
import { DarkButton } from './Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='h-screen gap-4 w-full mx-auto flex flex-col justify-center items-center px-4'>
      <h1 className='mt-16 z-20 text-4xl md:text-6xl lg:text-7xl xl:w-3/4 text-center'>
        Blending <span className='italic'>science</span> &{' '}
        <span className='italic'>creativity</span>, for beautiful{' '}
        <span className='italic'>skincare</span><br /> since 1985.
      </h1>
      <Link to="/product-category" className='z-20'>
        <DarkButton name='Browse our products' />
      </Link>
      <img
        src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/ellipse.png?updatedAt=1702548819472'
        className='absolute z-10 w-[50vw]'
        alt=''
      />
      <img
        src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Rectangle_21-removebg-preview.png?updatedAt=1702549305364'
        className='absolute w-20 md:w-64 top-28 left-8'
        alt=''
      />
      <img
        src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Rectangle_21-removebg-preview.png?updatedAt=1702549305364'
        className='absolute w-20 md:w-64 bottom-8 right-8 scale-x-[-1]'
        alt=''
      />
    </div>
  );
};

export default Hero;
