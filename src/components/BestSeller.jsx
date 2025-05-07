import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

    const {products} = useContext(ShopContext)

    const [bestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller))
        setBestSeller(bestProduct.slice(0,5))
    },[])

  return (
    <div className='pb-40'>
      <div>
        <Title text1='BEST ' text2='SELLERS' />
        <p className='w-3/4 mx-auto text-sm md:text-base text-gray-700 text-center pb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      </div>

        {/* items rendering */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
        {
            bestSeller.map((item, index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
        }
      </div>
     
    </div>
  )
}

export default BestSeller
