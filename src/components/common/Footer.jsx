import React from 'react'
import { FOOTER_ITEM } from './Helper'
import CommonDescription from './CommonDescription'
import { useLocation } from 'react-router-dom'
import CommonHeading from './CommonHeading'

const Footer = () => {
  const location = useLocation().pathname
  const year = new Date().getFullYear()
  return (

    <div className={`${location === '/' ? "bg-[#1E1E1E] rounded-t-[30px]" : "bg-[#002B43]"}`}>
      <div className='flex justify-between text-white px-36 max-lg:px-28 max-md:px-24 max-sm:px-16 pt-20 pb-16 max-lg:flex-col max-lg:text-center'>
        <div className='w-5/12 max-lg:w-full'>
          <div className={`${location === '/' ? "text-orange-500" : "text-blue-500"}`}>
            <CommonHeading footer='Logo Here' />
          </div>
          <CommonDescription footerPera='Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.' />
        </div>
        <div className='flex w-3/12 max-lg:w-6/12 max-md:w-full justify-between max-lg:mt-5 max-lg:mx-auto'>
          {FOOTER_ITEM.map((obj, index) => (
            <div key={index} className='flex flex-col'>
              <div><p className='text-lg font-semibold pb-6'>{obj.heading}</p></div>
              {obj.content.map((val, i) => (
                <div key={i}>
                  <ul className='flex flex-col gap-1'>
                    <li><a href={index === 0 ? "#Home" : "https://www.instagram.com/"} target='_blank' className={`${index === 0 ? "text-black" : "text-red-500"}`}>{val.itemOne}</a></li>
                    <li><a href={index === 0 ? "#footer" : "https://www.x.com/"} target='_blank' className={`${index === 0 ? "text-red-500" : "text-green-500"}`}>{val.itemTwo}</a></li>
                    <li><a href={index === 0 ? "#footer" : "https://www.discord.com/"} target='_blank' className='opacity-70 hover:opacity-100 duration-300 ease-linear'>{val.itemThree}</a></li>
                    <li><a href={index === 0 ? "#footer" : "https://www.youtube.com/"} target='_blank' className='opacity-70 hover:opacity-100 duration-300 ease-linear'>{val.itemFour}</a></li>
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
