import React, { useState } from "react"
import assets from '../assets/assets'
import Subscription from "../pages/Subscription";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false);
  
  return (
    <div className='flex justify-between items-center px-4 sm:ps-12 lg:px-24 xl:px-40 py-4 top-0 z-20 backdrop-blur-xl font-medium'>

      <Link to="/">
      <img src={assets.logo} className='w-25 sm:w-20 cursor-pointer' alt="" />
      </Link>

      <div className={`text-white sm:text-sm ${!sideBarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10 max-sm:pr-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-15 transition-all`}>
        
        <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={() => setSideBarOpen(false)}/>
        
        <a href="#features" className="sm:hover:text-[#ffa545] font-extrabold">Features</a>
        <Link to="coming-soon" className="sm:hover:text-[#ffa545] font-extrabold">Interviews</Link>
        <a href="#courses" className="sm:hover:text-[#ffa545] font-extrabold">Kurse</a>
        <Link to="/coming-soon" className="sm:hover:text-[#ffa545] font-extrabold">Über Bajwa</Link>
        <Link to="/login" className='px-4 py-2 border border-orange-300 text-orange-300 rounded-md hover:bg-orange-300 hover:text-white sm:hidden transition'>
          Anmelden
        </Link>
        <a href='#' className='px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 sm:hidden transition'>
          Jetzt beitreten
        </a>
      
      </div>
        
        
        <div className="flex items-center gap-2">
          <Link to="/login" className='px-4 py-2 border border-orange-300 text-orange-300 rounded-md hover:bg-[#cd873d] hover:border-[#cd873d] hover:text-white hidden sm:block transition'>
          Anmelden
          </Link>
          <Link to="/subscription" className='px-4 py-2 bg-[#ffa545] text-white rounded-md hover:bg-[#cd873d] hidden sm:block transition'>
          Jetzt beitreten
          </Link>
        </div>
        <img src={assets.menu_icon_dark} alt="" className='w-8 sm:hidden' onClick={() => setSideBarOpen(true)}/>

    </div>
  )
}

export default Navbar
