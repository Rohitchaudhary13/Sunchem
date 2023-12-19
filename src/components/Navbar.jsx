import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "px-4 max-[600px]:m-4 max-[600px]:text-lg bg-primary text-black border-solid border-dark hover:bg-secondary transition-all duration-300 ease-in-out rounded-full"
      : "px-4 max-[600px]:m-4 max-[600px]:text-lg";
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <nav className=" bg-dark text-secondary absolute w-full px-4">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/SUN-CHEM-INDIA-LOGO-FINAL_CC_white.png?updatedAt=1702455762523"
              className="p-2"
              width={160}
              alt=""
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2"
            aria-controls="navbar-default"
            aria-expanded={isNavbarOpen ? 'true' : 'false'}
            onClick={toggleNavbar}  
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${isNavbarOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="flex flex-col p-4 md:p-0 md:flex-row md:mt-0 items-center">
              <li className={getNavLinkClass("/")}>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded  md:border-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className={getNavLinkClass("/about")}>
                <Link
                  to="/about"
                  className="block py-2 px-3 rounded  md:border-0"
                >
                  About
                </Link>
              </li>              
              <li className={getNavLinkClass("/product-category")}>
                <Link
                  to="/product-category"
                  className="block py-2 px-3 rounded  md:border-0"
                >
                  Products
                </Link>
              </li>              
              <li className={getNavLinkClass("/contact")}>
                <Link
                  to="/contact"
                  className="block py-2 px-3 rounded  md:border-0"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
