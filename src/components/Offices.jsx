import React from 'react';

const Offices = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className='py-16'>
        <h2 className='text-3xl md:text-5xl text-center'>
          Our <span className='italic'>Offices</span>
        </h2>
        <div className='bg-primary w-full h-[60vh] md:h-[70vh] rounded-2xl mt-8 md:mt-16'>
          <img
            src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/Cream%20Green%20Pink%20Interior%20Design%20How%20To%20Video.png?updatedAt=1702569548992'
            className='object-cover rounded-2xl w-full h-full'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Offices;
