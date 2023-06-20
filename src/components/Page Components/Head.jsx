import { RxMagnifyingGlass } from 'react-icons/rx'
import { RxAvatar } from 'react-icons/rx'
import { BiCalendar } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BsBell } from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'

const Head = () => {
    return (
        <div className='flex justify-between ml-10 h-12  mb-8'>
            <div className=' h-10 m-3 bg-zinc-200 flex align-middle'>
                <RxMagnifyingGlass className='m-2 mt-3 w-5 text-center' />
                <input type='text' placeholder='Search for anything...' className='ml-2 h-10 w-30 placeholder:text-left bg-zinc-200 mt-0' />
            </div>
            <div className='flex w-max'>

                <div className='sm:w-1/3 w-2/3 flex flex-end h-10 m-5 flex-row-reverse'>
                    <BsBell className='m-2 align-middle  text-xl' />
                    <BiMessageSquareDetail className='m-2 align-middle text-xl' />
                    <BiCalendar className='m-2 align-middle text-xl' />
                </div>
                <div className='w-2/3 flex-end flex flex-row-reverse text-center h-10 m-5'>
                    {/* <RxAvatar className='ml-5 mr-5 m-3 text-3xl' /> */}
                    <AiOutlineDown className='m-2 align-middle text-xl' />
                    <img src='./img1.png' className='h-10 '></img>
                    <div className='flex flex-col hidden sm:block'>
                        <p className='text-base w-max'>Yash Kansara</p>
                        <p className='text-sm'>Surat, India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Head