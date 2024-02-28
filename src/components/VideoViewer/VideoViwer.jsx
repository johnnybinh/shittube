import Video from './Video'
import placeholder from '../../assets/placeholder-image.jpg'
function VideoViwer() {
  return (
    <div className='w-[100%]  flex flex-wrap position-relative  bg-[#0F0F0F]'>
      <Video videoLink={placeholder} title="placeholder"/>
      <Video videoLink={placeholder} title="placeholder"/>
      <Video videoLink={placeholder} title="placeholder"/>
      <Video videoLink={placeholder} title="placeholder"/>
      <Video videoLink={placeholder} title="placeholder"/>
      <Video videoLink={placeholder} title="placeholder"/>
      <Video videoLink={placeholder} title="placeholder"/>
      <Video videoLink={placeholder} title="placeholder"/>n
    </div>
  )
}

export default VideoViwer