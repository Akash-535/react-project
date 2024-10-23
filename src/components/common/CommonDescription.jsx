import React from 'react'

const CommonDescription = ({description , footerPera}) => {
  return (
    <div>
      <p className='pt-5 text-base font-medium max-md:text-sm'>{description}</p>
      <p className='pt-4 text-base font-normal max-w-[431px] opacity-70 max-lg:mx-auto max-md:max-w-none max-md:text-sm max-md:w-full'>{footerPera}</p>
    </div>
  )
}
export default CommonDescription
