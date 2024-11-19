import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='flex justify-center items-center gap-2 pb-3 text-2xl'>
      <h2 className='text-gray-500 font-semibold'>{text1}<span className='text-gray-800 font-medium'>{text2}</span></h2>
      <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title
