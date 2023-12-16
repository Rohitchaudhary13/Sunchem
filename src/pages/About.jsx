import React from 'react'
import Navbar from '../components/Navbar'
import MyMarquee from '../components/MyMarquee'
import Feedback from '../components/Feedback'
import FeedbackCards from '../components/FeedbackCards'
import { promise } from '../components/data'
import { PiHandshake } from "react-icons/pi";
import { DarkButton, LightButton } from '../components/Button'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div>
      <div className='relative h-screen'>
      <Navbar />
        <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/essential_oil.jpg?updatedAt=1702696128969' className='w-full h-full absolute top-0 -z-10 object-cover' alt='...' />
        <h2 className='text-6xl mt-48 text-secondary w-11/12 mx-auto'><span className='italic'>Beauty</span> from <br /> skin to <span className='italic'>soul</span></h2>
      </div>
      <div className='w-11/12 mx-auto relative mt-16'>
        <h2 className='text-6xl'>Sun Chem India <br /><span className='italic'>since</span> 1985</h2>
        <div className='flex flex-row justify-between gap-16 items-start py-8'>
          <div className='w-1/3'>
            <h2 className='italic text-3xl'>Our Company</h2>
            <p>Sunchem India is a manufacturer of high quality skincare and homecare products. We are involved in manufacturing formulations, providing our customers with market specific solutions packaging and distribution as well as worldwide customer support.</p>
          </div>
          <div className='w-2/3'>
            <h2 className='italic text-3xl'>Professional Skills & Sophisticated Equipment</h2>
            <p>We proudly guarantee the quality of our products based on the professional knowledge and know-how of our senior researchers with 35+ years of experience and latest sophisticated manufacturing equipment. High tech machinery and amongst india’s most advanced state of the art research centre our team is the best in the industry. We are not only your research partner but a strategic business partner.</p>
          </div>
        </div>
      </div>
        <MyMarquee />
        <div className='my-16'>
          <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-sora-shimazaki-5938245.jpg?updatedAt=1702700240179' className='w-full h-[80vh] object-cover' alt='...' />
          <div className='flex gap-16 w-11/12 mx-auto my-16'>
            <div className='w-2/3'>
              <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/sample_products.jpg?updatedAt=1702699682206' className='rounded-2xl h-[75vh] w-full object-cover' alt='' />
            </div>
            <div className='w-1/3'>
              <p>Sunchem India is a manufacturer of high quality skincare and homecare products. We are involved in manufacturing formulations, providing our customers with market specific solutions packaging and distribution as well as worldwide customer support. We ensure best service with every product we have manufactured.</p>
              <div className='grid grid-cols-2 gap-4'>
              <div className='flex justify-evenly p-4 flex-col gap-4'>
                <h2 className='font-semibold font-poppins text-4xl'>166+</h2>
                <p>Our current team count, up from 3 in 2016</p>
                <hr />
              </div>
              <div className='flex justify-evenly p-4 flex-col gap-4'>
                <h2 className='font-semibold font-poppins text-4xl'>166+</h2>
                <p>Our current team count, up from 3 in 2016</p>
                <hr />
              </div>
              <div className='flex justify-evenly p-4 flex-col gap-4'>
                <h2 className='font-semibold font-poppins text-4xl'>166+</h2>
                <p>Our current team count, up from 3 in 2016</p>
                <hr />
              </div>
              <div className='flex justify-evenly p-4 flex-col gap-4'>
                <h2 className='font-semibold font-poppins text-4xl'>166+</h2>
                <p>Our current team count, up from 3 in 2016</p>
                <hr />
              </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className='w-11/12 mx-auto'>
          <Feedback start={`In the`} end={``} italic={`Spotlight`} />
        </div>
        <div className='w-11/12 mx-auto relative'>
          <h2 className='text-5xl pb-16 text-center'>Our <span className="italic">Promise</span></h2>
          <div className='inline-flex gap-8 flex-wrap justify-center'>
          {
            promise.map((item) => (
              <>
                <div className='w-96 rounded-xl text-center h-80 bg-secondary p-4 bg-opacity-20  backdrop-blur-md bg-clip-padding backdrop-filter border border-opacity-30 border-white shadow-md'>
                  <div className=''><PiHandshake className='my-4 text-center' size={45} /></div>
                  <h2 className='py-2'>{item.title}</h2>
                  <p className='py-2'>{item.description}</p>
                </div>
              </>
            ))
          }
          </div>
          <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/ellipse.png?updatedAt=1702548819472' className='absolute top-1/3 left-1/3 -z-10' alt='...' />
        </div>
        <div className='w-11/12 mx-auto py-16'>
          <h2 className='text-5xl text-center py-16'><span className='italic'>Reach</span> Us Out</h2>
          <div className='flex gap-4'>
            <div className='bg-secondary rounded-3xl p-8 w-1/2 h-[70vh] flex flex-col justify-evenly gap-4'>
              <h2 className='text-5xl'><span className='italic'>Connect</span> with us</h2>
              <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <p className='font-semibold'>Let’s start your brand’s journey!</p>
              <div className='flex gap-4'>
              <DarkButton name={`Know More`}/>
              <LightButton name={`Get in Touch`} />
              </div>
            </div>
            <div className='w-1/2 h-[70vh]'>
              <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-fox-1595385.jpg?updatedAt=1702470066225' className='rounded-3xl w-full h-full object-cover' alt='...' />
            </div>
          </div>

        </div>
        <Footer />
    </div>
  )
}

export default About