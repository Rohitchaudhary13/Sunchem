import React from 'react'
import { feedback } from './data'
import {IoMdArrowForward } from 'react-icons/io'
const FeedbackCards = () => {
  return (
    <>
              <div className='flex justify-evenly flex-col rounded-2xl w-96 h-80 border-2 bg-[#fff] border-solid border-gray-200 p-4'>
                <div>
                  <div className='flex gap-4'>
                  <img className='w-56 object-contain' src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/dabur-900x0-removebg-preview.png?updatedAt=1702551339719' alt='client logo' />
                  <IoMdArrowForward  size={30} className='w-1/3' />
                  </div>
                  <hr className='bg-dark mt-4' />
                </div>
                <div>
                  <p>SunChem's comprehensive competence in research, business, and manufacturing enables them to completely understand and successfully meet the formulation needs of brands.</p>
                </div>
                <div>
                  <p className='opacity-50'>14 December 2023</p>
                </div>
              </div>
    </>
  )
}

export default FeedbackCards