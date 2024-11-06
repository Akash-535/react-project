import React from 'react'
import { SearchIcon } from './Icon'
import CommonHeading from './CommonHeading'
import CommonDescription from './CommonDescription'
import { useLocation } from 'react-router-dom'

const Hero = () => {
    const location = useLocation().pathname
  return (
    <div className={`${location === '/' ? "bg-gradient-to-br from-[#FF5501]  to-[#B1106F] min-h-screen flex justify-center items-center text-center text-white flex-col rounded-b-[30px] max-md:px-3" : "bg-[#01A4FFBD] min-h-screen flex justify-center items-center text-center text-white flex-col max-md:px-3"}`}>
      <CommonHeading heading='Lorem ipsum dolor sit amet consectetur. Sceleris'/>
      <CommonDescription description="Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis."/>
      <div className="flex justify-between bg-white ps-3 py-1 pe-1 w-full max-w-[435px] max-md:max-w-[375px] rounded-2xl mx-auto mt-10">
       <div className='flex items-center gap-5'> <SearchIcon/>
       <input type="text" placeholder='Search' className='placeholder:text-base placeholder:opacity-55 outline-none text-base text-black'/>
               </div>
               <button className='py-3 px-7 bg-orange-500 rounded-xl border border-transparent hover:text-orange-500 hover:bg-white hover:border hover:border-orange-500 duration-300 ease-linear'>Start</button>
      </div>
    </div>
    )
}

export default Hero
