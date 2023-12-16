import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
      <div className="bg-secondary">
        <div className="w-11/12 h-72 mx-auto grid justify-between items-center sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img
              src="https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/SUN-CHEM-INDIA-LOGO-FINAL.png?updatedAt=1702463627015"
              alt="logo"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div className=''>
              <h2 className='font-medium font-poppins text-lg'>Resources</h2>
              <div className='opacity-50 flex flex-col'>
                <Link to="about">About</Link>
                <Link to="products">Products</Link>
                <Link to="clients">Clients</Link>
              </div>
            </div>
            <div>
              <h2 className='font-medium font-poppins text-lg'>Follow us</h2>
              <div className='opacity-50 flex flex-col'>
                <Link to="#">Github</Link>
                <Link to="#">Discord</Link>
              </div>
            </div>
            <div>
              <h2 className='font-medium font-poppins text-lg'>Legal</h2>
              <div className='opacity-50 flex flex-col'>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-11/12 mx-auto p-4 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by=" Sun Chem India Pvt Ltd™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* <Footer.Icon href="#" icon={BsFacebook} /> */}
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            {/* <Footer.Icon href="#" icon={BsGithub} /> */}
            {/* <Footer.Icon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
  );
}


export default footer;