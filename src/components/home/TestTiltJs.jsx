import React from 'react'
import { Tilt } from 'react-tilt'
import Lottie from 'lottie-react'
import hahaha from '../../assets/lottie/hahaha.json'

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
      <h2 className='text-5xl text-black text-center pb-5 pr-14'>Tilt js and Lottie</h2>
      <div className='flex items-center justify-center flex-col'>
        <Tilt options={defaultOptions}>
          <div className='w-96 h-96'>
            <div className='h-[300px] w-[300px] bg-green-800 flex items-center justify-center'>
              <div className='max-w-[200px]'>
                <Lottie animationData={hahaha} loop={true} />
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  )
}

export default TestTiltJs

