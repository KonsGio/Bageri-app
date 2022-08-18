import React from 'react';
import Delivery from '../img/delivery.png';

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center md:items-center'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
            <div className='w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl'>
              <img src={Delivery} alt='delivery' className='w-full h-full object-contain'/>
            </div>
        </div>
      </div>
      <p className='font-bold text-[2.5rem] tracking-wide text-headingColor'> 
        Απολαύστε άμεσα την <span className='text-orange-600 text-[3rem]'>Παραγγελία</span> σας!
      </p>
      <div className='py-2 flex-1'>

      </div>
    </div>
  )
}

export default MainContainer