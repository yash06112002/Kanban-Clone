import { BiPencil } from 'react-icons/bi'
import { MdOutlineAttachment } from 'react-icons/md'
import { BiPlus } from 'react-icons/bi'

const ProjectBar = () => {
    return (
        <div className='h-20 flex md:justify-between'>
            <div className='flex place-items-center space-x-2 md:w-1/2'>
                <h1 className='md:text-4xl sm:text-md inline-block align-middle font-semibold md:h-10 h-8 ml-7'>Mobile App</h1>
                {/* <div className='sm:flex sm:justify-between'> */}
                <BiPencil className='text-2xl bg-violet-300 rounded-lg text-violet-800 p-1' />
                <MdOutlineAttachment className='text-2xl bg-violet-300 rounded-lg text-violet-800 p-1' />
                {/* </div> */}
            </div>
            <div className='flex mr-5  w-1/2 justify-end items-center gap-5'>
                <BiPlus className='text-2xl bg-violet-300 rounded-lg text-violet-800 p-1' />
                <h2 className='md:text-2xl text-md text-violet-800'>Invite</h2>
                <div className='flex relative md:w-40 w-20 md:flex'>
                    <img src='./img1.png' className='h-10 '></img>
                    <img src='./img2.png' className='h-10 absolute ml-8'></img>
                    <img src='./img3.png' className='h-10 absolute ml-16'></img>
                    <img src='./img4.png' className='h-10 absolute ml-24'></img>
                    <p className='h-10 w-10 absolute ml-32 bg-red-200 rounded-3xl text-center align-middle text-sm p-2 text-red-600 font-medium border-white border-solid border-2'>+2</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectBar