import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardButton = () => {
    const navigate = useNavigate()
    const gotoHome = () => {
        navigate('/');
    }
    return (
        <div >
            <button onClick={gotoHome} className='px-4 py-3 bg-red-500 text-right mt-5 ml-5 text-white text-xl'>Dashboard</button>
        </div >
    )
}

export default DashboardButton