import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div className='flex flex-col  sm:flex-row justify-between gap-16 sm:gap-3 text-center text-xs sm:text-sm md:text-base text-gray-700 mb-32'>
      <div className='w-full md:w-1/3'>
        <img src={assets.exchange_icon} alt='exchangeIcon' className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>

      <div className='w-full md:w-1/3'>
        <img src={assets.quality_icon} alt='exchangeIcon' className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>

      <div className='w-full md:w-1/3'>
        <img src={assets.support_img} alt='exchangeIcon' className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>we provide 24/7 customer support</p>
      </div>

    </div>
  )
}

export default Policy
