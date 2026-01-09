import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import { ProductDatacontext } from '../context/ProductContext';

const Navbar = () => {
  const [input, setInput] = useState(false)
  const {count} = useContext(ProductDatacontext)
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'>Homepage</NavLink></li>
        <li><NavLink to='/product'>Product</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">shop_cart</a>
  </div>
  <div className="navbar-end">
    {input && <input type="text" className='border border-white rounded py-2 px-5 ' placeholder='search...'/>}
    <button onClick={()=> setInput(prev=> !prev)} className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <BsCart4 className='w-5 h-5'/>
        <span className="badge badge-xs badge-primary indicator-item">{count}</span>
      </div>
    </button>
  </div>
</div>
    </div>
  )
}

export default Navbar