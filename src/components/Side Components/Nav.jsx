import React from 'react'
import { BsGrid } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { BiGroup } from 'react-icons/bi';
import { FaTasks } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Nav = () => {
    return (
        <div className='w-full md:mt-8 ml-5 hidden sm:block'>
            <div className="flex items-center font-light text-base mb-3">
                <BsGrid className=' mr-4 ' />
                <p className=' sm:flex hidden'>Home</p>
            </div>
            <div className="flex items-center font-light text-base mb-3">
                <BiMessageDetail className='mr-4 ' />
                <p className=' sm:flex hidden'>Messages</p>
            </div>
            <div className="flex items-center font-light text-base mb-3">
                <FaTasks className='mr-4 ' />
                <p className=' sm:flex hidden'>Tasks</p>
            </div>
            <div className="flex items-center font-light text-base mb-3">
                <BiGroup className='mr-4 ' />
                <p className=' sm:flex hidden'>Members</p>
            </div>
            <div className="flex items-center font-light text-base mb-3">
                <FiSettings className='mr-4 ' />
                <p className=' sm:flex hidden'>Settings</p>
            </div>
        </div>
    )
}

export default Nav