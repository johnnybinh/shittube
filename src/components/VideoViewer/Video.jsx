import React from 'react'

function Video(props) {
  return (
    <div className='w-1/4 h-[25vh] border-[10px] border-transparent pt-10 '>
      <img src={props.videoLink} alt="" className='w-[100%] h-[25vh] object-cover' />
      <h1 className='font-bold text-white text-2xl'>{props.title}</h1>
    </div>
  )
}

export default Video