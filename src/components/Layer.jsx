import React from 'react'
import { useNavigate } from 'react-router-dom'

const Layer = () => {
  const navigate = useNavigate()
  return (
    <div className='p-10'>
        <div className='bg-[#929597] flex'>
        <div className=' w-[50%] h-[60vh]'>
            <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1760179325525-ec3edff26677?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ludGVyJTIwY2xvdGhlcyUyMGNvbGxlY3Rpb258ZW58MHwxfDB8fHww" alt="" />
        </div>
        <div className='flex flex-col items-center justify-center gap-2 w-[60%]'>
            <h2 className='text-black font-semibold text-xl'>Best Minimal Collection</h2>
            <p className='text-center w-90 text-zinc-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error a maiores ex possimus nihil atque!</p>
            <button onClick={()=> navigate("/product")} className='flex items-center px-10 py-2 bg-black text-white rounded-full cursor-pointer active:scale-95'>Shop now</button>
        </div>
    </div>
    </div>
  )
}

export default Layer