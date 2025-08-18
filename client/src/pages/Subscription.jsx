import React from 'react'
import Navbar from '../components/Navbar'
import assets from '../assets/assets'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const Subscription = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col gap-4 items-center text-white text-center'>
        <img src={assets.logo} alt="" className='max-w-90 mt-25'/>
        <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-[50px] font-extrabold xl:leading-[50px] max-w-3xl'>CHOOSE YOUR PATH TO SUCCESS</h2>
        <h3 className='text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>Join thousands crushing their competition and building enemies</h3>
      </div>
      <div>
        <Pricing />
      </div>
      <Footer />
    </div>
  )
}

export default Subscription
