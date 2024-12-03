import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault();
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex flex-col w-3/4 sm:w-3/4 md:w-2/4 lg:w-1/3 mx-auto py-28'>
      <div className='flex justify-center items-center gap-2 pb-5'>
        <h2 className='text-[32px] font-medium font-serif tracking-wider '>Login</h2>
        <p className='w-10 h-[2px] bg-gray-900'></p>
      </div>


      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2'>

        <input className='px-3 py-2 border border-black w-full mb-3' type='email' placeholder='Email' required value={email} onChange={(e)=>{setEmail(e.target.value)}} />

        <input className='px-3 py-2 border border-black w-full' type='password' placeholder='Password' required value={password} onChange={(e)=>{setPassword(e.target.value)}} />


      <div className='flex justify-between gap-10 text-sm text-gray-600'>
        <Link><p className='hover:text-black transition duration-300'>Forgot your password?</p></Link>
        <Link to='/newuser'><p className='hover:text-black transition duration-300'>Create account</p></Link>
      </div>

      <div className='flex justify-center items-center'>
        <button type='submit' className='bg-black text-white px-8 py-2 font-sans mt-3 hover:bg-slate-800 transition-all duration-300'>Sign In</button>
      </div>
      </form>
    </div>
  )
}

export default LogIn
