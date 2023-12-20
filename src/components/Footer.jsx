import { Footer } from 'flowbite-react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FiArrowUpCircle } from "react-icons/fi";

const FooterComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="relative bg-secondary pt-4">
      <div onClick={scrollToTop} className='cursor-pointer text-5xl absolute right-4' style={{bottom:'22%'}}>
        <FiArrowUpCircle /> 
      </div>
      <div className="w-11/12 mx-auto grid justify-between items-center sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className="my-8 sm:mt-0">
          <img
            src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/SUN-CHEM-INDIA-LOGO-FINAL.png?updatedAt=1702463627015"
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-1 pb-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div className="mb-6 sm:mb-0">
            <h2 className="mb-2 font-medium font-poppins text-lg">Company</h2>
            <div className="opacity-50 flex flex-col">
              <Link className="py-2" to="/about">About</Link>
              <Link className="py-2" to="/product-category">Products</Link>
              <Link className="py-2" to="/contact">Contact</Link>
            </div>
          </div>
          <div className="mb-6 sm:mb-0">
            <h2 className="mb-2 font-medium font-poppins text-lg">Follow us</h2>
            <div className="opacity-50 flex flex-col">
              <Link className="py-2" to="#">Linkedin</Link>
              <Link className="py-2" to="#">Instagram</Link>
            </div>
          </div>
          <div className="mb-6 sm:mb-0">
            <h2 className="mb-2 font-medium font-poppins text-lg">Legal</h2>
            <div className="opacity-50 flex flex-col">
              <Link className="py-2" to="#">Privacy Policy</Link>
              <Link className="py-2" to="#">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300" />
      <div className="w-11/12 mx-auto p-4 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <Footer.Copyright
          href="#"
          by=" Sun Chem India Pvt Ltd™"
          year={new Date().getFullYear()}
          className="text-center sm:text-left"
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
