import React from 'react'
import Logo from '../Side Components/Logo'
import Nav from '../Side Components/Nav'
import Projects from '../Side Components/Projects'
import Thoughts from '../Side Components/Thoughts'

const Sidebar = () => {
    return (
        <div className='md:w-1/6 flex flex-col'>
            <Logo />
            <Nav />
            <Projects />
            <Thoughts />
        </div>
    )
}

export default Sidebar