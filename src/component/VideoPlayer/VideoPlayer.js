import React, { useRef } from 'react'
import Player from '@pansy/react-aliplayer'
import './VideoPlayer.css'

const VideoPlayer = () => {
  const playerRef = useRef(null)

  return (
    <div className='video-block-style'>
      <div className='vide-player'>
        <Player
          source={require('../../UI/death/video.mp4')}
          hideControlbar={true}
          style={{ width: 925, height: 500 }}
          ref={playerRef}
        />
      </div>
    </div>

  )
}

export default VideoPlayer
