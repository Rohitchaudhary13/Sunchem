import React from "react";
import { DarkButton } from "./Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen gap-4 w-full mx-auto flex flex-col justify-center items-center px-4">
      <motion.div
        animate={{ y: [500, 0], type: "spring", stiffness: 2000 }}
        transition={{ duration: 1, ease: [0.075, 0.082, 0.165, 1] }}
        className="mt-36 z-20 xl:w-3/4 text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl ">
          Blending <span className="italic">science</span> &{" "}
          <span className="italic">creativity</span>, for beautiful{" "}
          <span className="italic">skincare</span>
          <br /> since 1985.
        </h1>
        <div className="mt-8 z-20">
          <Link to="/product-category">
            <DarkButton name="Browse our products" />
          </Link>
        </div>
      </motion.div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.075, 0.082, 0.165, 1] }}
        exit={{ opacity: 0 }}
        src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/brittney-weng-CSquI0aw_Rg-unsplash.jpg?updatedAt=1702949499238"
        className="-z-10 w-full h-screen absolute object-cover"
        alt=""
      />
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
