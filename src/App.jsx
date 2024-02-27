import { useState } from 'react'
import YoutubeNavbar from './components/YoutubeNavbar'
import LeftToolBar from './components/LeftToolBar'
import './App.css'
import VideoViwer from './components/VideoViewer/VideoViwer'

function App() {
  return(
    <>
      <YoutubeNavbar></YoutubeNavbar>
      <div className='flex'>
        <LeftToolBar/>
        <VideoViwer/>
      </div>

    </>
  )
}

export default App
