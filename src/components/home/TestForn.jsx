import React, { useState } from 'react'

const TestForn = () => {
    const FormData = {
        name: '',
        email: ''
    }
    const [form, setForm] = useState(FormData);
    const [error, setError] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault()
        setError(true)
        if (
            form.name !== "" &&
            form.email !== "") {
            setError(false);
            setForm(FormData)
        }

    }
    return (
        <div>
            <form action="">
                <div>
                    <input type="text" placeholder='Enter name' onChange={(e) => setForm({ ...form, name: e.target.value })} value={form.name} />
                    <p>{error && !form.name ? "Fill the content" : ""}</p>
                </div>
                <div>
                    <input type="email" placeholder='Enter email' onChange={(e) => setForm({ ...form, email: e.target.value })} value={form.email} />
                    <p>{error && !form.email ? "Fill the content" : ""}</p>
                </div>
                <button onClick={submitHandler}>
                    submit
                </button>
            </form>
        </div>
    )
}

export default TestForn