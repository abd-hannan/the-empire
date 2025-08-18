import React from 'react'
import CourseCard from '../utils/CourseCard'

const SectionHomeA = () => {
  return (
    <div className='flex flex-col items-center gap-0 py-40 px-4 sm:px-12 ls:px-24 xl:px-40 text-center w-full bg-gray-950 overflow-hidden text-white'>
        <h3 className='text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>DIE NEUESTEN INFORMATIONEN</h3>
        <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-[30px] font-extrabold xl:leading-[50px] max-w-3xl'>WAS DU LERNEN WIRST</h2>
        <h3 className='mt-10 text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>Wenn eine Technologie eine Branche revolutioniert,</h3>
        <h3 className='mt-10 text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'><span className='text-white text-extrabold'>THE EMPIRE wird</span> der erste und einzige Ort sein, der dir zeigt, <span className='text-white text-extrabold'>wie du davon profitieren kannst.</span></h3>
        <h3 id='courses' className='mt-5 text-1xl sm:text-2xl md:text-3xl xl:text-[18px] font-medium xl:leading-[30px] max-w-2xl text-gray-500'>Unsere Studenten erhalten jeden Tag um 8 Uhr morgens die neuesten Informationen.</h3>
        <div className='flex flex-wrap justify-center gap-5 px-10 py-10 mt-15'>
            <CourseCard 
            title='E-COMMERCE' 
            description='Verkaufe profitable Produkte online. Branchenexperten zeigen dir, wie du Gewinnprodukte findest, den perfekten Shop erstellst und Traffic auf deinen Seiten generierst.' 
            videoLink='https://player.vimeo.com/video/904502090' 
            buttonLink = ""/>
            <CourseCard 
            title='COPYWRITING' 
            description="Meistere die Kunst des Verkaufens mit Worten. Wir geben dir eine leicht verständliche Anleitung, wie du die Kunst des Copywritings beherrschst und dir eine Liste hochbezahlter Kunden sicherst." 
            videoLink='https://player.vimeo.com/video/904502310' 
            buttonLink = ""/>
            <CourseCard 
            title='STOCKS' 
            description="Vervielfache dein Kapital über den Aktienmarkt. Wir zeigen dir, wie du technische Analysen nutzt, um Situationen zu finden, in denen das Aufwärtspotenzial größer ist als das Abwärtsrisiko." 
            videoLink='https://player.vimeo.com/video/904501332' 
            buttonLink = ""/>
            <CourseCard 
            title='BUSINESS & FINANCE' 
            description="Meistere die grundlegenden Fähigkeiten im Business. Wir bringen dir jede Fähigkeit bei, die der extrem erfolgreiche Unternehmer von morgen beherrschen muss." 
            videoLink='https://player.vimeo.com/video/904502723' 
            buttonLink = ""/>
            <CourseCard 
            title='CRYPTO INVESTING' 
            description="Profitiere von den weltweit leistungsstärksten Assets. Wir zeigen dir, wie du die Kryptomärkte aus drei Blickwinkeln angehst: langfristig, mittelfristig und kurzfristig." 
            videoLink='https://player.vimeo.com/video/904502723' // not a link for it need to create a picture link prop that needs to be integrated further...
            buttonLink = ""/>
            <CourseCard 
            title='CRYPTO TRADING' 
            description="Nutze den Bullenmarkt und meistere die Kunst des Krypto-Tradings im Crypto Trading Campus, wo wir dich befähigen, die Märkte präzise zu navigieren." 
            videoLink='https://player.vimeo.com/video/904502723' // not a link for it need to create a picture link prop that needs to be integrated further...
            buttonLink = ""/>
            <CourseCard 
            title='CONTENT CREATION & AI' 
            description="Wir leben im digitalen Zeitalter. Es gibt Websites, die mehr wert sind als Wolkenkratzer. Videos, die mehr wert sind als Häuser. Wir zeigen dir, wie du wertvolle digitale Assets erstellst und verkaufst."
            videoLink='https://player.vimeo.com/video/904502588'
            buttonLink = ""/>
            <CourseCard 
            title='CLIENT AQUISITION & SOCIAL MEDIA' 
            description="Wenn du stundenlang scrollst, aber nichts dafür bekommst das ist für dich. Unsere Studenten folgen einem Schritt-für-Schritt-Prozess, um Aufmerksamkeit zu gewinnen und ein sechsstelliges Einkommen zu erzielen."
            videoLink='https://player.vimeo.com/video/904501949'
            buttonLink = ""/>
            <CourseCard 
            title='FITNESS' 
            description="Der Empire-Ansatz für Fitness konzentriert sich darauf, einen disziplinierten und belastbaren Charakter zu formen nicht nur einen starken Körper."
            videoLink='https://player.vimeo.com/video/968317872'
            buttonLink = ""/>
        </div>

        
        
    </div>

  )
}

export default SectionHomeA
