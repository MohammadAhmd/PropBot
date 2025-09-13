import React, { useEffect, useState } from 'react'
import banner from '../assets/banner.jpg'
import arrow from '../assets/rotate arrow.png'
import house from '../assets/House.png'
import loca from '../assets/locate.png'
import down from '../assets/Down.png'
import locate from '../assets/location.png'
import search from '../assets/Group 1.png'
import imgs1 from '../assets/sales.png'
import imgs2 from '../assets/key.png'
import imgs3 from '../assets/mic.png'
import imgs4 from '../assets/lock.png'
import tilt from '../assets/TiltImg.png'
import rec7 from '../assets/Rectangle7.png'
import rec8 from '../assets/Rectangle8.png'
import rec9 from '../assets/Rectangle9.png'
import rec10 from '../assets/Rectangle10.png'
import tess1 from '../assets/Rectangle19.png'
import tess2 from '../assets/Rectangle20.png'
import money from '../assets/money.png'
import trust from '../assets/trusted.png'
import map from '../assets/et_map.png'

// import { BarChart3, BarChart, Search, Shield, } from "lucide-react";

function Home() {

  const [properties, setProperties] = useState([]);




  const features = [
    {
      title: "Buy & Sell Properties",
      description: "Find verified homes for sale or list your property with ease.",
      icon: <img src={imgs1} alt="" />
    },
    {
      title: "Find Rental Homes",
      description: "Browse through thousands of rental options suited to your needs.",
      icon: <img src={imgs2} alt="" />
    },
    {
      title: "Smart AI Property Search",
      description: "Get instant recommendations based on your budget & location.",
      icon: <img src={imgs3} alt="" />,
    },
    {
      title: "Safe & Secure Transactions",
      description: "Verified listings & secure deals to ensure a smooth experience.",
      icon: <img src={imgs4} alt="" />
    },
  ];



  return (
    <>
      <div className="space-x-1 font-popi z-0 h-full">
        {/* Banner */}
        <div className="flex justify-evenly items-center ">
          <h1 className='absolute top-44 text-5xl font-popi z-10 text-white font-bold'>Find Your Dream Home in One Click!</h1>
          <p className='absolute text-white top-58 font-normal z-10 '>Discover, Buy, or Rent Verified Properties with Ease.</p>
          <img src={banner} alt="banner" className='w-7xl relative top-22 object-cover bg-[position:1.77px_-33.803px] bg-no-repeat bg-[length:100%_167.9%] rounded-4xl' />
        </div>

        <div className="flex justify-evenly z-10 items-center cursor-pointer relative rounded-xl left-62 -top-28 bg-white border-2 border-white w-120">
          <img src={locate} className='pr-4 pl-4' alt="locate" />
          <input type="text" className='border-white w-97 outline-none pl-4 pt-2 pb-2 pr-18' placeholder='Search location...' name="search" id="" />
          <img src={search} className='w-10 pl-2 pr-2' alt="group" />
        </div>

        <p className='flex justify-center z-10 items-center cursor-pointer relative rounded-full -right-5/7 text-bulee border-2 border-bulee font-semibold -top-38 p-3 w-43 bg-white'>List Your Property</p>

        <div className='flex justify-between items-center w-5xl h-26 text-center scale-z-100 shadow-[8px_12px_48.9px_3px_rgba(0,0,0,0.15)] border-none rounded-full relative left-60 -top-15 bg-white'>
          <div className="flex justify-evenly w-5xl h-25 rounded-full grid-rows-4 shadow-2xl bg-white p-4 ">
            <span className='flex justify-evenly items-center cursor-pointer rounded-4xl w-60 h-14 border-2 border-gre '><img src={arrow} alt="rotate" />For Rent <img src={down} alt="down" /></span>
            <span className='flex justify-evenly items-center cursor-pointer rounded-4xl w-60 h-14 border-2 border-gre '><img src={house} alt="" />House <img src={down} alt="down" /></span>
            <span className='flex justify-evenly items-center cursor-pointer rounded-4xl w-60 h-14 border-2  border-gre '><img src={loca} alt="" />India <img src={down} alt="down" /></span>
            <button className='rounded-4xl w-60 h-14 bg-bulee text-white font-bold cursor-pointer'>Find Property</button>
          </div>
        </div>

        {/* Newsellter */}

        <div className="flex flex-col justify-evenly items-center  ml-10 w-362 h-128  mb-12">
          <h1 className='text-bulee text-4xl font-bold leading-7'>What We Do?</h1>
          <p className='text-center font-popi text-gre font-[var(--sds-typography-body-font-weight-regular)] text '>Helping you find, buy, and rent the perfect <br /> property with ease.</p>

          <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-355 mx-auto">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl shadow-md bg-gray-50 hover:bg-white hover:shadow-lg transition"
              >
                <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-gray-200 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className=" flex flex-col justify-between w-full pl-16 pr-16 h-159 ">
          <div className="flex justify-between items-center pb-14">
            <h1 className='font-bold text-bulee text-4xl'>Featured Property</h1>
            <span className='flex justify-center cursor-pointer py-[0.625rem] px-[1.25rem] border-2 border-r-bulee rounded-full' >See 268 New Projects <img src={tilt} alt="" /></span>
          </div>
          {/* imgs */}
          <div className="flex justify-between w-360 h-116 pr-10 ">
            <img src={rec7} alt="" className='w-auto h-auto' />
            <img src={rec8} alt="" className='w-77 h-116 ' />
            <div className="flex flex-col gap-4">
              <img src={rec9} alt="" className='w-77 h-57 ' />
              <img src={rec10} alt="" className='w-77 h-57 ' />

            </div>
          </div>
        </div>

        {/* fetching data  */}
        <div className="flex flex-col justify-between w-full h-169 mt-15 border-2 border-black">
          <div className="flex justify-between items-center pl-12 pr-12">
            <h1 className='font-bold text-bulee text-4xl'>Best Properties Available For Sale</h1><br />
            <p className='text-left w-140 relative right-151 top-15 text-xl' >Browse our top-rated properties for rent, featuring premium listings tailored to your needs. Find your dream home today!</p>
            <button className='rounded-4xl w-60 h-14 bg-bulee relative top-4 text-white font-bold cursor-pointer'>View More Properties</button>
          </div>
        </div>

        {/* fetching data  */}
        <div className="flex flex-col justify-between w-full h-169 mt-15 border-2 border-black">
          <div className="flex justify-between items-center pl-12 pr-12 ">
            <h1 className='font-bold text-bulee text-4xl'>Find The Perfect Rental Home</h1>
            <p className='text-left w-150 relative right-136 top-15 text-xl' >Browse our top-rated properties for rent, featuring premium listings tailored to your needs. Find your dream home today!</p>
            <button className='rounded-4xl w-60 h-14 bg-bulee text-white relative top-4 font-bold cursor-pointer'>View All Rentals</button>
          </div>
        </div>

        {/* searching */}
        <div className="flex flex-col mt-5 w-full pl-10 pr-10 h-60 ">
          <h1 className='font-bold text-[2.5rem] text-bulee'>Start Your Journey Today!</h1>
          <p className='text-[#555555] mt-4'>Create a profile in seconds and find your ideal home.</p>
          <div className="flex justify-around relative top-8 w-full h-25 grid-rows-4 pt-4 pb-4 ">
            <input type="text" placeholder='Enter Your Name' className='flex justify-center text-left items-center cursor-pointer outline-none rounded-xl shadow-[0px_0.1px_1px_2px_rgba(0,0,0.4,0.12)] w-84 h-14 border-2 border-gre pl-8' name="" id="" />
            <span className='flex justify-evenly items-center cursor-pointer rounded-xl w-84 h-14 border-2 shadow-[0px_0.1px_1px_2px_rgba(0,0,0.4,0.12)] border-gre '><input type='text' className='w-66 pl-6 h-full text-left ' placeholder='Select User Type' /><img src={down} alt="down" /></span>
            <input type="text" placeholder='Enter Your Location' className='flex justify-center text-left items-center cursor-pointer outline-none rounded-xl w-84 h-14 border-2 shadow-[0px_0.1px_1px_2px_rgba(0,0,0.4,0.12)] border-gre pl-8' name="" id="" />
            <button className='rounded-4xl w-60 h-14 bg-bulee text-white font-bold cursor-pointer'>Continue</button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="flex flex-row justify-between w-full h-174 mt-15 p-8 ">
          <div className=" w-[45%]">
            <img src={tess1} className='w-126 h-132' alt="rectangle" />
            <img src={tess2} className='w-102 h-101 relative -top-78 -right-51' alt="rectangle" />
          </div>
          <div className="flex-col flex items-center relative right-15 w-[50%]">
            <h1 className='font-bold text-bulee text-center tracking-wider relative right-20 text-4xl'>We Provide Latest Properties <br /> For Our Valuable Clients</h1>
            <div className="flex justify-evenly items-center relative w-[80%] h-[80%] pr-8 pl-8">
              <div className="flex-col flex justify-between items-center w-[20%] h-[70%] pl-12 pb-10 ">
                <img src={money} alt="" />
                <img src={trust} alt="" />
                <img src={map} alt="" />
              </div>
              <div className="w-[75%] h-full pl-4 pr-8 pb-8 pt-12">
                <p className='font-bold text-2xl mt-4 mb-4 text-bulee'>Budget Friendly</p>
                <span>Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.</span>

                <p className='font-bold text-2xl mt-6 mb-4 text-bulee'>Trusted By Thausand</p>
                <span>Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.</span>

                <p className='font-bold text-2xl mt-6 mb-4 text-bulee'>Prime Location</p>
                <span>Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home