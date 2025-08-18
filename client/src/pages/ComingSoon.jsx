import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ComingSoon = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col my-40 md:my-85 px-15 md:px-45 xl:px-80 text-center text-white items-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[54px] font-medium xl:leading-[75px] max-w-5xl'>Bald <span className='text-orange-400'>verfügbar</span></h1>
        <p className='mt-5'>Diese Funktion befindet sich derzeit in Entwicklung und wird bald verfügbar sein. In der Zwischenzeit laden wir dich ein, unsere Website zu erkunden und eines unserer Pakete zu abonnieren, damit du sofortigen Zugriff auf neue Inhalte erhältst, sobald diese veröffentlicht werden.</p>
      </div>
      <Footer />
    </div>
  )
}

export default ComingSoon
