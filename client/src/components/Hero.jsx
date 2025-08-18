import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-0 py-40 px-4 sm:px-12 ls:px-24 xl:px-40 text-center w-full overflow-hidden text-white'>
      
      <div
        className="absolute inset-0 bg-cover bg-center -z-11"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg')" }}
      ></div>

      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.97) 50%, rgba(0,0,0,1) 100%)'
      }}></div>
      
      <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[54px] font-medium xl:leading-[75px] max-w-5xl'>MAKING MONEY IS <span className='bg-gradient-to-r from-[#b18b2f] to-[#d09848] bg-clip-text text-transparent'>A SKILL</span></h1>
      <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-[30px] font-medium xl:leading-[50px] max-w-3xl'>We will teach you how to <span className='underline'>master it</span></h2>
      
      
      <div className="mt-10 w-full flex justify-center">
        <div className="relative w-[100%] max-w-4xl aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/a58aMKKHSx4?modestbranding=1&showinfo=0&rel=0&controls=1"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <a href="#" className='mt-10 px-10 py-4 text-black font-extrabold text-lg uppercase bg-[#ffa545] rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105'>
          JOIN THE REAL WORLD NOW
          </a>
      
      <div className='services inline-flex mt-5 items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img className='w-20' src={assets.group_profile} alt="" />
        <p className='text-xs font-medium'>Join 113,000+ like-minded students</p>
      </div>
      
      <div className='mt-40'>
        <h3 className='text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>INTRODUCING</h3>
        <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-[30px] font-medium xl:leading-[50px] max-w-3xl'>A MASSIVE UPGRADE</h2>
        <h3 className='text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>A modern education system is designed to make you poor.</h3>
        <h3 className='text-1xl mt-10 sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'><span className='font-extrabold text-white'>Imagine you could get access to multi-millionaire mentors</span> who will give you a step-by-step path to reach your goals as fast as possible...</h3>
        <h3 className='text-1xl mt-10 sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>That's <span className='font-extrabold text-white'>exactly</span> what you find <span className='font-extrabold text-white'>inside THE REAL WORLD.</span></h3>
      </div>
    </div>
    
  )
}

export default Hero
