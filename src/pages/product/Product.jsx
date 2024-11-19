import React, { useContext, useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../context/shopContext'
import { assets } from '../../assets/assets'
import Related from '../../components/Related'

const Product = () => {

    const {productId} = useParams()
    const {products} = useContext(ShopContext)
    const {currency} = useContext(ShopContext)
    const [productsData, setProductsData] = useState(false)
    const [image, setImage] = useState('')
    const [sizes , setSizes] = useState('')
    const [description, setDescription] = useState(true)
    const [review, setReview] = useState(false)

    const fetchData = async ()=>{
        products.map((item)=>{
            if(item._id === productId){
                setProductsData(item)
                setImage(item.image[0])
            }
        })
    }

    useEffect(() => {
        fetchData();
    }, [productId])
    


  return  ( productsData ?


    <div className=''>

    <div className='flex pt-10 gap-12'>
        {/* images */}
    <div className='w-full sm:w-1/2 flex flex-col sm:flex-row gap-12'>
        <div className='flex flex-col-reverse gap-3 sm:flex-row'>
           <div className='flex sm:flex-col justify-between sm:justify-normal overflow-x-auto sm:w-[24%] w-full '>
           {productsData.image.map((item , index)=>(
                <img onClick={()=>{setImage(item)}} key={index} src={item} alt="images" className='w-[24%] sm:w-full flex-shrink-0 sm:mb-3 cursor-pointer' />
            ))}
           </div>
        <div className='w-full sm:w-70%'>
            <img src={image} alt='image' className='w-full h-[300px] sm:h-[400px] md:h-[500px]' />
        </div>
        </div>
    </div>


    {/* text */}
    <div className='w-full sm:w-1/2' >
        <h2 className='font-medium text-2xl mt-2'>{productsData.name}</h2>
        <div className='flex gap-1 items-center mt-2'>
            <img src={assets.star_icon} className='w-3' />
            <img src={assets.star_icon} className='w-3' />
            <img src={assets.star_icon} className='w-3' />
            <img src={assets.star_icon} className='w-3' />
            <img src={assets.star_dull_icon} className='w-3' />
            <p className='ml-2'>(122)</p>
        </div>
        <p className='text-3xl font-medium py-5'>{currency}{productsData.price}</p>
        <p className='text-gray-500 md:w-4/5'>{productsData.description}</p>
        <div className='flex flex-col gap-4 my-8'>
            <p className='font-medium'>Select Size</p>
            <div className='flex gap-2'>
                {productsData.sizes.map((item, index)=>(
                    <button onClick={()=>{setSizes(item)}} key={index} className={`border p-2 px-4 bg-gray-100 ${item === sizes ? 'border-orange-300':'' }`}>{item}</button>
                ))}
            </div>
        </div>
        <button className='bg-black text-white px-8 py-3 active:bg-gray-600'>ADD TO CART</button>
        <hr className='mt-8 sm:w-4/5'></hr>
        <div className='flex flex-col gap-1 text-sm mt-5'>
            <p className='text-gray-500'>100% Original product.</p>
            <p className='text-gray-500'>Cash on delivery is available on this product.</p>
            <p className='text-gray-500'>Easy return and exchange policy within 7 days.</p>
        </div>
    </div>
    </div>


{/* description text */}

    <div className='mt-20'>
        <div className='flex'>
            <h4 onClick={()=>{
                setDescription(true)
                setReview(false)
            }} className={`px-3 py-3 border text-sm cursor-pointer ${description?'font-bold': ''}`}>Description</h4>

            <h4 onClick={()=>{
                setDescription(false)
                setReview(true)
            }} className={`px-3 py-3 border text-sm cursor-pointer ${review?'font-bold': ''}`}>Reviews (122)</h4>

        </div>

        {description && <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-600 border'>
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>}

        {review &&  <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-600 border'>
            
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information. Each product usually has its own dedicated page with relevant information.</p>
        </div>}
    </div>

    <div>
        <Related category={productsData.category} subCategory={productsData.subCategory} />
    </div>
      

    
    </div> : <div><h3 className='text-2xl text-red-700 font-medium flex justify-center items-center py-20'>No product Found ! </h3></div>
  )
}

export default Product









