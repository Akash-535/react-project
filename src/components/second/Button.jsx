import React from 'react'
import { useNavigate } from 'react-router-dom';
const Button = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/")}>Click me!</button>
        </div>
    )
}

export default Button
