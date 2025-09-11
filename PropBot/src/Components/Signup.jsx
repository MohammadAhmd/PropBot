import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Vector.png'
import { useNavigate } from 'react-router-dom'
import rightt from '../assets/arrow-right.png'
import arro from '../assets/arrow-left.png'
import rect from '../assets/Rectangle 1.png'
import messa from '../assets/message.png'
import paswor from '../assets/pass.png'


function Signup() {

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    // Basic frontend validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');

    // Simulated API request (replace with real one)
    const fakeToken = 'fake-signup-token-123456';

    // Save token (or user info) to localStorage
    localStorage.setItem('token', fakeToken);
    localStorage.setItem('user', JSON.stringify({ fullName, email }));

    setSuccess('Account created successfully!');
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };
  const navig = useNavigate();
  return (
    <>
      <div className="mb-10 h-full">
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
          <div className="flex flex-col items-center w-2/5 ml-4 mr-2 h-screen p-8">
            <h1 className='text-4xl font-bold'>Create new account</h1>
            <form onSubmit={handleSubmit} className=''>

              {/* Input full name */}
              <div className="flex flex-col justify-evenly w-100 gap-2 mt-8">
                <label htmlFor="" className='font-bold'>Name </label>
                <div className="flex flex-row justify-between pl-6 pr-6 pt-4 pb-4 rounded-xl w-100 h-14 shadow-md border-2 border-bulee">
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className='w-80 h-6 outline-none text-base font-semibold' placeholder='Enter Your Full Name' />
                </div>
              </div>

              {/* input email id */}
              <div className="flex flex-col justify-evenly w-100 gap-2 mt-4">
                <label htmlFor="" className='font-bold'>Email Address </label>
                <div className="flex flex-row justify-between pl-6 pr-6 pt-4 pb-4 rounded-xl w-100 h-14 shadow-md border-2 border-bulee">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className='w-80 h-6 outline-none text-base font-semibold' placeholder='Enter Your Email Id' />
                  <img src={messa} alt="message" className='w-6 h-6' />
                </div>
              </div>

              {/* input password */}
              <div className="flex flex-col justify-evenly w-100 gap-2 mt-4">
                <label htmlFor="" className='font-bold'>Password</label>
                <div className="flex flex-row justify-between pl-6 pr-6 pt-4 pb-4 rounded-xl w-100 h-14 shadow-md border-2 border-bulee">
                  <input type="password" name="password" value={formData.password} onChange={handleChange} className='w-80 h-6 outline-none text-base font-semibold' placeholder='Enter Your Password' />
                  <img src={paswor} alt="password" className='w-6 h-6' />
                </div>
              </div>

              {/* confirm password */}
              <div className="flex flex-col justify-evenly w-100 gap-2 mt-4">
                <label htmlFor="" className='font-bold'>Confirm Password</label>
                <div className="flex flex-row justify-between pl-6 pr-6 pt-4 pb-4 rounded-xl w-100 h-14 shadow-md border-2 border-bulee">
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className='w-80 h-6 outline-none text-base font-semibold' placeholder='Confirm Your Password' />
                  <img src={paswor} alt="password" className='w-6 h-6' />
                </div>
              </div>

              {/* Button */}
              <button  className='pt-2.5 pb-3 mt-8 text-center pl-5 pr-5 w-100 font-semibold text-2xl h-15 rounded-3xl cursor-pointer bg-bulee text-white'>Create Account</button>
            </form>

            {/* Something different */}
            <div className="flex items-center mt-8">
              <p>Already have an account? <span className='text-bulee font-bold cursor-pointer' onClick={() => navig('/login')}>Login </span> </p>
            </div>
          </div>
          {/* background image */}
          <img src={rect} alt="rectangle" />
        </div>

      </div>
    </>
  )
}

export default Signup