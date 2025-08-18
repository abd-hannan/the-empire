import React from 'react'
import CourseCard from '../utils/CourseCard'

const SectionHomeA = () => {
  return (
    <div className='flex flex-col items-center gap-0 py-40 px-4 sm:px-12 ls:px-24 xl:px-40 text-center w-full bg-gray-950 overflow-hidden text-white'>
        <h3 className='text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>THE LATEST INFORMATION</h3>
        <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-[30px] font-extrabold xl:leading-[50px] max-w-3xl'>WHAT YOU'LL LEARN</h2>
        <h3 className='mt-10 text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>When a technology revolutionizes an industry,</h3>
        <h3 className='mt-10 text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'><span className='text-white text-extrabold'>THE REAL WORLD will</span> be the first and only place to teach you <span className='text-white text-extrabold'>how to take advantage of it.</span></h3>
        <h3 id='courses' className='mt-5 text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>Our students receive the latest information at 8am every day.</h3>
        <div className='flex flex-wrap justify-center gap-5 px-10 py-10 mt-15'>
            <CourseCard 
            title='E-COMMERCE' 
            description='Sell profitable products online. Industry experts will train you to find winning products, create the perfect store, and generate traffic on your sites.' 
            videoLink='https://player.vimeo.com/video/904502090' 
            buttonLink = ""/>
            <CourseCard 
            title='COPYWRITING' 
            description="Master the art of selling with words. We'll give you an easy to follow guide on how to master the art of copywriting and secure a list of high-paying clients." 
            videoLink='https://player.vimeo.com/video/904502310' 
            buttonLink = ""/>
            <CourseCard 
            title='STOCKS' 
            description="Multiply your capital through the stock market. We'll train you to use technical analysis to find situations where there's a higher upside  than the downside." 
            videoLink='https://player.vimeo.com/video/904501332' 
            buttonLink = ""/>
            <CourseCard 
            title='BUSINESS & FINANCE' 
            description="Master the fundamental skills of business. We'll teach you every skill the gyper successful entrepreneur of tomorrow needs to master." 
            videoLink='https://player.vimeo.com/video/904502723' 
            buttonLink = ""/>
            <CourseCard 
            title='CRYPTO INVESTING' 
            description="Profit from the world's highest-performing assets. We'll focus on attacking crypto markets from 3 angles: Long-term, medium-term, and short-term." 
            videoLink='https://player.vimeo.com/video/904502723' // not a link for it need to create a picture link prop that needs to be integrated further...
            buttonLink = ""/>
            <CourseCard 
            title='CRYPTO TRADING' 
            description="Take advantage of the bull run and master the art of crypto trading in the Crypto Trading campus, where we empower you to navigate the markets with precision." 
            videoLink='https://player.vimeo.com/video/904502723' // not a link for it need to create a picture link prop that needs to be integrated further...
            buttonLink = ""/>
            <CourseCard 
            title='CONTENT CREATION & AI' 
            description="We live in a digital age. There are websites worth more than skyscrapers. Videos worth more than houses. We will teach you how to create & sell valuable digital assets."
            videoLink='https://player.vimeo.com/video/904502588'
            buttonLink = ""/>
            <CourseCard 
            title='CLIENT AQUISITION & SOCIAL MEDIA' 
            description="If you scroll for hours, but don't get paid for it - this is for you. Our students follow step-by-step process to gain attention to generate 6 figures."
            videoLink='https://player.vimeo.com/video/904501949'
            buttonLink = ""/>
            <CourseCard 
            title='FITNESS' 
            description="The Real World approach to fitness focuses on sculpting a disciplined, resilient character, not just a strong physique."
            videoLink='https://player.vimeo.com/video/968317872'
            buttonLink = ""/>
        </div>

        
        
    </div>

  )
}

export default SectionHomeA
