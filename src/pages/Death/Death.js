import React from "react"
import './Death.css'
import Navbar from "../../component/Navbar/Navbar"
import ImageBlock from "./Blocks/ImageBlock/ImageBlock"
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer"

const Death = () => {

  return (
    <>
      <VideoPlayer />
      <ImageBlock />
      <Navbar currentPage="/death" />
    </>
  )
}

export default Death