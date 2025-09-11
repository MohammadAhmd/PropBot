import React from 'react'
import logo from '../assets/Vector-1.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="flex flex-col justify-around items-center max-w-full h-142 bg-backk relative top-40 mb-16">
                <div className="flex flex-col justify-evenly items-center w-200 h-100 ">
                    <h1 className='font-bold text-5xl text-white '>Get in Touch with Us</h1>
                    <p className='text-3xl pt-4 text-white font-popi'>Subscribe now for exclusive <br /> property insights and deals!</p>
                    <div className="flex justify-evenly items-center rounded-full w-150 bg-baGre h-18">
                    <input type="email" name="email" id="" className='w-90 h-6 outline-none font-semibold text-2xl' placeholder='Enter Your Email Id' />
                    <button className='w-37 h-12 bg-bulee rounded-full font-normal text-2xl text-white'>Submit</button>

                    </div>
                </div>
                <div className="flex flex-row justify-between p-4 items-center w-full h-20">
                    <div className="flex items-center justify-between md:w-40  cursor-pointer gap-2.5 p-4">
                        <img src={logo} alt="logo" className='' /><h1 className='font-bold text-2xl text-white' >PropBot</h1>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <span className='text-white font-semibold pl-4 pt-2 pb-2 pr-4 '>For Sale</span>
                        <span className='text-white font-semibold pl-4 pt-2 pb-2 pr-4 '>Rentals</span>
                        <span className='text-white font-semibold pl-4 pt-2 pb-2 pr-4 '>New Projects</span>
                        <span className='text-white font-semibold pl-4 pt-2 pb-2 pr-4 '>Property News</span>
                    </div>
                    <div className="">
                        <p className='text-white font-semibold'>@2025 Propbot. All rights reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer