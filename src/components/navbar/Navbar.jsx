import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { FaBars } from 'react-icons/fa';
import { ShopContext } from '../../context/shopContext';
import Collection from '../../pages/collection/Collection';


const Navbar = () => {
    const {setShowSearch} = useContext(ShopContext)
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='flex justify-between items-center py-5 font-medium w-full h-20  bg-white sticky z-50 border-b'>
        <div>
        <Link to='/'><img src={assets.logo} alt='logo' className='w-36'/></Link>
        </div>
    <div>
    <ul className='hidden md:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <span>HOME</span>
            <hr className='w-2/4 h-[2px] bg-black hidden'></hr>
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
        <span>COLLECTION</span>
        <hr className='w-2/4 h-[2px] bg-black hidden'></hr>
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
        <span>ABOUT</span>
        <hr className='w-2/4 h-[2px] bg-black hidden'></hr>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
        <span>CONTACT</span>
        <hr className='w-2/4 h-[2px] bg-black hidden'></hr>
        </NavLink>
    </ul>
    </div>

    <div className='flex items-center gap-6'>
        <Link to='/collection'>
        <img onClick={()=>{setShowSearch(true)}} src={assets.search_icon} alt='search-icon' className='w-5 cursor-pointer'/>
        </Link>
        <div className='group relative'>
                
                <img src={assets.profile_icon} className='w-5 cursor-pointer'/>
                
            <div className='group-hover:block hidden dropdown-menu absolute top-1 -right-16 w-40 text-center p-5'>
            <div className='flex flex-col gap-4 text-gray-500 bg-white pl-4 pr-3 py-3'>
                
                <Link to='/login'><p className='cursor-pointer hover:text-black transition duration-150'>LogIn</p></Link>
                <p className='cursor-pointer hover:text-black transition duration-150'>LogOut</p>
            </div>
            </div>
        </div>
            <Link className='relative inline-flex'>
                <img src={assets.cart_icon} alt='cart-icon' className='w-5 min-w-5 cursor-pointer' />
                <span className='absolute bottom-[-5px] right-[-5px] bg-black text-white text-[8px] aspect-square w-4 rounded-full text-center leading-4'>3</span>
            </Link>
            <div className='md:hidden ml-6 flex items-center'>
                <button onClick={()=>{setToggleMenu(!toggleMenu)}}>
                    {toggleMenu? <RxCross1 className='w-7 h-7' /> : <FaBars className='w-7 h-7' />}
                </button>
                {toggleMenu && <div className='w-full bg-gray-50 absolute top-20 left-0 text-center py-14'>
                    <ul className='flex flex-col gap-7 text-gray-900'>
                        <Link to='/' className='hover:text-black duration-300' onClick={()=>{setToggleMenu(false)}}>HOME</Link>
                        <Link to='/collection' className='hover:text-black duration-300' onClick={()=>{setToggleMenu(false)}}>COLLECTION</Link>
                        <Link to='/about' className='hover:text-black duration-300' onClick={()=>{setToggleMenu(false)}}>ABOUT</Link>
                        <Link to='/contact' className='hover:text-black duration-300' onClick={()=>{setToggleMenu(false)}}>CONTACT</Link>
                    </ul>
                </div>}
            </div>
    </div>


    </div>
  )
}

export default Navbar
