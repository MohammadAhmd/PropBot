import React from 'react'
import banner from '../assets/buyPng.png'
import arrow from '../assets/rotate arrow.png'
import house from '../assets/House.png'
import loca from '../assets/locate.png'
import down from '../assets/Down.png'
import tilt from '../assets/TiltImg.png'
import rect7 from '../assets/Rectangle-7.png'
import rect8 from '../assets/Rectangle-26.png'
import locate from '../assets/SeconLoca.png'
import sav from '../assets/save.png'

function Buy() {

  // const data 

  return (
    <>

      <div className="space-x-1 font-popi z-0 h-full">
        {/* top head */}
        <div className="flex justify-evenly items-center ">
          <div className="flex flex-col text-white pl-25 justify-evenly w-7xl rounded-b-3xl top-100 h-48 z-1 absolute bg-[rgba(63,63,63,0.6)] border-none backdrop-blur-[0.1px]">
            <h1 className=' text-5xl font-popi z-10 font-bold'>Find Your Dream Home in One Click!</h1>
            <p className='  font-normal z-10 '>Discover, Buy, or Rent Verified Properties with Ease.</p>
          </div>
          <img src={banner} alt="banner" className='w-7xl relative top-22 object-cover bg-[position:1.77px_-33.803px] bg-no-repeat bg-[length:100%_167.9%] rounded-4xl' />
        </div>
        {/* Pngs */}
        <div className='flex justify-between items-center w-5xl h-26 text-center z-100 shadow-[8px_12px_48.9px_3px_rgba(0,0,0,0.15)] border-none rounded-full relative left-60 top-12 bg-white'>
          <div className="flex justify-evenly w-5xl h-25 rounded-full grid-rows-4 shadow-2xl bg-white p-4 ">
            <span className='flex justify-evenly items-center cursor-pointer rounded-4xl w-60 h-14 border-2 border-gre '><img src={arrow} alt="rotate" />For Rent <img src={down} alt="down" /></span>
            <span className='flex justify-evenly items-center cursor-pointer rounded-4xl w-60 h-14 border-2 border-gre '><img src={house} alt="" />House <img src={down} alt="down" /></span>
            <span className='flex justify-evenly items-center cursor-pointer rounded-4xl w-60 h-14 border-2  border-gre '><img src={loca} alt="" />India <img src={down} alt="down" /></span>
            <button className='rounded-4xl w-60 h-14 bg-bulee text-white font-bold cursor-pointer'>Find Property</button>
          </div>
        </div>

        {/* fetching data  */}
        <div className="flex flex-col justify-between w-full h-180 mt-22 border-2 pb-8 border-black">
          <div className="flex justify-between items-center mt-5 pr-10 pl-10 ">
            <h1 className='font-bold text-bulee text-4xl'>Featured Property</h1>
            <span className='flex justify-center cursor-pointer py-[0.625rem] px-[1.25rem] text-bulee border-2 border-bulee rounded-full' >See 268 New Projects <img src={tilt} alt="" /></span>
          </div>

          <div className="flex justify-evenly items-center">
            <img src={rect7} alt="" />
            <img src={rect8} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center w-145 h-50 bg-white shadow-2xl relative left-26 -top-30 pt-4 pl-6 rounded-3xl z-10 ">
          <img src={locate} alt="" />
          <p>Green Villa, Uttar Pradesh</p>
          <img src={sav} alt="" />
          <br />
          <span>Spacious 3BHK apartment in a prime location with modern amenities.</span>
          <hr className='w-full' />
        </div>



      </div>
    </>
  )
}

export default Buy