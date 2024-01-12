import React from "react";
import { DarkButton } from "./Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen w-1/2 flex justify-start items-end">
      <motion.div
        animate={{ y: [500, 0], type: "spring", stiffness: 2000 }}
        transition={{ duration: 1, ease: [0.075, 0.082, 0.165, 1] }}
        className="z-20 xl:w-full p-6 rounded-2xl m-4 bg-secondary glass"
      >
        <h1 className="text-4xl md:text-6xl text-left pb-4 lg:text-7xl xl:text-7xl">
          Blending <span className="italic">science</span> &{" "}
          <span className="italic">creativity</span>, for beautiful{" "}
          <span className="italic">skincare </span>
           since 1985.
        </h1>
        <div className=" z-20">
          <Link to="/product-category">
            <DarkButton name="Browse our products" />
          </Link>
        </div>
      </motion.div>
      {/* <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.075, 0.082, 0.165, 1] }}
        exit={{ opacity: 0 }}
        src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/brittney-weng-CSquI0aw_Rg-unsplash.jpg?updatedAt=1702949499238"
        className="-z-10 w-full h-screen absolute object-cover"
        alt=""
      /> */}
      <motion.video
        className="-z-10 w-full h-screen absolute object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.075, 0.082, 0.165, 1] }}
        exit={{ opacity: 0 }}
        autoPlay
        loop
        muted
      >
        <source
          src="https://ik.imagekit.io/foogrshml/pexels-taryn-elliott-7301193%20(2160p).mp4?updatedAt=1703037608034"
          type="video/mp4"
        />
      </motion.video>

      {/* <img
        src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Rectangle_21-removebg-preview.png?updatedAt=1702549305364"
        className="absolute w-20 md:w-64 top-28 left-8"
        alt=""
      />
      <img
        src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Rectangle_21-removebg-preview.png?updatedAt=1702549305364"
        className="absolute w-20 md:w-64 bottom-8 right-8 scale-x-[-1]"
        alt=""
      /> */}
    </div>
  );
};

export default Hero;
