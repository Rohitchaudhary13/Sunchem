// import React, { useRef } from 'react'
// import Cards from './Cards'
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { Navigation, Pagination, A11y, Scrollbar } from 'swiper/modules';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css';
// import {GrLinkPrevious, GrLinkNext} from 'react-icons/gr'
// import { categories } from './data';

// const Categories = () => {
//   const swiper = useSwiper();
//   const swiperRef = useRef();
//   return (
//     <div className='bg-secondary h-screen'>
//         <div className='pt-16'>
//             <h2 className='text-5xl text-center'>Popular</h2>
//             <p className='text-center'>25+ years experience in creating advanced cosmetic formulations.</p>
//             <div className='pt-16'>
//             <Swiper
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;
//             }}
//             className="mySwiper"
//         modules={[ A11y]}
//         spaceBetween={20}
//         slidesPerView={5}
//         onSlideChange={() => console.log('slide change')}
//     >
//       {
//         categories.map((item) => (
//           <>
//             <SwiperSlide>
//             <div className='rounded-2xl bg-[#fff]'>
//               <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//                   <source src={item.source} type="video/mp4" />
//               </video>
//               <div className='p-4'>
//               <h2>{item.name}</h2>
//               <p>{item.details}</p>
//               </div>
//             </div>
//             </SwiperSlide>
//           </>
//         ))
//       }
                
//       {/* <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Hair-Removal-Spray1.mp4?updatedAt=1702455759954' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Hair Removal Spray</h2>
//         <p>For Men & Women</p>
//         </div>
//       </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/hair_color?updatedAt=1702527912240' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Hair Color</h2>
//         <p>Multiple Shades</p>
//         </div>
//       </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Hvp.mp4?updatedAt=1702455759835' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Hair Volumizing Powder</h2>
//         <p>Ultra Hold & Mild Hold</p>
//         </div>
//       </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Hair-Straightening.mp4?updatedAt=1702455759890' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Hair Straightening</h2>
//         <p>For Men & Women</p>
//         </div>
//       </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Dry-Spa.mp4?updatedAt=1702455758847' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Dry Spa</h2>
//         <p>For Men & Women</p>
//         </div>
//       </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Oxygen-Bleach.mp4?updatedAt=1702455759024' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Oxygen Bleach</h2>
//         <p>For Regular & Oily Skin</p>
//         </div>
//       </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Epilatory-Wax.mp4?updatedAt=1702455759639' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Epilatory Wax</h2>
//         <p>Brazilian & Roll on Wax</p>
//         </div>
//       </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Hair-Removal-Cream.mp4?updatedAt=1702455758901' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Hair Removal Cream</h2>
//         <p>For Men & Women</p>
//         </div>
//       </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Home-Care-Video.mp4?updatedAt=1702455760090' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Copper Cleanser</h2>
//         <p></p>
//         </div>
//       </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Dish-Washer.mp4?updatedAt=1702455759140' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Dish Washer</h2>
//         <p></p>
//         </div>
//       </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Pet-Care.mp4?updatedAt=1702455763043' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Pet Care</h2>
//         <p></p>
//         </div>
//       </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className='rounded-2xl bg-[#fff]'>
//         <video className='h-60 w-96 object-cover rounded-t-2xl' prefix='auto' autoPlay loop muted playsInline controls>
//             <source src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Pedicure-Kit.mp4?updatedAt=1702455762226' type="video/mp4" />
//         </video>
//         <div className='p-4'>
//         <h2>Pedicure Kit</h2>
//         <p></p>
//         </div>
//       </div>
//       </SwiperSlide> */}
//     </Swiper>
//             </div>
//             <div className='flex gap-4 pt-8 justify-center'>
//             <button className='p-6 rounded-full hover:bg-dark hover:text-secondary hover:border-secondary transition-all duration-300 ease-in-out bg-[#fff] border-2 border-solid border-gray-200' onClick={() => swiperRef.current.slidePrev()}>
//         <GrLinkPrevious size={25} />
//       </button>
//       <button className='p-6 rounded-full hover:bg-dark hover:text-secondary hover:border-dark transition-all duration-300 ease-in-out bg-[#fff] border-2 border-solid border-gray-200' onClick={() => swiperRef.current.slideNext()}>
//         <GrLinkNext size={25} />
//       </button>
//       </div>
//         </div>
//     </div>
//   )
// }

// export default Categories



import React, { useRef } from 'react';
import Cards from './Cards';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import { categories } from './data';
import { motion } from 'framer-motion';
import { DarkButton } from './Button';


const Categories = () => {
  const swiper = useSwiper();
  const swiperRef = useRef();

  return (
    <div className='bg-secondary min-h-screen'>
      <div className='py-16 px-4'>
        <h2 className='text-3xl md:text-5xl lg:text-5xl text-center'>
          Popular
        </h2>
        <p className='text-center'>
          25+ years experience in creating advanced cosmetic formulations.
        </p>
        <div className='pt-8'>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
            modules={[A11y]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition:{ duration: 0.5, ease: 'anticipate' }
                  }}
                  className='rounded-2xl bg-[#fff]'>
                  <video
                    className='h-60 md:h-80 lg:h-60 w-full object-cover rounded-t-2xl'
                    prefix='auto'
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={item.source} type="video/mp4" />
                  </video>
                  <div className='p-4'>
                    <h2>{item.name}</h2>
                    <p>{item.details}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='flex gap-4 pt-8 justify-center'>
          <button
            className='p-6 rounded-full hover:bg-dark hover:text-secondary hover:border-secondary transition-all duration-300 ease-in-out bg-[#fff] border-2 border-solid border-gray-200'
            onClick={() => swiperRef.current.slidePrev()}
          >
            <GrLinkPrevious size={25} />
          </button>
          <button
            className='p-6 rounded-full hover:bg-dark hover:text-secondary hover:border-dark transition-all duration-300 ease-in-out bg-[#fff] border-2 border-solid border-gray-200'
            onClick={() => swiperRef.current.slideNext()}
          >
            <GrLinkNext size={25} />
          </button>
        </div>
        {/* <div className='flex gap-4 pt-8 justify-center'>
          <DarkButton name="Browse All Products" />
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
