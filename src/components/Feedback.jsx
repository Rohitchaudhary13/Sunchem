import React, { useRef } from "react";
import { Carousel } from "@material-tailwind/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css/navigation";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import "swiper/css/pagination";
import "swiper/css";
import FeedbackCards from "./FeedbackCards";
import { IoMdArrowForward } from "react-icons/io";

const Feedback = (props) => {
  const swiper = useSwiper();
  const swiperRef = useRef();
  return (
    <div className="w-11/12 mx-auto h-screen">
      <div className="py-16">
        <h2 className="text-5xl text-center">
          {props.start} <span className="italic">{props.italic} </span>{props.end}
        </h2>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        // pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="flex justify-evenly flex-col rounded-2xl w-96 h-80 border-2 bg-[#fff] border-solid border-gray-200 p-4">
            <div>
              <div className="flex justify-between w-full">
                <img
                  className="w-56 object-contain"
                  src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/idJduluxkG%20(1).png?updatedAt=1702517787733"
                  alt="client logo"
                />
                <IoMdArrowForward size={30} className="w-1/3" />
              </div>
              <hr className="bg-dark mt-4" />
            </div>
            <div>
              <p>
              An invaluable partner from inception, their research prowess helped us actualize our vision for natural, novel formulations that resonate with safety and efficacy for families.
              </p>
            </div>
            <div>
              <p className="opacity-50">14 December 2023</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-evenly flex-col rounded-2xl w-96 h-80 border-2 bg-[#fff] border-solid border-gray-200 p-4">
            <div>
              <div className="flex justify-between w-full">
                <img
                  className="w-56 object-contain"
                  src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/dabur-900x0-removebg-preview.png?updatedAt=1702551339719"
                  alt="client logo"
                />
                <IoMdArrowForward size={30} className="w-1/3" />
              </div>
              <hr className="bg-dark mt-4" />
            </div>
            <div>
            <p>SunChem's comprehensive competence in research, business, and manufacturing enables them to completely understand and successfully meet the formulation needs of brands.</p>
            </div>
            <div>
              <p className="opacity-50">14 August 2015</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-evenly flex-col rounded-2xl w-96 h-80 border-2 bg-[#fff] border-solid border-gray-200 p-4">
            <div>
              <div className="flex justify-between w-full">
                <img
                  className="w-36 object-contain"
                  src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/bombae-coupon-promo-code-removebg-preview.png?updatedAt=1702556653846"
                  alt="client logo"
                />
                <IoMdArrowForward size={30} className="w-1/3" />
              </div>
              <hr className="bg-dark mt-4" />
            </div>
            <div>
              <p>
              Their stellar research and sage advising on strategy made our brand vision a reality with custom-crafted formulations. Superb partners.
              </p>
            </div>
            <div>
              <p className="opacity-50">05 March 2013</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-evenly flex-col rounded-2xl w-96 h-80 border-2 bg-[#fff] border-solid border-gray-200 p-4">
            <div>
              <div className="flex justify-between w-full">
                <img
                  className="w-24 object-contain"
                  src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/image%20(2).png?updatedAt=1702557108577"
                  alt="client logo"
                />
                <IoMdArrowForward size={30} className="w-1/3" />
              </div>
              <hr className="bg-dark mt-4" />
            </div>
            <div>
              <p>
                SunChem has been an excellent partner in translating our
                business ideas and vision into successful products, thanks to
                their responsive workforce and astute strategic advice.
              </p>
            </div>
            <div>
              <p className="opacity-50">29 January 2020</p>
            </div>
          </div>
        </SwiperSlide>
        
        
        {/* <SwiperSlide>
          <div className="flex justify-evenly flex-col rounded-2xl w-96 h-80 border-2 bg-[#fff] border-solid border-gray-200 p-4">
            <div>
              <div className="flex justify-between w-full">
                <img
                  className="w-56 object-contain"
                  src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/dabur-900x0-removebg-preview.png?updatedAt=1702551339719"
                  alt="client logo"
                />
                <IoMdArrowForward size={30} className="w-1/3" />
              </div>
              <hr className="bg-dark mt-4" />
            </div>
            <div>
              <p>
                SunChem has been an excellent partner in translating our
                business ideas and vision into successful products, thanks to
                their responsive workforce and astute strategic advice.
              </p>
            </div>
            <div>
              <p className="opacity-50">14 December 2023</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-evenly flex-col rounded-2xl w-96 h-80 border-2 bg-[#fff] border-solid border-gray-200 p-4">
            <div>
              <div className="flex justify-between w-full">
                <img
                  className="w-56 object-contain"
                  src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/dabur-900x0-removebg-preview.png?updatedAt=1702551339719"
                  alt="client logo"
                />
                <IoMdArrowForward size={30} className="w-1/3" />
              </div>
              <hr className="bg-dark mt-4" />
            </div>
            <div>
              <p>
                SunChem has been an excellent partner in translating our
                business ideas and vision into successful products, thanks to
                their responsive workforce and astute strategic advice.
              </p>
            </div>
            <div>
              <p className="opacity-50">14 December 2023</p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div className="flex gap-4 pt-4">
        <button
          className="p-6 rounded-full hover:bg-dark hover:text-secondary hover:border-secondary transition-all duration-300 ease-in-out bg-[#fff] border-2 border-solid border-gray-200"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <GrLinkPrevious size={25} />
        </button>
        <button
          className="p-6 rounded-full hover:bg-dark hover:text-secondary hover:border-dark transition-all duration-300 ease-in-out bg-[#fff] border-2 border-solid border-gray-200"
          onClick={() => swiperRef.current.slideNext()}
        >
          <GrLinkNext size={25} />
        </button>
      </div>
    </div>
  );
};

export default Feedback;
