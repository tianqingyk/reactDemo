import React from "react"
import './Death.css'
import Navbar from "../../component/Navbar/Navbar"
import ImageBlock from "./Blocks/ImageBlock/ImageBlock"
import VideoBlock from "./Blocks/VideoBlock/VideoBlock"
import GalleryNavBar from "../../component/GalleryNavBar/GalleryNavBar"

const Death = () => {

  return (
    <>
      <VideoBlock />
      <ImageBlock />
      <GalleryNavBar currentPage="/death" />
      <Navbar currentPage="/death" />
    </>
  )
}

export default Death