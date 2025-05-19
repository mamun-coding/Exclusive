import React from 'react'
import { Link } from 'react-router'

const SignUP = () => {
  return (
    <div className='grid grid-cols-2 gap-[129px] mb-[140px] mt-[60px]'>
      <div className='max-w-[805px]'>
        <img src="/mobile.png" alt="" />
      </div>
      <div>
   <div className="bg-white w-full max-w-[371px] p-8 ">
  <h1 className="text-[36px] leading-[30px]  font-medium mb-[24px]">Create an account</h1>
  <p className="text-[16px] leading-[24px] text-black mb-[48px]">Enter your details below</p>
  <form className="space-y-4">
    <input type="text" placeholder="Name" className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2" />
    <input type="text" placeholder="Email or Phone Number" className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2" />
    <input type="password" placeholder="Password" className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2" />
    <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition">
      Create Account
    </button>
    <div className="flex items-center justify-center border mt-2 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition">
      <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
      <span className="text-sm font-medium">Sign up with Google</span>
    </div>
  </form>
  <p className="text-center text-sm text-gray-600 mt-6">
    Already have account? <Link to="/login" className="text-black font-medium hover:underline">Login</Link>
     
  </p>
</div>

      </div>
    </div>
  )
}

export default SignUP
