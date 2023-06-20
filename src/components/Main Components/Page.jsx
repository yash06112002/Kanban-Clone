import React from 'react'
import Head from '../Page Components/Head'
import ProjectBar from '../Page Components/ProjectBar'
import ProjectBar2 from '../Page Components/ProjectBar2'
import Board from '../Page Components/TodoBoard/Board'

const Page = () => {
    return (
        <div className='md:w-5/6 md:mr-5'>
            <Head />
            <ProjectBar />
            <ProjectBar2 />
            <Board />
        </div>
    )
}

export default Page