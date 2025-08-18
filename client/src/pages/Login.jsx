import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import assets from '../assets/assets'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <div>
      <Navbar />
      <div className='w-full h-screen flex items-center justify-center text-white'>
        <div className='w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg'>
            <img src={assets.logo} alt="" className='w-12 md:w-14'/>
            <h1 className='text-lg md:text-xl font-bold'>Login</h1>
            <p className='text-xs md:text-sm text-gray-500 text-center'>Dont have an account? <span className='text-white'>Subscribe Here</span></p>
            <div className='w-full flex flex-col gap-3'>
                <div className='w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2'>
                    <MdOutlineAlternateEmail />
                    <input type="email" placeholder='Email Account' className='bg-transparent border-0 w-full outline-none text-sm md:text-base'/>
                </div>
                <div className='w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative'>
                    <FaFingerprint />
                    <input type={!showPassword ? "password" : "text"} placeholder='Password' className='bg-transparent border-0 w-full outline-none text-sm md:text-base'/>
                    {!showPassword ? (
                        <FaRegEye className='absolute right-5 cursor-pointer' onClick={togglePasswordVisibility}/>
                        ) : (
                        <FaRegEyeSlash className='absolute right-5 cursor-pointer' onClick={togglePasswordVisibility}/>
                    )}
                </div>
            </div>
            <button className='w-full p-2 bg-orange-300 rounded-xl mt-3 hover:bg-orange-400 text-sm md:text-base cursor-pointer transition'>
                    Login
            </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
