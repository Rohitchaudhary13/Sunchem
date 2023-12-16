import React from 'react'
import { DarkButton } from './Button'

const Hero = () => {
  return (
    <div className='h-screen w-11/12 mx-auto flex flex-col justify-center items-center'>
      <h1 className='text-6xl w-3/4 text-center'>Blending <span className='italic'>science</span> & <span className='italic'>creativity</span>, for beautiful <span className='italic'>skincare</span> since 1985.</h1>
      {/* <span className='absolute top-1/3 left-1/3 mix-blend-normal orange-circle rounded-full'></span> */}
      <DarkButton name='Browse our products' />
      <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/ellipse.png?updatedAt=1702548819472' className='absolute -z-10 w-[50vw]' alt='' />
      <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Rectangle_21-removebg-preview.png?updatedAt=1702549305364' className='absolute w-64 left-8' alt='' />
      <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Rectangle_21-removebg-preview.png?updatedAt=1702549305364' className='absolute w-64 right-8 scale-x-[-1]' alt='' />
    </div>
  )
}

export default Hero