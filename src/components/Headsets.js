import React from 'react';

// import images
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';

const Headsets = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        <h2
          className='text-3xl font-bold mb-6'
          data-aos='fade-down'
          data-aos-offset='300'
        >
          Augmented Reality Headsets
        </h2>
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1000'
          >
            <img src={Headset1} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Digital and Physical combined</h4>
              <p>
              <li className='text-lg'>
                  <a href='#'></a>
                  </li>
                
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1300'
          >
            <img src={Headset2} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Meta Eye</h4>
              <p>
                The Meta Eye is a mixed reality headset developed by Meta. It was announced on May 19, 2022, and is expected to be released in 2025.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1600'
          >
            <img src={Headset3} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>HoloLens 3</h4>
              <p>
                The HoloLens 3 is a mixed reality headset developed by Microsoft. It is the third generation of the HoloLens series. It was announced on May 19, 2022, and is expected to be released in 2025.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1900'
          >
            <img src={Headset4} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Apple iEye</h4>
              <p>
                The Apple iEye is a rumored augmented reality headset that is in development by Apple. It is expected to be released in 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;