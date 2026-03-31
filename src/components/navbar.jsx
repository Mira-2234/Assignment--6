import React from 'react';
import card from '../assets/products/shopping-cart.png'

const navbar = () => {
    return (
          <div className="navbar bg-base-100 shadow-sm px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2 text-[#101727] font-semibold">
        <li className='cursor-pointer hover:text-purple-600'>Products</li>
      <li className='cursor-pointer hover:text-purple-600'>Features</li>
      <li className='cursor-pointer hover:text-purple-600'>Pricing</li>
      <li className='cursor-pointer hover:text-purple-600'>Testimonials</li>
      <li className='cursor-pointer hover:text-purple-600'>FAQ</li>
      </ul>
    </div>
    <a className="text-2xl font-black bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="text-[#101727] font-semibold menu menu-horizontal gap-5">
      <li className='cursor-pointer hover:text-purple-600'>Products</li>
      <li className='cursor-pointer hover:text-purple-600'>Features</li>
      <li className='cursor-pointer hover:text-purple-600'>Pricing</li>
      <li className='cursor-pointer hover:text-purple-600'>Testimonials</li>
      <li className='cursor-pointer hover:text-purple-600'>FAQ</li>
    </ul>
  </div>
  
  <div className="navbar-end gap-4">
    <img src={card} alt="" />

    <h2 className="font-semibold text-[#101727]">Login</h2>
    <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium hover:bg-purple-700 ">Get Started</button>
  </div>
</div>
    );
};

export default navbar;