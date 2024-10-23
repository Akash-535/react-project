import React from 'react'
import { FOOTER_ITEM } from './Helper'
import CommonDescription from './CommonDescription'
import CommonHeader from './CommonHeader'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
    const currentPath = location.pathname
    const year = new Date().getFullYear()
  return (

    <div className={`${currentPath === '/' ? "bg-[#1E1E1E] rounded-t-[30px]" : "bg-[#002B43]"}`}>
          <div className='flex justify-between text-white px-36 max-lg:px-28 max-md:px-24 max-sm:px-16 pt-20 pb-16 max-lg:flex-col max-lg:text-center'>
          <div className='w-5/12 max-lg:w-full'>
       <div className={`${currentPath === '/' ? "text-orange-500" : "text-blue-500"}`}>
            <CommonHeader footer='Logo Here'/>
        </div>
        <CommonDescription footerPera='Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.'/>
       </div>
   <div className='flex w-3/12 max-lg:w-6/12 max-md:w-full justify-between max-lg:mt-5 max-lg:mx-auto'>
   {FOOTER_ITEM.map((obj,index) =>(
    <div key={index} className='flex flex-col'>
        <div><p className='text-lg font-semibold pb-6'>{obj.heading}</p></div>
        {obj.content.map((val, i) => (
          <div key={i}>
              <ul className='flex flex-col gap-1'>
            <li><a href="#footer" className='opacity-70 hover:opacity-100 duration-300 ease-linear'>{val.item}</a></li>
            <a href="https://instagram.com" target='_blank' className='opacity-70 hover:opacity-100 duration-300 ease-linear'>{val.instagram}</a>
            <a href="https://x.com" target='_blank' className='opacity-70 hover:opacity-100 duration-300 ease-linear'>{val.twitter}</a>
            <a href="https://discord.com" target='_blank' className='opacity-70 hover:opacity-100 duration-300 ease-linear'>{val.discord}</a>
            <a href="https://you-tube.com" target='_blank' className='opacity-70 hover:opacity-100 duration-300 ease-linear'>{val.youtube}</a>
          </ul>  
          </div>    
        ))}
    </div>
      ))}
   </div>
          </div>
          <div className='border border-white max-2xl:max-w-[1471px] w-full border-opacity-40'></div>
          <a href="#footer"> <p className='text-white text-center py-6'>Copyright©{year} (Logo) All Rights Reserved.</p></a>
              </div>
  )
}
export default Footer
