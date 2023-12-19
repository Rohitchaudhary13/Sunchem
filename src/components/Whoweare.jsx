import React from 'react';
import { categories, clients } from './data';
import Marquee from './MyMarquee';
import { motion } from 'framer-motion';

const Whoweare = () => {
  return (
    <>
      <div className='h-auto md:h-screen w-11/12 mx-auto'>
        <div className='mt-16'>
          <h2 className='text-3xl md:text-5xl text-center mb-8'>
            Who <span className='italic'>we</span> are?
          </h2>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='md:w-1/2'>
              <p className='mb-4'>
                Sun Chem is a private-label manufacturing company with over 25+
                years of experience in creating one of the most advanced
                cosmetic formulations.
              </p>
              <motion.img
                whileHover={{
                  scale: 1.05,
                  transition:{ duration: 0.5, ease: 'anticipate' }
                }}
                whileTap={{ scale: 0.9 }}
                className='rounded-xl w-full md:w-auto'
                src='https://ik.imagekit.io/hfrhxebxv/Sunchem%20Assets/pexels-shvets-production-9774902.jpg?updatedAt=1702470071637'
                alt=''
              />
            </div>
            <div className='md:w-1/2'>
              <p className='mb-4'>
                Our passionate team of researchers and chemists help turn your
                vision into reality in this dynamic industry. As a private-label
                manufacturer, we have the knowledge and experience to develop
                unique, personalized products that reflect the essence of your
                brand.
              </p>
              <p className='mb-4'>
                From custom formulation development for skincare, haircare, and
                personal care to assistance with trademark registration,
                creative packaging design/production, and safe shipping and
                dispatch - we become your partner at every step.
              </p>
              <p className='mb-4'>
                We have created custom formulations for well-known companies
                like UrbanGabru, Bombae, Dabur, and more. At SunChem, we aim
                higher than just being a manufacturing partner. Our goal is to
                understand your brand’s ethos and values to create products that
                embody your mission.
              </p>
              <p className='mb-4'>
                We lend our expertise in research, testing, sourcing,
                compliance, and more so you can focus on what matters most:
                building connections with customers. When we collaborate,
                science and care intertwine to help pioneering brands make their
                inspiring mark.
              </p>
              <p className='mb-4'>
                Get in touch today to transform your ideas into quality
                products. With over 25 years of experience developing unique
                and diverse formulations, our knowledgeable team helps turn
                your vision into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Marquee />
    </>
  );
};

export default Whoweare;
