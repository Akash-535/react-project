import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [value, setValue] = useState('AKASH KHICHER')

    const toggleHandler = () => {
        setValue((myName) => (myName === 'AKASH KHICHER' ? 'AKASH BISHNOI' : 'AKASH KHICHER'))
    }
    const [valueEffect, setValueEffect] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setValueEffect(valueEffect + 1 === 11 ? 0 : valueEffect + 1)

        }, 1000)
    },)

    return (
        <>
            <h2 className='text-5xl text-black text-center pb-6 pt-14'>Use State</h2>
            <div className='flex flex-col items-center justify-center gap-3'>
                <p className='text-3xl text-green-500 text-center'>{value}</p>
                <div className='flex gap-10 text-center'>
                    <button onClick={toggleHandler} className='text-xl text-center flex items-center justify-center py-3 px-4 border border-black rounded-xl'>Toggle Name</button>
                </div>
                <h2 className='text-5xl text-black text-center pt-7'>Use Effect</h2>
                <p className='text-3xl text-green-500 text-center pb-6'>{valueEffect}</p>
            </div>
        </>
    )
}

export default Hooks
