// import React from 'react'
// import Navbar from '../components/Navbar'
// import MyMarquee from '../components/MyMarquee'
// import Feedback from '../components/Feedback'
// import FeedbackCards from '../components/FeedbackCards'
// import { promise } from '../components/data'
// import { PiHandshake } from "react-icons/pi";
// import { DarkButton, LightButton } from '../components/Button'
// import Footer from '../components/Footer'
// const About = () => {
//   return (
//     <div>
//       <div className='relative h-screen'>
//       <Navbar />
//         <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/nick-night-52F2gX0COs4-unsplash.jpg?updatedAt=1702805986125' className='w-full h-full absolute top-0 -z-10 object-cover' alt='...' />
//         <h2 className='text-6xl mt-48 text-secondary w-11/12 mx-auto'><span className='italic'>Beauty</span> from <br /> skin to <span className='italic'>soul</span></h2>
//       </div>
//       <div className='w-11/12 mx-auto relative mt-16'>
//         <h2 className='text-6xl'>Sun Chem India <br /><span className='italic'>since</span> 1985</h2>
//         <div className='flex flex-row justify-between gap-16 items-start py-8'>
//           <div className='w-1/3'>
//             <h2 className='italic text-3xl'>Our Company</h2>
//             <p>Sunchem India is a manufacturer of high quality skincare and homecare products. We are involved in manufacturing formulations, providing our customers with market specific solutions packaging and distribution as well as worldwide customer support.</p>
//           </div>
//           <div className='w-2/3'>
//             <h2 className='italic text-3xl'>Professional Skills & Sophisticated Equipment</h2>
//             <p>We proudly guarantee the quality of our products based on the professional knowledge and know-how of our senior researchers with 35+ years of experience and latest sophisticated manufacturing equipment. High tech machinery and amongst india’s most advanced state of the art research centre our team is the best in the industry. We are not only your research partner but a strategic business partner.</p>
//           </div>
//         </div>
//       </div>
//         <MyMarquee />
//         <div className='my-16'>
//           <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-sora-shimazaki-5938245.jpg?updatedAt=1702700240179' className='w-full h-[80vh] object-cover' alt='...' />
//           <div className='flex gap-16 w-11/12 mx-auto my-16'>
//             <div className='w-2/3'>
//               <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/sample_products.jpg?updatedAt=1702699682206' className='rounded-2xl h-[75vh] w-full object-cover' alt='' />
//             </div>
//             <div className='w-1/3'>
//               <p>Sunchem India is a manufacturer of high quality skincare and homecare products. We are involved in manufacturing formulations, providing our customers with market specific solutions packaging and distribution as well as worldwide customer support. We ensure best service with every product we have manufactured.</p>
//               <div className='grid grid-cols-2 gap-4'>
//               <div className='flex justify-evenly p-4 flex-col gap-4'>
//                 <h2 className='font-semibold font-poppins text-4xl'>166+</h2>
//                 <p>Our current team count, up from 3 in 2016</p>
//                 <hr />
//               </div>
//               <div className='flex justify-evenly p-4 flex-col gap-4'>
//                 <h2 className='font-semibold font-poppins text-4xl'>166+</h2>
//                 <p>Our current team count, up from 3 in 2016</p>
//                 <hr />
//               </div>
//               <div className='flex justify-evenly p-4 flex-col gap-4'>
//                 <h2 className='font-semibold font-poppins text-4xl'>166+</h2>
//                 <p>Our current team count, up from 3 in 2016</p>
//                 <hr />
//               </div>
//               <div className='flex justify-evenly p-4 flex-col gap-4'>
//                 <h2 className='font-semibold font-poppins text-4xl'>166+</h2>
//                 <p>Our current team count, up from 3 in 2016</p>
//                 <hr />
//               </div>
//               </div>

