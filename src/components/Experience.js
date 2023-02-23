import React from 'react';

import Img1 from '../assets/img/exp-img1.png';
import Img2 from '../assets/img/exp-img2.png';
import Headsets from './Headsets';

const Experience = () => {
  return (
    <section className='mb-12 lg:mb-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
          <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
            <div
              className='self-start'
              data-aos='fade-down'
              data-aos-offset='400'
            >
              <img src={Img1} alt='' />
            </div>
            <div className='self-end' data-aos='fade-up'>
              <img src={Img2} alt='' />
            </div>
          </div>
          <div
            className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <h2 className='text-3xl font-bold mb-6'>
              A Brand New Experience with Augmented Reality
            </h2>
            <p className='font-secondary mb-6'>
            Benefits our Augmented Glasses provide
            <ul>
              <li className='text-lg'>
                <a href='#'>Best Visual Fidelity</a>
              </li>
              <li className='text-lg'>
                <a href='#'>Best Audio Quality</a>
              </li>
              <li className='text-lg'>
                <a href='#'>Best Comfort</a>
              </li>
              <li className='text-lg'>
                <a href='#'>Best Price</a>
              </li>       
            </ul>
            </p>
            <button className='btn'>BUY NOW 50% OFF</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;