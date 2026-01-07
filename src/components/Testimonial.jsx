import React from 'react'
import { MdOutlineArrowForward } from "react-icons/md";

const Testimonial = () => {
  return (
    <div className='h-full '>
        <div className='flex flex-col items-center gap-3 '>
        <div className='w-60 h-[50vh]'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1651828855150-ba40f6870a53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBjbG90aGVzfGVufDB8MXwwfHx8MA%3D%3D" alt="" />
        </div>
        <div className=' w-60 flex flex-col items-center gap-2'>
            <h2 className='text-black font-medium'>Spring collection</h2>
            <button className='flex items-center gap-2 px-10 py-2 bg-black text-white rounded-full active:scale-95 cursor-pointer'>Shop now <span><MdOutlineArrowForward className='h-5 w-5'/></span></button>
        </div>
    </div>
    </div>
  )
}

export default Testimonial