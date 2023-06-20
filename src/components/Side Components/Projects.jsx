import { BsDot } from 'react-icons/bs';
import { LuPlusSquare } from 'react-icons/lu';
const Projects = () => {
    return (
        <div className='mt-10 ml-5 hidden sm:block pr-2'>
            <div className='flex md:flex  justify-between  mb-3'>
                <p className="text-xs">My Projects</p>
                <LuPlusSquare className='md:flex ' />
            </div>
            <div className="flex md:flex-wrap items-center font-light mb-3">
                <BsDot className='text-emerald-600' />
                <p className='ml-2 hidden sm:block '>Mobile App</p>
            </div>
            <div className="flex items-center font-light mb-3">
                <BsDot className='text-amber-400' />
                <p className='ml-2 hidden sm:block'>Website Redesign</p>
            </div>
            <div className="flex items-center font-light mb-3">
                <BsDot className='text-violet-400' />
                <p className='ml-2 hidden sm:block'>Design System</p>
            </div>
            <div className="flex items-center font-light mb-3">
                <BsDot className='text-cyan-400' />
                <p className='ml-2 hidden sm:block'>Wireframes</p>
            </div>
        </div>
    )
}

export default Projects