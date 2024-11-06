import React from 'react'

const CommonHeading = ( {heading , footer}) => {
  return (
    <div>
      <h2 className='text-6xl font-bold max-w-[786px] mx-auto text-center max-lg:text-5xl max-md:text-4xl max-sm:text-3xl'>{heading}</h2>
      <a href='#' className='text-[38px] font-bold max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>{footer}</a>
    </div>
  )
}

export default CommonHeading
