import React, { useContext } from 'react'
import { MdOutlineArrowForward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Testimonial = ({image, title}) => {
  const navigate = useNavigate()
  return (
    <div className='h-full'>
        <div className='flex flex-col items-center gap-3 shadow-md shadow-gray-600 p-5 rounded'>
        <div className='w-[20vw] h-[50vh] '>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className=' w-60 flex flex-col items-center gap-2'>
            <h2 className='text-black font-medium line-clamp-1'>{title}</h2>
            <button onClick={()=> navigate('/product')} className='flex items-center gap-2 px-10 py-2 bg-black text-white rounded-full active:scale-95 cursor-pointer'>Shop now <span><MdOutlineArrowForward className='h-5 w-5'/></span></button>
        </div>
    </div>
    </div>
  )
}

export default Testimonial