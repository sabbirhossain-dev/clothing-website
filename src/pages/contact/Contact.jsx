import React from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='mt-8'>
      <Title text1='CONTACT ' text2='US' />
      <div className='flex flex-col md:flex-row gap-10 justify-center items-center mb-28 py-10'>
        <div>
          <img src={assets.contact_img} alt='contactImg' className='w-full md:max-w-[480px]'/>
        </div>
        <div className='flex flex-col gap-6 justify-start'>
          <b className='text-xl text-gray-700'>Our Store</b>

          <p className='text-gray-500'>54709 Willms Station <br/>
          Suite 350, Washington, USA</p>

          <p className='text-gray-500'>Tel: (415) 555-0132 <br/>
          Email: admin@forever.com</p>

          <b className='text-xl text-gray-700'>Careers at Forever</b>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='flex justify-start w-40 mt-1'><Link className=' px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 border border-black'>Explore Jobs</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Contact
