import { AiFillBulb } from 'react-icons/ai';

const Thoughts = () => {
    return (
        <div className='justify-center mt-12 ml-3 mr-3 w-5/6 lg:flex hidden '>
            <h2 className='blur-sm text-center bg-zinc-200 absolute rounded-full w-20 h-20 -mt-10 ml-18'>
            </h2>
            <div className='z-10 bg-zinc-200 h-44 rounded-lg w-40'>
                <AiFillBulb className='-mt-6 ml-16 text-4xl text-amber-400' />
                <h2 className='z-100 text-center mt-6'>Thoughts Time</h2>
                <p className='text-xs mx-2 my-2 font-normal text-justify'>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                <input type='text' placeholder='Write a message' className='w-32 mt-2 ml-4  justify-center placeholder:text-center placeholder:text-black ' />
            </div>
        </div>
    )
}

export default Thoughts