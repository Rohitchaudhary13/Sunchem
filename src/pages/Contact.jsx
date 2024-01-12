// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import { DarkButton } from '../components/Button'

// const Contact = () => {
//   return (
//     <div>
//         <div className='relative h-screen'>
//       <Navbar />
//         <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-andrea-piacquadio-789822.jpg?updatedAt=1702810711883' className='w-full h-full absolute top-0 -z-10 object-cover' alt='...' />
//         <h2 className='text-6xl mt-48 text-dark w-11/12 mx-auto'><span className='italic'>Let’s look</span> into our <br /> <span className='italic'>product catalog</span></h2>
//       </div>
//       <div className='w-11/12 mx-auto py-16 relative pb-16'>
//           <h2 className='text-5xl'><span className="italic">Fuel Your Brand’s Goals with us</span></h2>
//           <div className='flex pt-4 pb-8 gap-8 justify-center'>
//             <div className='w-1/2'>

// <form class="w-full mx-auto">
// <p className='w-full pb-8'>You will get a response within 24 hours. We will explain in details how we can help you fuel and grow your brand within the stated budget.</p>
//   <div class="relative z-0 w-full mb-5 group">
//       <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
//       <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
//   </div>

//   <div class="grid md:grid-cols-2 md:gap-6">
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
//         <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
//     </div>
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
//         <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
//     </div>
//   </div>
//   <div class="grid md:grid-cols-2 md:gap-6">
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
//         <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
//     </div>
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
//         <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
//     </div>
//   </div>
//   <div class="relative z-0 w-full mb-5 group">
//       <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
//       <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Designation</label>
//   </div>
//     <div class="relative z-0 w-full mb-5 group">
//       <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
//       <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Describe your project in breif</label>
//   </div>
//   {/* <button type="submit" class="text-dark bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
//   <div className='pt-6'>
//   <DarkButton name="Submit Enquiry" />
//   </div>
// </form>

//             </div>
//             <div className='w-1/2'>
//                 <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-alex-andrews-821754.jpg?updatedAt=1702810712100' className='w-full object-cover rounded-xl' alt='' />
//             </div>
//           </div>
//           {/* <img src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-alex-andrews-821754.jpg?updatedAt=1702810712100' className='w-full object-cover rounded-xl h-96' alt='' /> */}
//           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1239710975224!2d72.85051177463862!3d19.146049949770845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b750461e5157%3A0xe1936cc05d999ed0!2sGuru%20Gobind%20Singh%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1702811254300!5m2!1sen!2sin" className='w-full h-96 border-none rounded-xl' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//         </div>
//         <Footer />
//     </div>
//   )
// }

// export default Contact

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DarkButton } from "../components/Button";
import { motion } from "framer-motion";
import MapSelector from "../components/MapSelector";
import { ScrollRestoration } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import image from '../assets/bg-sunchem.png';

const Contact = () => {
  return (
    <div>
      <ScrollRestoration />
      <div className="relative h-16">
        <Navbar />
      </div>
      <div className="w-11/12 mx-auto py-8 md:py-16 relative pb-16">
        <div className="flex gap-16 md:flex-row flex-col">  
        <img
          src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/ellipse.png?updatedAt=1702548819472"
          className="absolute top-4 -left-56 -z-10"
          alt="..."
        />
          <div className="w-full md:w-1/3 overflow-hidden flex flex-col items-start justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
          <span className="italic">Contact Us</span>
        </h2>
        <p className="w-full pb-8">
              Not sure what you need? The team at Sunchem will be happy  to listen to you and suggest event ideas you hadn't considered.
            </p>
            <div className="flex flex-col gap-1">
            <p className="flex gap-4 items-center"><IoMailOutline size={30} />privatelabeling@sunchemindia.in</p>
            <p className="flex gap-4 items-center"><MdOutlineSupportAgent size={30} />Support : 022 2685 5858</p>
            </div>
          </div>
          <div className="w-full md:w-2/3 bg-primary p-8 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
          <span className="italic">We'd love to hear from you!</span>
        </h2>
            <p className="w-full pb-8">
              You will get a response within 24 hours. We will explain in
              details how we can help you fuel and grow your brand within the
              stated budget.
            </p>
            <form className="w-11/12">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-dark appearance-none dark:text-dark dark:focus:border-dark focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-dark peer-focus:dark:text-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-dark appearance-none dark:text-dark dark:focus:border-dark focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-dark peer-focus:dark:text-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-dark appearance-none dark:text-dark dark:focus:border-dark focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-dark peer-focus:dark:text-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-dark appearance-none dark:text-dark dark:focus:border-dark focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-dark peer-focus:dark:text-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number (123-456-7890)
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-dark appearance-none dark:text-dark dark:focus:border-dark focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_company"
                    className="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-dark peer-focus:dark:text-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company (Ex. Google)
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_designation"
                  id="floating_designation"
                  className="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-dark appearance-none dark:text-dark dark:focus:border-dark focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_designation"
                  className="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-dark peer-focus:dark:text-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Designation
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_project_description"
                  id="floating_project_description"
                  className="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-dark appearance-none dark:text-dark dark:focus:border-dark focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_project_description"
                  className="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-dark peer-focus:dark:text-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Describe your project in brief
                </label>
              </div>
              <div className="pt-6">
                <DarkButton name="Submit Enquiry" />
              </div>
              {/* <img
          src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/ellipse.png?updatedAt=1702548819472"
          className="absolute top-1/3 -left-56 -z-10"
          alt="..."
        /> */}
            </form>
          </div>
        </div>
        <MapSelector />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
