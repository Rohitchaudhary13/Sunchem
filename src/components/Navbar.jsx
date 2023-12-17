import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="bg-transparent w-11/12 mx-auto">
        <div class="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/SUN-CHEM-INDIA-LOGO-FINAL.png?updatedAt=1702463627015" width={160} alt="" />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 md:p-0 md:flex-row md:mt-0 items-center">
              <li className="px-4">
                <Link
                  to="/"
                  class="block py-2 px-3  rounded md:bg-transparent  md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="px-4">
                <Link
                  to="about"
                  class="block py-2 px-3 rounded  md:border-0"
                >
                  About
                </Link>
              </li>
              {/* <li className="px-4">
                <Link
                  to="services"
                  class="block py-2 px-3 rounded  md:border-0"
                >
                  Services
                </Link>
              </li> */}
              <li className="px-4">
                <Link
                  to="/product-category"
                  class="block py-2 px-3 rounded  md:border-0"
                >
                  Products
                </Link>
              </li>
              {/* <li className="px-4">
                <Link
                  to="#"
                  class="block py-2 px-3 rounded  md:border-0"
                >
                  Clients
                </Link>
              </li> */}
              <li className="px-4 bg-primary border-solid transition-all duration-300 ease-in-out rounded-full border-dark hover:bg-secondary hover:text-primary">
                <Link
                  to="/contact"
                  class="block py-2 px-3 rounded  md:border-0"
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
