// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.get("http://localhost:5000/users", {
//         params: { email, password }
//       });

//       if (res.data.length > 0) {
//         alert("Login successful!");
//         navigate("/dashboard"); // You can add a dashboard page later
//       } else {
//         alert("Invalid credentials");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-sm mx-auto bg-white shadow rounded">
//       <h2 className="text-xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           className="border p-2 mb-2 w-full"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-2 mb-2 w-full"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;












import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Vector.png'
import { useNavigate } from 'react-router-dom'
import rightt from '../assets/arrow-right.png'
import arro from '../assets/arrow-left.png'
import rect from '../assets/Rectangle 1.png'
import messa from '../assets/message.png'
import paswor from '../assets/pass.png'
import apple from '../assets/Apple.png'
import facebook from '../assets/Fb.png'
import google from '../assets/Google.png'

function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple frontend validation
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    // Dummy login logic (replace with actual API call)
    if (email === 'test@example.com' && password === 'password123') {
      alert('Login successful!');
      setError('');
    } else {
      setError('Invalid email or password.');
    }
  };
  const navig = useNavigate();

  return (
    <>
      <div className="">
        {/* header */}
        <div className=" flex justify-around items-center h-20 shadow-md">
          <div className="flex justify-evenly items-center pt-2.5 pb-2.5 pl-5 pr-5 border-2 border-bulee font-semibold w-52 h-12 rounded-3xl cursor-pointer bg-white text-gre">
            <img src={arro} alt="left" className='text-white' />
            <button className='cursor-pointer' onClick={() => navig('/')}>Back to Homepage </button>
          </div>
          <div className="flex items-center justify-between md:w-40  cursor-pointer gap-2.5 p-4">
            <Link to='/'><img src={logo} alt="logo" className='' /></Link><h1 className='font-bold text-2xl' >PropBot</h1>
          </div>
          <div className='flex justify-evenly items-center pt-2.5 pb-2.5 pl-5 pr-5 w-52 h-12 rounded-3xl cursor-pointer bg-bulee text-white'>
            <Link to='/about'>About us</Link><img src={rightt} alt="right" />
          </div>
        </div>
        {/* From with image */}
        <div className="flex justify-between items-center mt-8 mb-8">
          <div className="flex flex-col  items-center  w-2/5 ml-4 mr-2 h-screen  p-8">
            <h1 className='text-4xl font-bold'>Log In</h1>
            <form onSubmit={handleSubmit} className=''>
              {/* Input id */}
              <div className="flex flex-col justify-evenly w-100 gap-2 mt-16">
                <label htmlFor="" className='font-bold'>Email Address </label>
                <div className="flex flex-row justify-between pl-6 pr-6 pt-4 pb-4 rounded-xl w-100 h-14 shadow-md border-2 border-bulee">
                  <input type="email" name="email" id="" className='w-80 h-6 outline-none text-base font-semibold' placeholder='Enter Your Email Id' />
                  <img src={messa} alt="message" className='w-6 h-6' />
                </div>
              </div>
              {/* input password */}
              <div className="flex flex-col justify-evenly w-100 gap-2 mt-4">
                <label htmlFor="" className='font-bold'>Password</label>
                <div className="flex flex-row justify-between pl-6 pr-6 pt-4 pb-4 rounded-xl w-100 h-14 shadow-md border-2 border-bulee">
                  <input type="password" name="password" id="" className='w-80 h-6 outline-none text-base font-semibold' placeholder='Enter Your Password' />
                  <img src={paswor} alt="password" className='w-6 h-6' />
                </div>
              </div>
              {/* checkbox */}
              <div className="flex flex-row justify-between m-4">
                <div className="flex items-center justify-center">
                  <input type="checkbox" name="chek" id="" className='mr-1' /><span>Remember Me</span>
                </div>
                <span className='text-sm cursor-pointer text-redd'>Forgot Password?</span>
              </div>
              {/* Button */}
              <button className='pt-2.5 pb-3 text-center pl-5 pr-5 w-100 font-bold text-2xl h-15 rounded-3xl cursor-pointer bg-bulee text-white'>Login</button>
            </form>
            {/* Something different */}
            <div className="flex justify-evenly items-center mt-6 ">
              <hr className='w-34 h-1 text-gre' />
              <span className='text-xs p-1 mr-3 ml-3 text-gre '>OR CONTINUE WITH</span>
              <hr className='w-34 h-1 text-gre' />
            </div>
            {/* Social network */}
            <div className="flex justify-evenly items-center w-full mt-8 mb-8 p-4">
              <img src={apple} alt="apple" />
              <img src={facebook} alt="facebook" />
              <img src={google} alt="google" />
            </div>
            <div className="flex items-center">
              <p>Doesn’t have an account? <span className='text-bulee font-bold cursor-pointer' onClick={() => navig('/signup')}>Create One</span> </p>
            </div>
          </div>
          {/* background image */}
          <img src={rect} alt="rectangle" />
        </div>

      </div>
    </>
  )
}

export default Login