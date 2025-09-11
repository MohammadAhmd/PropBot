import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import logo from '../assets/Vector.png'
import arro from '../assets/arrow-right.png'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navi = useNavigate()
  

  return (
    <>
      <div className="flex justify-around font-popi h-20 fixed w-full z-1000 items-center p-4 bg-white text-black ">
        <div className="flex items-center justify-between md:w-40  cursor-pointer gap-2.5 p-4">
          <Link to='/'><img src={logo} alt="logo" className='' /></Link><h1 className='font-bold text-2xl' >PropBot</h1>
        </div>

        <div className="flex justify-around font-popi md:w-lg p-8 ">
          <Link to='/' className='font-medium hover:text-blue-600 hover:border-b-1 hover:border-blue-600'>Home</Link>
          <Link to='/buy' className='font-medium hover:text-blue-600 hover:border-b-1 hover:border-blue-600'>Buy</Link>
          <Link to='/rent' className='font-medium hover:text-blue-600 hover:border-b-1 hover:border-blue-600'>Rent</Link>
          <Link to='/sell' className='font-medium hover:text-blue-600 hover:border-b-1 hover:border-blue-600'>Sell</Link>
          <Link to='/about' className='font-medium hover:text-blue-600 hover:border-b-1 hover:border-blue-600'>About us</Link>
          <Link to='/contact' className='font-medium hover:text-blue-600 hover:border-b-1 hover:border-blue-600'>Contact us</Link>
        </div>

        <div className="flex justify-evenly items-center pt-2.5 pb-2.5 pl-5 pr-5  w-52 h-12 rounded-3xl cursor-pointer bg-bulee text-white">
          <button className='cursor-pointer' onClick={() => navi('/login')}>Login / Register </button><img onClick={() => navi('/login')} src={arro} alt="arrow" className='w-7 h-7' />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar