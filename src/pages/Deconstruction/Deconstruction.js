import React from "react"
import './Deconstruction.css'
import Navbar from "../../component/Navbar/Navbar"
import ImageBlock1 from "./Blocks/ImageBlock1/ImageBlock1"
import GalleryNavBar from "../../component/GalleryNavBar/GalleryNavBar"

const Deconstruction = () => {

  return (
    <>
      <ImageBlock1 />
      <GalleryNavBar currentPage="/deconstruction" />
      <Navbar currentPage="/deconstruction" />
    </>
  )
}

export default Deconstruction