import React, { useContext, useState, useEffect } from 'react'
import { RxCross1 } from "react-icons/rx";
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom';


const SearchBox = () => {

    const {search , setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const [show, setShow] = useState(false)

    const location = useLocation()

    useEffect(() => {
      if(location.pathname.includes('collection')){
        setShow(true)
      }else{
        setShow(false)
      }

    }, [location])
    



  return showSearch && show ? (
    <div className='flex px-10 gap-5 justify-center items-center bg-gray-50 px-auto py-7 border-b'>
      <div className='w-full md:w-3/5 inline-flex justify-center items-center  py-2 px-5 rounded-lg border border-gray-400' >
        <input onChange={(e)=>{setSearch(e.target.value)}} value={search} type='text' placeholder='Search' className='w-full outline-none bg-transparent' />
        <img src={assets.search_icon} className='w-4 cursor-pointer' />
      </div>
      <RxCross1 onClick={()=>{setShowSearch(false)}} className='size-[22px] cursor-pointer text-gray-500 hover:text-red-600 hover:scale-110 transition-all duration-200' />
    </div> 
  )
  : null
}

export default SearchBox
