import React, { useContext, useState , useEffect} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const {products} = useContext(ShopContext)
    const [latestProducts, setLatestProducts] =  useState([])

    useEffect(() => {
        setLatestProducts(products.slice(0,10))
    }, [])
    

  return (
    <div className='pt-12 pb-16'>
      <div className=''>
          <Title text1='LATEST' text2=' COLLECTION' />
          <p className='w-3/4 mx-auto text-sm md:text-base text-gray-700 text-center pb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      </div>

    {/* items rendering */}

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
      {
        latestProducts.map((item, index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
      }
    </div>

    </div>
  )
}

export default LatestCollection
