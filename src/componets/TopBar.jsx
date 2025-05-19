import React from 'react'
import { Link } from 'react-router'

const TopBar = () => {
  return (
    <div className='bg-black'>
      <div className='container'>
      <div className='grid grid-cols-[1fr_200px] items-center gap-[230px]'>
        <p className='text-[#FAFAFA]  text-center text-[14px] leading-[21px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
       <Link to="/"> ShopNow</Link></p>
        <select className='text-[#FAFAFA]'>
            <option value="english" className='text-black'>English</option>
            <option value="Bangla" className='text-black'>Bangla</option>
        </select>
      </div>
      </div>
    </div>
  )
}

export default TopBar