//             </div>
//           </div>
//         </div>
//         <div className='w-11/12 mx-auto'>
//           <Feedback start={`In the`} end={``} italic={`Spotlight`} />
//         </div>
//         <div className='w-11/12 mx-auto relative'>
//           <h2 className='text-5xl pb-16 text-center'>Our <span className="italic">Promise</span></h2>
//           <div className='inline-flex gap-8 flex-wrap justify-center'>
//           {
//             promise.map((item) => (
//               <>
//                 <div className='w-96 rounded-xl text-center h-80 bg-secondary p-4 bg-opacity-20  backdrop-blur-md bg-clip-padding backdrop-filter border border-opacity-30 border-white shadow-md'>
//                   <div className=''><PiHandshake className='my-4 text-center' size={45} /></div>
//                   <h2 className='py-2'>{item.title}</h2>
//                   <p className='py-2'>{item.description}</p>
//                 </div>
//               </>
//             ))
//           }
//           </div>
//           <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/ellipse.png?updatedAt=1702548819472' className='absolute top-1/3 left-1/3 -z-10' alt='...' />
//         </div>
//         <div className='w-11/12 mx-auto py-16'>
//           <h2 className='text-5xl text-center py-16'><span className='italic'>Reach</span> Us Out</h2>
//           <div className='flex gap-4'>
//             <div className='bg-secondary rounded-3xl p-8 w-1/2 h-[70vh] flex flex-col justify-evenly gap-4'>
//               <h2 className='text-5xl'><span className='italic'>Connect</span> with us</h2>
//               <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
//               <p className='font-semibold'>Let’s start your brand’s journey!</p>
//               <div className='flex gap-4'>
//               <DarkButton name={`Know More`}/>
//               <LightButton name={`Get in Touch`} />
//               </div>
//             </div>
//             <div className='w-1/2 h-[70vh]'>
//               <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-fox-1595385.jpg?updatedAt=1702470066225' className='rounded-3xl w-full h-full object-cover' alt='...' />
//             </div>
//           </div>

//         </div>
//         <Footer />
//     </div>
//   )
// }

// export default About

import React from "react";
import Navbar from "../components/Navbar";
import MyMarquee from "../components/MyMarquee";
import Feedback from "../components/Feedback";
import FeedbackCards from "../components/FeedbackCards";
import { promise } from "../components/data";
import { DarkButton, LightButton } from "../components/Button";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { PiHandshake } from "react-icons/pi";
import { FaRegLightbulb, FaPencilRuler } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoIosFlash } from "react-icons/io";
import { Link, ScrollRestoration } from "react-router-dom";

