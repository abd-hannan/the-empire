import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-950 pt-4 md:pt-10 lg:pt-14 pr-4 md:pr-16 lg:pr-28 pl-4 md:pl-16 lg:pl-28 pb-4 md:pb-6 lg:pb-8 text-white'>
      <div className='flex flex-col items-center pb-4 md:pb-6 lg:pb-8'>
        <img src={assets.logo} alt="" className='w-20 md:w-20 lg:w-35'/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className=''>
            <h2 className='text-lg font-bold mb-4 underline'>
                Über uns
            </h2>
            <p className='text-gray-600'>
                Stell dir vor, du könntest Zugang zu Multi-Millionär-Mentoren bekommen, die dir einen Schritt-für-Schritt-Weg zeigen, um deine Ziele so schnell wie möglich zu erreichen…
            </p>
        </div>
        <div>
            <h2 className='text-lg font-bold mb-4 underline'>
              Unsere Kurse
            </h2>
            <ul className='grid grid-cols-2'>
                <li><a href="" className='hover:text-orange-300 text-gray-300'>E-Commerce</a></li>
                <li><a href="" className='hover:text-orange-300 text-gray-300'>Copywriting</a></li>
                <li><a href="" className='hover:text-orange-300 text-gray-300'>Stocks</a></li>
                <li><a href="" className='hover:text-orange-300 text-gray-300'>Business & Finance</a></li>
                <li><a href="" className='hover:text-orange-300 text-gray-300'>Crypto Investing</a></li>
                <li><a href="" className='hover:text-orange-300 text-gray-300'>Crypto Trading</a></li>
                <li><a href="" className='hover:text-orange-300 text-gray-300'>Content Creation</a></li>
                <li><a href="" className='hover:text-orange-300 text-gray-300'>Fitness</a></li>
            </ul>
        </div>
        <div>
            <h2 className='text-lg font-bold mb-4 underline'>
                Schnellzugriffe
            </h2>
            <ul>
                <li><a href="" className='hover:text-orange-300 text-gray-300'>Startseite</a></li>
                <li><a href="" className='hover:text-orange-300 text-gray-300'>Interviews</a></li>
                <li><a href="" className='hover:text-orange-300 text-gray-300'>Über Bajwa</a></li>
            </ul>
            
        </div>
      </div>
      <hr className='mt-8'/>
      <div className='mt-2'>
        <p>© 2025 The Empire. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
