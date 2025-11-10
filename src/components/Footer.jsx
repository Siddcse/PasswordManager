import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center py-4 fixed bottom-0 w-full'>
      <div className="logo font-bold text-white text-2xl">
        <span className='text-green-500'> &lt;</span>
        <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
      </div>
      <p className='flex items-center gap-2 text-sm mt-2'>
        Created with <img src="icons/heart.png" alt="heart" className='w-4 h-4' /> by Siddharth
      </p>
    </div>
  )
}

export default Footer
