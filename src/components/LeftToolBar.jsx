import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";

function LeftToolBar() {
  return (
    <div className='h-[100vh] w-[4rem] bg-[#0F0F0F] flex-wrap justify-center items-start'>
      <div className='flex pt-5 mb-5 justify-center items-center flex-col w-4rem'>
        <button className='mb-2.5 size-10 hover:bg-white/20 rounded-full'>
          <center><IoHomeSharp  className='fill-white size-6' /></center>
        </button> 
        <h1 className='text-white'>Home</h1>
      </div>
      <div className='flex pt-5 mb-5 justify-center items-center flex-col w-4rem'>
        <button className='mb-2.5 size-10 hover:bg-white/20 rounded-full'>
          <center><SiYoutubeshorts  className='fill-white size-6' /></center>
        </button> 
        <h1 className='text-white'>Short</h1>
      </div>
      <div className='flex pt-5 mb-5 justify-center items-center flex-col w-4rem'>
        <button className='mb-2.5 size-10 hover:bg-white/20 rounded-full'>
          <center><CiYoutube  className='fill-white size-6' /></center>
        </button> 
        <h1 className='text-white'>Sub</h1>
      </div>
    


    </div>
  )
}

export default LeftToolBar
