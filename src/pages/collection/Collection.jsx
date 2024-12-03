import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/Title'
import ProductItem from '../../components/ProductItem'
import { shopContext } from '../../context/shopContext'

const Collection = () => {

  const [showFilter, setShowFilter] = useState(false)
  const [showProducts, setShowProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortTypes, setSortTypes] = useState("relavent")

  const {products,search,showSearch} = useContext(shopContext)


  // toggle category

  const toggleCategory =(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev =>[...prev, e.target.value])
    }
  }


  // toggle subcategory

  const toggleSubCategory =(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setSubCategory(prev =>[...prev, e.target.value])
    }
  }



  // apply filter

  const applyCategory =()=>{
    let productsCopy = products.slice()

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setShowProducts(productsCopy)
  }


  // products sort 

  const sortProducts =()=>{
    let showProductsCopy = showProducts.slice();

    switch (sortTypes) {
      case "low-high":
        setShowProducts(showProductsCopy.sort((a,b)=>(a.price - b.price)))
        break;
      case "high-low":
        setShowProducts(showProductsCopy.sort((a,b)=>(b.price - a.price)))
        break;
      default:
        applyCategory();
        break;
    }
  }




  // use effects

  useEffect(()=>{
    applyCategory()
  },[category,subCategory, search, showSearch])
  
  useEffect(()=>{
    sortProducts();
  },[sortTypes])



  return (
    <>
      <div className='flex flex-col md:flex-row gap-2 md:gap-10 mt-10'>

      {/* Left part / Filter part */}
        <div className='min-w-60 mb-7'>
          <p onClick={()=>{setShowFilter(!showFilter)}} className='text-xl my-2 flex items-center gap-2 cursor-pointer font-medium tracking-wider'>FILTERS
          <img className={`w-2 block sm:hidden ${showFilter ? 'rotate-90':''}`} src={assets.dropdown_icon} alt='icon' /></p>
          

          {/* Category */}
          <div className={`border border-gray-300 py-4 pl-5 mt-5 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='text-sm uppercase mb-3 font-medium'>Categories</p>
            <div className='flex flex-col gap-2 text-gray-600'>
              <p className='flex items-center gap-2'><input type='checkbox' value={'Men'} className='cursor-pointer' onChange={toggleCategory}/>Men</p>
              <p className='flex items-center gap-2'><input type='checkbox' value={'Women'} className='cursor-pointer' onChange={toggleCategory}/>Women</p>
              <p className='flex items-center gap-2'><input type='checkbox' value={'Kids'} className='cursor-pointer' onChange={toggleCategory}/>Kids</p>
            </div>
          </div>

            {/* Sub Category */}
            <div className={`border border-gray-300 py-4 pl-5 mt-5 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='text-sm uppercase mb-3 font-medium'>Type</p>
            <div className='flex flex-col gap-2 text-gray-600'>
              <p className='flex items-center gap-2'><input type='checkbox' value={'Topwear'} className='cursor-pointer' onChange={toggleSubCategory}/>Topwear</p>
              <p className='flex items-center gap-2'><input type='checkbox' value={'Bottomwear'} className='cursor-pointer' onChange={toggleSubCategory}/>Bottomwear</p>
              <p className='flex items-center gap-2'><input type='checkbox' value={'Winterwear'} className='cursor-pointer' onChange={toggleSubCategory}/>winterwear</p>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className='flex-1'>
          <div className='flex md:flex-col lg:flex-row justify-between items-center'>
            <Title text1='All ' text2='COLLECTIONS' />
            <select onChange={(e)=>{setSortTypes(e.target.value)}} className='border border-gray-300 text-sm py-2 md:px-2 px-4'>
              <option value='relavent'>Sort by: Relavent</option>
              <option value='low-high'>Sort by: Low to High</option>
              <option value='high-low'>Sort by: High to Low</option>
            </select>
          </div>



        {/* product maping */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
          {
            showProducts.map((item, index)=>(
              <ProductItem key={index} name={item.name} id={item._id} image={item.image} price={item.price} />
            ))
            
          }
        </div>

        </div>


      </div>

    </>
  )
}

export default Collection
