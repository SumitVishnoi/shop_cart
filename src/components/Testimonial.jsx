import React from 'react'
import { MdOutlineArrowForward } from "react-icons/md";

const Testimonial = ({image, title}) => {
  return (
    <div className='h-full '>
        <div className='flex flex-col items-center gap-3 '>
        <div className='w-[20vw] h-[50vh] '>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className=' w-60 flex flex-col items-center gap-2'>
            <h2 className='text-black font-medium line-clamp-1'>{title}</h2>
            <button className='flex items-center gap-2 px-10 py-2 bg-black text-white rounded-full active:scale-95 cursor-pointer'>Shop now <span><MdOutlineArrowForward className='h-5 w-5'/></span></button>
        </div>
    </div>
    </div>
  )
}

export default Testimonial