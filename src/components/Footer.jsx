import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between gap-16 text-sm pt-20 md:pt-32 pb-10 border-b-[1px] border-gray-500'>
        <div className='w-full md:w-1/2'>
            <img src={assets.logo} alt='logo' className='w-32 mb-5' />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='flex justify-between gap-10 md:gap-28 lg:gap-36'>
            <div>
                <h4 className='text-xl font-medium mb-5 uppercase'>Company</h4>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <h4 className='text-xl font-medium mb-5 uppercase'>Get in Touch</h4>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-000-000-0000</li>
                    <li>greatstackdev@gmail.com</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <p className='py-5 text-sm font-medium text-center'>Copyright 2024@ Sabbir Hossain - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
