import { BiFilterAlt } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'
import { MdTableRows } from 'react-icons/md'
import { RxDividerVertical } from 'react-icons/rx'
import { BsUiRadiosGrid } from 'react-icons/bs'
import { SlCalender } from 'react-icons/sl'
import { MdOutlineGroup } from 'react-icons/md'

const ProjectBar2 = () => {
    return (
        <div className=' ml-10 mr-10 h-20 flex justify-between'>
            <div className='flex place-items-center space-x-2 basis-1/4 justify-around'>
                <div className='flex place-items-center justify-around border-slate-300 border-2 rounded-md w-28 h-10 '>
                    <BiFilterAlt className='font-medium text-slate-500' />
                    <p className=' font-medium text-slate-500'>Filter</p>
                    <BsChevronDown className='font-medium text-slate-500' />
                </div>
                <div className='flex place-items-center justify-around border-slate-300  border-2 rounded-md w-28 h-10 '>
                    <SlCalender className='font-medium text-slate-500' />
                    <p className=' font-medium text-slate-500'>Today</p>
                    <BsChevronDown className='font-medium text-slate-500' />
                </div>
            </div>
            <div className='flex mr-5  basis-1/6 justify-end items-center'>
                <div className='flex place-items-center justify-around border-2 border-slate-300 rounded-md w-20 h-10 '>
                    <MdOutlineGroup className='font-medium text-slate-500' />
                    <p className=' font-medium text-slate-500'>Share</p>
                </div>
                <RxDividerVertical className='font-medium  h-10 w-10 text-slate-500' />
                <div className='flex place-items-center justify-around  space-x-2  w-24 h-10 '>
                    <MdTableRows className='text-sm border-2 rounded-md h-8 p-1 w-8 bg-violet-700 text-white' />
                    <BsUiRadiosGrid className='font-medium  h-8 p-2 w-8 text-slate-500' />
                </div>

            </div>
        </div>
    )
}

export default ProjectBar2