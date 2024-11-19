import React from 'react'
import Title from '../../components/Title'

const AboutCard = () => {
  return (
    <div className='mb-20'>
      <div className='flex justify-start'>
        <Title text1='WHY' text2= ' CHOOSE US' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-20 text-sm'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <h5 className='font-bold'>Quality Assurance:</h5>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <h5 className='font-bold'>Convenience:</h5>
            <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <h5 className='font-bold'>Exceptional Customer Service:</h5>
            <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
