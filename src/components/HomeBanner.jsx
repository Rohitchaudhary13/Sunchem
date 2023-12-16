import React from 'react'
import {TbTruckDelivery } from 'react-icons/tb'
import {MdOutlineWorkspacePremium } from 'react-icons/md'
import {TbCirclesRelation } from 'react-icons/tb'
const HomeBanner = () => {
  return (
    <div className='relative'>
        <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-moose-photos-1029896%20(1).jpg?updatedAt=1702480474822' className='w-full h-screen object-cover' alt='' />
        <div className='w-[80vw] absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h2 className='text-6xl mb-8 text-center'>Premium <span className='italic'>Quality</span> Products that suits every <span className='italic'>skin</span> </h2>
            <div className='flex gap-8 justify-center'>
                <div className='bg-secondary flex flex-col justify-center items-center rounded-xl p-4 px-16 gap-4 h-36'>
                    <TbTruckDelivery size={45} />
                    <p>Delivery within 15 days</p>
                </div>
                <div className='bg-secondary flex flex-col justify-center items-center rounded-xl p-4 px-16 gap-4'>
                    <MdOutlineWorkspacePremium  size={45} />
                    <p>100% Organic Products</p>
                </div>
                <div className='bg-secondary flex flex-col justify-center items-center rounded-xl p-4 px-16 gap-4'>
                    <TbCirclesRelation size={45} />
                    <p>Simplest Process</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner