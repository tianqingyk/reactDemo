import React, { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import './VideoPlayer.css'

const VideoPlayer = () => {
  return (
    <div className='video-block-style'>
      <div className='vide-player'>
        <ReactPlayer controls url={require('../../UI/death/video.mp4')} width={925} height={500} />
      </div>
    </div>
  )
}

export default VideoPlayer
