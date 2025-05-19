import React from 'react'
import { Link } from 'react-router'
const Login = () => {
  return (
    <div className='mb-[140px] mt-[60px]'>
        <div className='grid grid-cols-2 gap-[129px]'>
      <div className='max-w-[805px]'>
        <img src="/mobile.png" alt="" />
      </div>
      <div>
   <div className="bg-white w-full max-w-[371px] p-8 ">
  <h1 className="text-[36px] leading-[30px]  font-medium mb-[24px]">Log in to Exclusive</h1>
  <p className="text-[16px] leading-[24px] text-black mb-[48px]">Enter your details below</p>
  <form className="space-y-4">
    <input type="text" placeholder="Email or Phone Number" className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2" />
    <input type="password" placeholder="Password" className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2" />
   <div className='flex items-center gap-[87px]'>
   <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition">
      Login
    </button>
     <Link to="/" className="text-red-400 text-[16px] leading-[24px]">Forget Password?</Link>
   </div>
     
  </form>
   
</div>

      </div>
    </div>
    </div>
  )
}

export default Login
