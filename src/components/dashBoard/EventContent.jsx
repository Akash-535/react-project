import React from 'react'
import { DASHBOARD_CARS_DATA } from '../common/Helper'
import { Tilt } from 'react-tilt'

const EventContent = () => {
    return (
        <div>
            <div className='flex justify-center items-center overflow-hidden flex-wrap py-10 gap-10'>
                {DASHBOARD_CARS_DATA.map((data, i) => (
                    <div key={i} className='w-5/12 max-xl:w-full flex justify-center gap-0 px-3 items-center flex-wrap'>
                        <Tilt className="flex justify-center items-center">
                            <div className='border bg-red-600 size-60 px-60 max-lg:px-48 max-md:px-40 justify-center items-center flex w-6/12 text-white text-nowrap text-5xl font-bold hover:bg-gradient-to-r hover:from-blue-400 hover:via-green-500 hover:to-yellow-500 duration-500 ease-linear'>{data.text}</div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventContent
