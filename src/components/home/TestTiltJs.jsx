import React from 'react'
import { Tilt } from 'react-tilt'

const TestTiltJs = () => {
  const defaultOptions = {
    reverse: false,
    max: 40,
    perspective: 2000,
    scale: 1.01,
    speed: 100,
    transition: true,
    reset: true,
  }
  return (
    <>
      <h2 className='text-5xl text-black text-center pb-5 pr-10'>Tilt js</h2>
      <div className='flex items-center justify-center flex-col'>
        <Tilt options={defaultOptions}>
          <div className='w-96 h-96'>
            <div className='h-[300px] w-[300px] bg-green-800 flex items-center justify-center'>
              <h1 className='text-5xl'> 👽</h1>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  )
}

export default TestTiltJs

