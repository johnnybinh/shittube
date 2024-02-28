import React from 'react'
import { HiOutlineViewList } from "react-icons/hi";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";
import { IoLogoYoutube } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

function YoutubeNavbar() {
  return (
    <div className='h-14 bg-[#0F0F0F] flex gap-[5px] items-center w-[100%]'>
        <button className='ml-[15px] mr-[5px] hover:bg-white/25 h-[50px] rounded-full'>
          <HiOutlineViewList style={{color: "white"}} className='size-10 fill-white'/>
        </button>
        <div className='flex w-[120px] h-100% items-center justify-center gap-[5px] '>
          <IoLogoYoutube className='size-10  fill-red-600' />
          <h1 className='font-bold  text-white text-xl'>ShitTube</h1>
        </div> 
        <form className='flex w-[550px] ml-[25vw]'action="">
          <input style ={{outline:"none"}} className="w-[500px] h-[40px] bg-[#121212] border-[2.5px] border-[#2C2C2C] text-white indent-5 rounded-l-full " type="text" placeholder='search!' />
          <button className='flex items-center justify-center bg-[#222222] w-[40px] h-[40px] rounded-r-full ' type="submit">
            <SlMagnifier className='fill-white size-5'/>
          </button>
        </form>
        <button className='w-[40px] h-[40px] flex justify-center items-center hover:bg-white/10 rounded-full'>
          <FaMicrophone className="fill-white size-5" />
        </button>
        <button className='w-[50px] h-[50px] flex justify-center items-center hover:bg-white/10 rounded-full ml-[25%]'>
          <MdOutlineVideoCameraBack className="fill-white size-6" />
        </button>
        <button className='w-[50px] h-[50px] flex justify-center items-center hover:bg-white/10 rounded-full '>
          <FaBell className="fill-white size-5" />
        </button>
        <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/381449714_1489944281826386_8222599421983163785_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeHAXW4N1njiBC-qj2ug02MFG3y0_kQLENkbfLT-RAsQ2Z_4haWDwFtfZ4I2BZu3ubNq6pV2MFTP6kcZw83dS0i0&_nc_ohc=rWqan_6IgTQAX_rVnXh&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCQaM9hf30SZGdvC5W8nvytUIdMJkxfN4rfo9o9gE4m7Q&oe=65E31EC7" alt="" className='w-[30px] h-[30px] rounded-full' />

    </div>
  )
}

export default YoutubeNavbar