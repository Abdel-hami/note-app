import React from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../context/ContextProvider'
const Navbar = () => {
    const user = useAuth();
    return (
        <nav className="flex bg-gray-800 p-4 items-center justify-between">
            <div className='text-xl font-bold text-white'>
                <Link to="/">Note App</Link>
            </div>
            <input
                type="text"
                placeholder='Search Notes'
                className='bg-gray-600 px-4 py-2 rounded'
            />
            <div>
                {/*!user*/}
                {
                    !0 ? (
                        <>
                            <Link to={"/login"} className='bg-blue-400 px-4 py-2 rounded mr-4'>Log In</Link>
                            <Link to={"/register"} className='bg-green-500 px-4  py-2 rounded mr-4'>Log In</Link>
                        </>
                    ) : (
                        <>
                            <span className="mr-4 text-white">{user.name}</span>
                            <button className='bg-red-500 px-4  py-2 rounded mr-4'>Logout</button>
                        </>

                    )
                }
            </div>
        </nav>
    )
}

export default Navbar