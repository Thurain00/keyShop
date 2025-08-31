import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <div className='bg-[#1E1D1E] p-5 text-[#F9F6F4] flex gap-10'>
      <h1 className=' text-3xl font-extrabold italic'>KeyShop</h1>
      <div className='flex gap-10'>
           <ul className='flex gap-8'>
         <NavLink to='home'><li>Home</li></NavLink>
         <NavLink to='/'><li>Products</li></NavLink>
          <NavLink to='/'> <li>About Us</li></NavLink>
           <NavLink to='/'><li>Contact</li></NavLink>
      
     
      
      </ul>
     
      <input type="text" placeholder='Search' className='bg-[#F9F6F4] rounded-lg text-gray-500 px-3'/>
      </div>
    
    </div>
  )
}

export default Navbar