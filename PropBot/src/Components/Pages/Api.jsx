import React from 'react'
import rect1 from '../../assets/Rect15.png'
import loc from '../../assets/lightLoca.png'

function Api() {

  const imga = {
    title: "I found",
    icon: <img src={loc} alt="" />

  }
  return (
    <>{
      <div className="flex flex-col bg-[#F1F1F1] justify-evenly items-center w-86 h-106 border-2 border-black ml-2 rounded-xl">
        <img src={rect1} alt="" />
        <div className="w-82 h-[48%] border-2 border-red-500">
          {
            <img src={imga.icon} alt="" />
          }
        </div>
      </div>
    }

      <div className="flex flex-col bg-[#F1F1F1] justify-evenly items-center w-86 h-106  rounded-xl">
        <img src={rect1} alt="" />
        <div className=" w-82 h-[48%] ">
          <img src={imga.icon} alt="" />
          <div className="flex flex-row justify-between items-center pl-4 pr-4">
            <p className="text-gray-500 text-sm  flex items-center flex-row gap-2">
              <img src={loc} alt="" />New York, NY</p>
            <p className=""> ⭐4.5/5</p>
          </div>
          <p className="text-gray-700 pl-4 pr-5 ml-1 mr-4 gap-1 mt-4 text-base font-semibold">Spacious 3BHK apartment in a prime location with modern amenities.</p>
          <div className="flex flex-row justify-between items-center  mt-4 pl-2 pr-2">
            <button className='rounded-4xl w-40 h-10 bg-bulee text-white relative  font-bold cursor-pointer'>View All Rentals</button>
            <p className="font-bold ">$100000</p>

          </div>
        </div>
      </div>
      
      <div className="flex flex-col bg-[#F1F1F1] justify-evenly items-center w-86 h-106  rounded-xl">
        <img src={rect1} alt="" />
        <div className=" w-82 h-[48%] ">
          <img src={imga.icon} alt="" />
          <div className="flex flex-row justify-between items-center pl-4 pr-4">
            <p className="text-gray-500 text-sm  flex items-center flex-row gap-2">
              <img src={loc} alt="" />New York, NY</p>
            <p className=""> ⭐4.5/5</p>
          </div>
          <p className="text-gray-700 pl-4 pr-5 ml-1 mr-4 gap-1 mt-4 text-base font-semibold">Spacious 3BHK apartment in a prime location with modern amenities.</p>
          <div className="flex flex-row justify-between items-center  mt-4 pl-2 pr-2">
            <button className='rounded-4xl w-40 h-10 bg-bulee text-white relative  font-bold cursor-pointer'>View All Rentals</button>
            <p className="font-bold ">$100000</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Api