import React from 'react'
import { Link, Outlet } from 'react-router'

const layout = () => {
    return (
        <div className='m-10'>
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-5xl text-gray-50 font-knewave'>Friends Connect</h1>

                <Link to={'/'}>login instead</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default layout
