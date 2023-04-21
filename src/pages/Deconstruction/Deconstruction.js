import React from "react"
import './Deconstruction.css'
import Navbar from "../../component/Navbar/Navbar"
import ImageView from "../../component/ImageView/ImageView"
import ImageBlock1 from "./Blocks/ImageBlock1/ImageBlock1"

const Deconstruction = () => {

  return (
    <>
      <ImageBlock1 />
      <Navbar currentPage="/deconstruction" />
    </>
  )
}

export default Deconstruction