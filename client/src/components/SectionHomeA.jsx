import React from 'react'
import CourseCard from '../utils/CourseCard'

const SectionHomeA = () => {
  return (
    <div className='flex flex-col items-center gap-0 py-40 px-4 sm:px-12 ls:px-24 xl:px-40 text-center w-full bg-gray-950 overflow-hidden text-white'>
        <h3 className='text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>THE LATEST INFORMATION</h3>
        <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-[30px] font-extrabold xl:leading-[50px] max-w-3xl'>WHAT YOU'LL LEARN</h2>
        <h3 className='mt-10 text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>When a technology revolutionizes an industry,</h3>
        <h3 className='mt-10 text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'><span className='text-white text-extrabold'>THE REAL WORLD will</span> be the first and only place to teach you <span className='text-white text-extrabold'>how to take advantage of it.</span></h3>
        <h3 className='mt-5 text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>Our students receive the latest information at 8am every day.</h3>
        <div className='flex flex-wrap justify-center gap-5 px-10 py-10 mt-15'>
            <CourseCard 
            title='E-COMMERCE' 
            description='Sell profitable products online. Industry experts will train you to find winning products, create the perfect store, and generate traffic on your sites.' 
            videoLink='https://player.vimeo.com/video/904502090' />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
        
        
    </div>

  )
}

export default SectionHomeA
