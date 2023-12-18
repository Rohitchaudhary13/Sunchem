import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { TbCirclesRelation } from 'react-icons/tb';

const HomeBanner = () => {
  return (
    <div className='relative'>
      <img
        src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-moose-photos-1029896%20(1).jpg?updatedAt=1702480474822'
        className='w-full h-screen object-cover'
        alt=''
      />
      <div className='w-[80vw] md:w-3/4 lg:w-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h2 className='text-4xl md:text-6xl mb-4 md:mb-8 text-center'>
          Premium <span className='italic'>Quality</span> Products that suit every{' '}
          <span className='italic'>skin</span>{' '}
        </h2>
        <div className='flex flex-col md:flex-row gap-4 justify-center'>
          <div className='bg-secondary flex flex-col justify-center items-center rounded-xl p-4 px-8 md:p-4 gap-2 h-36 md:h-auto'>
            <TbTruckDelivery size={45} />
            <p>Delivery within 15 days</p>
          </div>
          <div className='bg-secondary flex flex-col justify-center items-center rounded-xl p-4 px-8 md:p-4 gap-2'>
            <MdOutlineWorkspacePremium size={45} />
            <p>100% Organic Products</p>
          </div>
          <div className='bg-secondary flex flex-col justify-center items-center rounded-xl p-4 px-8 md:p-4 gap-2'>
            <TbCirclesRelation size={45} />
            <p>Simplest Process</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
