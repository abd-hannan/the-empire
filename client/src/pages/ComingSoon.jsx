import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ComingSoon = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col my-40 md:my-85 px-15 md:px-45 xl:px-80 text-center text-white items-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[54px] font-medium xl:leading-[75px] max-w-5xl'>Coming <span className='text-orange-400'>Soon</span></h1>
        <p className='mt-5'>This feature is currently under development and will be available soon. In the meantime, we invite you to explore our website and subscribe to one of our packages to ensure you receive immediate access to new content as soon as it's released.</p>
      </div>
      <Footer />
    </div>
  )
}

export default ComingSoon
