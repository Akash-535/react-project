import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = () => {
  return (
    <div className='App'>
      <h2 className='text-5xl text-black text-center pb-10 pr-10'>Type Writer</h2>
      <p className='text-7xl text-green-500 text-center pb-56'><Typewriter
        words={['Future is coding', 'Join Radial Code now']}
        loop={-5}
        cursor
        cursorStyle='...'
        typeSpeed={200}
        deleteSpeed={50}
        delaySpeed={2000}
      />
      </p>
    </div>
  )
}

export default TypeWriter
