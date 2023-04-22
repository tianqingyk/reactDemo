import React from "react"
import './Death.css'
import Navbar from "../../component/Navbar/Navbar"
import ImageBlock from "./Blocks/ImageBlock/ImageBlock"
import VideoBlock from "./Blocks/VideoBlock/VideoBlock"

const Death = () => {

  return (
    <>
      <VideoBlock />
      <ImageBlock />
      <Navbar currentPage="/death" />
    </>
  )
}

export default Death