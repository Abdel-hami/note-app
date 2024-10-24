import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:5000/api/auth/register", {name,email,password});
            if(response.data.success){
                navigate("/login")
            }
        } catch (err){
            console.error(err)
        }
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='border shadow p-6 w-80 bg-white'>
                <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-gray-700'>Name</label>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            className='w-full px-3 border py-2'
                            placeholder='Enter Your Name'
                            required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700'>Email</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Your Email'
                            className='w-full px-3 border py-2'
                            required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-gray-700'>Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter Your password'
                            className='w-full px-3 border py-2'
                            required />
                    </div>
                    <div className='mb-4'>
                        <button type='submit' className='w-full bg-teal-600 text-white p-2'>Sign Up</button>
                        <p className='text-center'>
                            Already Have Account? <Link to={"/login"}>Log In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp