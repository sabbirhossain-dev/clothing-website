import React from 'react'
import { assets } from '../../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row border border-gray-500'>
      <div className='w-full md:w-1/2 flex justify-center items-center py-10 text-[#414141]'>
       <div className='flex flex-col'>
            <div className='flex items-center gap-2 font-semibold'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='text-sm md:text-base'>OUR BESTSELLERS</p>
            </div>
            <h2 className='text-3xl md:text-5xl pt-3 pb-5 leading-relaxed'>Latest Arrivals</h2>
            <div className='flex items-center gap-2'>
            <button className='font-bold text-sm md:text-base'>SHOP NOW</button>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
       </div>
      </div>
      <div className='w-full md:w-1/2'>
        <img src={assets.hero_img} />
      </div>
    </div>
  )
}

export default Banner
