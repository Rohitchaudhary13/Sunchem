import React from "react";

const Offices = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="py-16">
        <h2 className="text-3xl md:text-5xl text-center">
          Our <span className="italic">Head Office</span>
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1239710975224!2d72.85051177463862!3d19.146049949770845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b750461e5157%3A0xe1936cc05d999ed0!2sGuru%20Gobind%20Singh%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1702811254300!5m2!1sen!2sin"
          className="w-full mt-8 h-96 border-none rounded-xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>        
      </div>
    </div>
  );
};

export default Offices;
