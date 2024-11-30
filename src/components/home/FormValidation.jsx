import React, { useState } from 'react'
import Swal from 'sweetalert2'
const FormValidation = () => {
    const formData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkBox: false,
        select: "ENG"
    }
    const [value, setValue] = useState(formData)
    const [error, setError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [confirmShowPassword, setConfirmShowPassword] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault();
        setError(true)
        if (
            value.name !== '' &&
            value.email !== '' &&
            value.password !== '' &&
            value.confirmPassword !== '' &&
            value.select !== '' &&
            value.checkBox !== ''
        ) {
            setValue(formData)
            setError(false)
            console.log(value)
            Swal.fire({
                title: 'success',
                text: 'Do you want to continue',
                icon: "success",
                confirmButtonText: 'Yes'
            })
        }
    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <form className='w-full max-w-[700px]'>
                <div className='w-full'>
                    <input className='w-full' type="text" placeholder='Enter Your Name' onChange={(e) => setValue({ ...value, name: e.target.value })} value={value.name} />
                    <p>{error && !value.name ? "Name is requried" : ""}</p>
                </div>
                <div>
                    <input className='w-full' type="email" placeholder='Enter Your E-mail' onChange={(e) => setValue({ ...value, email: e.target.value })} value={value.email} />
                    <p>{error && !value.email ? "Email is requried" : ""}</p>
                </div>

                <div className='pt-2.5'>
                    <div className='flex justify-between items-center w-full h-11 border border-gray-300 rounded px-2'>
                        <input className='!outline-none !p-0 !m-0 !border-none !bg-transparent' type={showPassword ? "text" : "password"} placeholder='Enter Your Password' onChange={(e) => setValue({ ...value, password: e.target.value })} value={value.password} />
                        <p onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "hide" : "show"}
                        </p>
                    </div>
                    <p>{error && !value.password ? "Password is requried" : ""}</p>
                </div>

                <div className='pt-2.5'>
                    <div className='flex justify-between items-center w-full h-11 border border-gray-300 rounded px-2'>
                        <input className='!outline-none !p-0 !m-0 !border-none !bg-transparent' type={confirmShowPassword ? "text" : "password"} placeholder='Confirm Your Password' onChange={(e) => setValue({ ...value, confirmPassword: e.target.value })} value={value.confirmPassword} />
                        <p onClick={() => setConfirmShowPassword(!confirmShowPassword)}>
                            {confirmShowPassword ? "hide" : "show"}
                        </p>
                    </div>
                    <p>{error && !value.confirmPassword ? "Confirm password is requried" : ""}</p>
                </div>

                <div className='pt-2.5'>
                    <select className='w-1/4 h-10 pl-2 text-white bg-black' onChange={(e) => setValue({ ...value, select: e.target.value })} value={value.select}>
                        <option value="ENG">ENG</option>
                        <option value="HINDI">HINDI</option>
                    </select>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='flex gap-2 items-center'>
                        <input
                            type="checkbox"
                            checked={value.checkBox}
                            onChange={(e) => setValue({ ...value, checkBox: e.target.checked })}
                            id="checkbox"
                        />
                        <label htmlFor="checkbox">I agree</label>
                    </div>
                    <p>{error && !value.checkBox ? 'Checkbox is required' : ''}</p>
                </div>
                <button onClick={submitHandler} className='px-5 py-3 border border-red-500 mt-5 max-w-60'>Submit</button>
            </form>
        </div>
    )
}

export default FormValidation
