import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "px-4 max-[600px]:m-4 max-[600px]:text-lg decoration-primary underline underline-offset-8"
      : "px-4 max-[600px]:m-4 max-[600px]:text-lg";
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <nav className=" bg-dark text-secondary absolute z-50 w-full px-4">
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none "
            aria-controls="navbar-default"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            {isNavbarOpen ? (
              // Icon when the navbar is open (closing icon)
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {/* Replace this with the closing icon */}
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Default hamburger icon
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
            )}
          </button>
          <div
            className={`${
              isNavbarOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
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
