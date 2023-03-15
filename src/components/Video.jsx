import React from 'react'
import ReactPlayer from 'react-player'
import videorec from '../assets/base/recordDemo.mp4'


const Video = () => {
  return (
    <div className='player-wrapper flex flex-col h-auto'>
      <div> <ReactPlayer
        className='react-player  '
        url='https://twitch.tv/sebastiangimenezok'
        width='100%'
        height='100%'
        controls
      /> </div>
      <div>  <ReactPlayer
        className='react-player'
        url={videorec}
        width='100%'
        height='100%'
        controls /></div>


    </div>
  )
}

export default Video