import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = (props) => {
  return (
    <div>
        <div class="flex-shrink-0 md:w-[37.5rem] w-[1005] flex flex-col overflow-hidden rounded-xl bg-black/10 backdrop-blur-2xl border border-white/20 text-white shadow-lg my-5">
            <div class="m-0 overflow-hidden rounded-t-xl">
                <iframe className="w-[100%] h-100 sm:h-70 object-cover"
                    src={props.videoLink}
                    allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
            <div class="p-6">
                <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {props.title ? props.title : "Example Title"}
                </h4>
                <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                    {props.description ? props.description : "Please add a description so that the card can be filled with content"}
                </p>
            </div>
            <div>
                <Link to={props.buttonLink ? props.ButtonLink : "/coming-soon"} className='hover:text-orange-300 transition pointer-cursor'>MEHR ERFAHREN</Link>
            </div>
            <div class="flex items-center p-6">
                <p class="block font-sans text-[#ffa545] antialiased font-bold leading-relaxed">
                    NEW
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default CourseCard
