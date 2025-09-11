import React from 'react'
import banner from '../assets/buyPng.png'
import arrow from '../assets/rotate arrow.png'
import house from '../assets/House.png'
import loca from '../assets/locate.png'
import down from '../assets/Down.png'
// import locate from '../assets/location.png'
// import search from '../assets/Group 1.png'

function Buy() {
  return (
    <>
      <div className="space-x-1 font-popi z-0 h-full">
        <div className="flex justify-evenly items-center ">
          <div className="flex flex-col text-white pl-25 justify-evenly w-7xl rounded-b-3xl top-100 h-48 z-1 absolute bg-[rgba(63,63,63,0.6)] border-none backdrop-blur-[0.1px]">
            <h1 className=' text-5xl font-popi z-10 font-bold'>Find Your Dream Home in One Click!</h1>
            <p className='  font-normal z-10 '>Discover, Buy, or Rent Verified Properties with Ease.</p>
          </div>
          <img src={banner} alt="banner" className='w-7xl relative top-22 object-cover bg-[position:1.77px_-33.803px] bg-no-repeat bg-[length:100%_167.9%] rounded-4xl' />
        </div>

        {/* <div className="flex justify-center z-10 items-center cursor-pointer relative rounded-xl left-62 -top-28 bg-white border-2 border-white w-100"> */}

        {/* <img src={locate} className='pr-4 pl-4' alt="locate" /> */}
        {/* <input type="text" className='border-white pl-4 pt-2 pb-2 pr-18' placeholder='Search location...' name="value" id="" /> */}
        {/* <img src={search} className='w-10 pl-2 pr-2' alt="group" /> */}
        {/* </div> */}

        {/* <p className='flex justify-center z-10 items-center cursor-pointer relative rounded-full -right-5/7 text-bulee border-2 border-bulee font-semibold -top-38 p-3 w-43 bg-white'>List Your Property</p> */}

        <div className='flex justify-between items-center w-5xl h-26 text-center z-100 shadow-[8px_12px_48.9px_3px_rgba(0,0,0,0.15)] border-none rounded-full relative left-60 top-12 bg-white'>
          <div className="flex justify-evenly w-5xl h-25 rounded-full grid-rows-4 shadow-2xl bg-white p-4 ">
            <span className='flex justify-evenly items-center cursor-pointer rounded-4xl w-60 h-14 border-2 border-gre '><img src={arrow} alt="rotate" />For Rent <img src={down} alt="down" /></span>
            <span className='flex justify-evenly items-center cursor-pointer rounded-4xl w-60 h-14 border-2 border-gre '><img src={house} alt="" />House <img src={down} alt="down" /></span>
            <span className='flex justify-evenly items-center cursor-pointer rounded-4xl w-60 h-14 border-2  border-gre '><img src={loca} alt="" />India <img src={down} alt="down" /></span>
            <button className='rounded-4xl w-60 h-14 bg-bulee text-white font-bold cursor-pointer'>Find Property</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buy