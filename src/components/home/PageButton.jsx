import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageButton = () => {
    const navigate = useNavigate()
    const goToDashboard = () => {
        navigate('/dashboard');
    }
    return (
        <div >
            <button onClick={goToDashboard} className='px-4 py-3 bg-red-500 text-left text-white text-xl'>Dashboard</button>
        </div >
    )
}

export default PageButton
