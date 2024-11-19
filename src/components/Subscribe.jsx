import React, { useState } from 'react'


const Subscribe = () => {

    const [email, setEmail] = useState('')
    const [successMsg, setSuccessMsg] = useState("")
    const [errorMsg, seterrorMsg] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(email===""){
            seterrorMsg("Requuired")
        }else{
        console.log(email)
        setEmail("")
        setSuccessMsg("Email Sent Successfully !")
        }
    }
  return (
    <div className='text-center pb-5'>
      <h3 className='text-2xl font-medium text-gray-900'>Subscribe now & get 20% off</h3>
      <p className='text-gray-500 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type='email' placeholder='Enter Your Email' required className='w-full sm:flex-1 outline-none' onChange={(e)=>(setEmail(e.target.value))} value={email}/>
        <button type='submit' className='bg-black text-white text-sm px-10 py-4'>Subscribe</button>
      </form>
        {successMsg && <p className=' flex items-center justify-center mx-auto text-center text-green-900 rounded-md animate-bounce'>Email Sent Successfully !</p> }
    </div>
  )
}

export default Subscribe