const About = () => {
  const iconComponents = {
    PiHandshake,
    FaRegLightbulb,
    FaPencilRuler,
    VscWorkspaceTrusted,
    IoIosFlash,
  };

  return (
    <div>
      <ScrollRestoration />
      <div className="relative h-96">
        <Navbar />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: [0.075, 0.082, 0.165, 1] }}
          exit={{ opacity: 0 }}
          src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg?updatedAt=1702951662853"
          className="w-full h-[27rem] absolute top-0 -z-10 object-cover"
          alt="..."
        />
        {/* <motion.h2
          animate={{ y: [500, 0], type: "spring", stiffness: 2000 }}
          transition={{ duration: 1, ease: [0.075, 0.082, 0.165, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-secondary w-11/12 mx-auto top-1/2 absolute left-8 mt-8"
        >
          <span className="italic">Beauty</span> from <br /> skin to{" "}
          <span className="italic">soul</span>
        </motion.h2> */}
      </div>
      <div className="w-11/12 mx-auto relative mt-8 md:mt-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
          Sun Chem India 
          <span className="italic"><br /> since</span> 1985
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-16 items-start py-8">
          <div className="w-full md:w-2/5">
            <h2 className="italic text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
              Our Company
            </h2>
            <p>
              Sunchem India is a manufacturer of high quality skincare and
              homecare products. We are involved in manufacturing formulations,
              providing our customers with market specific solutions packaging
              and distribution as well as worldwide customer support.
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="italic text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
              Professional Skills & Great Equipments
            </h2>
            <p>
              We proudly guarantee the quality of our products based on the
              professional knowledge and know-how of our senior researchers with
              35+ years of experience and latest sophisticated manufacturing
              equipment. High tech machinery and amongst india’s most advanced
              state of the art research centre our team is the best in the
              industry. We are not only your research partner but a strategic
              business partner.
            </p>
          </div>
        </div>
      </div>
      <div className='fixed bottom-8 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2'>
    <Link to="contact">
    <button className='px-6 py-4 bg-primary text-dark w-96 hover:bg-dark hover:text-primary transition-all duration-300 ease-in-out'>Contact Us</button>
    </Link>
    </div>
      <div className="my-8 md:my-16">
      <MyMarquee />
        <img
          src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-sora-shimazaki-5938245.jpg?updatedAt=1702700240179"
          className="w-full h-[50vh] md:h-[80vh] object-cover"
          alt="..."
        />
        <div className="flex flex-col md:flex-row gap-8 w-11/12 mx-auto my-8 md:my-16">
          <div className="w-full md:w-2/3">
            <motion.img
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5, ease: "anticipate" },
              }}
              whileTap={{ scale: 0.9 }}
              src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/sample_products.jpg?updatedAt=1702699682206"
              className="rounded-2xl h-[50vh] md:h-[80vh] w-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/3">
            <p>
              Sunchem India is a manufacturer of high quality skincare and
              homecare products. We are involved in manufacturing formulations,
              providing our customers with market specific solutions packaging
              and distribution as well as worldwide customer support. We ensure
              best service with every product we have manufactured.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex hover:bg-secondary rounded-2xl cursor-pointer justify-evenly p-4 flex-col gap-4">
                <h2 className="font-semibold font-poppins text-4xl">10+</h2>
                <p>Factories situated all over India.</p>
                <hr />
              </div>
              <div className="flex justify-evenly p-4 flex-col hover:bg-secondary rounded-2xl gap-4 cursor-pointer">
                <h2 className="font-semibold font-poppins text-4xl">25+</h2>
                <p>Years of exp in creating best formulations.</p>
                <hr />
              </div>
              <div className="flex justify-evenly p-4 flex-col gap-4 hover:bg-secondary rounded-2xl cursor-pointer">
                <h2 className="font-semibold font-poppins text-4xl">20+</h2>
                <p>Product Categories manufactured</p>
                <hr />
              </div>
              <div className="flex justify-evenly p-4 flex-col gap-4 hover:bg-secondary rounded-2xl cursor-pointer">
                <h2 className="font-semibold font-poppins text-4xl">15+</h2>
                <p>Home brand manufactures</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
          <div className="flex justify-center">
            <DarkButton name="Connect with us" />
          </div>
      </div>
      <div className="w-11/12 mx-auto">
        <Feedback start={`In the`} end={``} italic={`Spotlight`} />
      </div>
      <div className="w-11/12 mt-16 mx-auto relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl pb-8 md:pb-16 text-center">
          Our <span className="italic">Promise</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {promise.map((item, index) => (
            <motion.div
              whileHover={{
                scale: 1.07,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
              key={index}
              className="cursor-pointer hover:bg-primary w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 rounded-xl text-center h-auto bg-secondary p-4 bg-opacity-20  backdrop-blur-md bg-clip-padding backdrop-filter border border-opacity-30 border-white shadow-md mb-8 md:mb-0"
            >
              <div className="flex justify-center">
                {React.createElement(iconComponents[item.icon], {
                  className: "my-4 text-center",
                  size: 45,
                })}
              </div>
              <h2 className="py-2">{item.title}</h2>
              <p className="py-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <img
          src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/ellipse.png?updatedAt=1702548819472"
          className="absolute top-1/3 right-1/3 -z-10"
          alt="..."
        />
      </div>
      <div className="w-11/12 mx-auto py-8 md:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center pb-8 md:pb-16">
          <span className="italic">Reach</span> Us Out
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-secondary rounded-3xl p-8 w-full md:w-1/2 h-[50vh] lg:h-[70vh] flex flex-col justify-evenly gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="italic">Connect</span> with us
            </h2>
            <p>
              Welcome to SunChem India, where innovation meets quality in the
              realm of skincare and homecare products. Connect with us to
              explore the latest advancements, industry insights, and
              collaborative opportunities. 
              <br />
              Whether you're a customer, partner, or industry
              enthusiast, we invite you to be part of our journey. 
              Let's collaborate and bring your brand's vision to life. Transform ideas
              into quality products with SunChem India – your trusted partner
              for over 25 years in cosmetic formulations.
            </p>
            <p className="font-semibold">Let’s start your brand’s journey!</p>
            <div className="flex gap-4">
              <DarkButton name={`Know More`} />
              <LightButton name={`Get in Touch`} />
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[50vh] lg:h-[70vh] overflow-hidden rounded-3xl">
            <img
              // whileHover={{
              //   scale: 1.05,
              //   transition:{ duration: 0.5, ease: 'easeInOut' }
              // }}
              // whileTap={{ scale: 0.9 }}
              src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-fox-1595385.jpg?updatedAt=1702470066225"
              className="w-full h-full object-cover transition-all duration-200 ease-in-out hover:scale-125"
              alt="..."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
