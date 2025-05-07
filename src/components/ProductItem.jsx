import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, name, image, price}) => {
    const {currency} = useContext(ShopContext)

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/products/${id}`}>
        <div className='overflow-hidden'>
            <img src={image[0]} alt='image' className='h-auto hover:scale-110 transition ease-in-out duration-300' />
            <p className='pt-3 pb-1 text-xs sm:text-sm md:text-base'>{name}</p>
            <p className='text-base font-semibold'>{currency}{price}</p>
        </div>
      
    </Link>
  )
}

export default ProductItem
