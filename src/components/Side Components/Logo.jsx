import React from 'react'
import { FaLessThan } from 'react-icons/fa'
import { TbMathGreater } from 'react-icons/tb'
import { RxDotFilled } from 'react-icons/rx'
const Logo = () => {
    return (
        <div className='flex m-3 w-33 h-12 justify-between max-[600px]:flex-column'>
            <span className='relative'>
                <RxDotFilled className='absolute mt-0.5 text-violet-500' />
                <RxDotFilled className='absolute text-violet-800 z-100 mb-0.5 ml-0.5' />
                <RxDotFilled className='absolute  text-violet-300 -z-10   ml-1 mt-0.5' />
            </span>
            <span className='md:text-center font-sans md:font-semibold hidden min-[950px]:block '>Project M.</span>
            <span className='object-center font-sans font-thin flex align-middle flex-row-reverse'>
                <FaLessThan className='hidden sm:block mt-2 text-center font-light' />
                <TbMathGreater className='max-[600px]:flex hidden mt-5' />
            </span>
        </div>
    )
}

export default Logo