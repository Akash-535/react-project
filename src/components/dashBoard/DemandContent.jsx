import React from 'react'
import { DASHBOARD_CARS_DATA } from '../common/Helper'
import { Tilt } from 'react-tilt'
const DemandContent = () => {
    return (
        <div>
            <div className='flex justify-center items-center overflow-hidden flex-wrap py-10 gap-10'>
                {DASHBOARD_CARS_DATA.map((data, i) => (
                    <div key={i} className='w-5/12 max-xl:w-full flex justify-center gap-0 px-3 items-center flex-wrap'>
                        <Tilt className="flex justify-center items-center">
                            <div className='border bg-rose-700 size-60 px-60 max-lg:px-48 max-md:px-40 justify-center items-center flex w-6/12 text-white text-nowrap text-5xl font-bold hover:bg-gradient-to-r hover:from-pink-600 hover:via-blue-900 hover:to-orange-800 duration-500 ease-linear'>{data.text}</div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DemandContent
