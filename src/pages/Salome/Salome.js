import React from "react"
import './Salome.css'
import Navbar from "../../component/Navbar/Navbar"
import SalBlock1 from "./Block1/SalBlock1"
import SalBlock2 from "./Block2/SalBlock2"
import GalleryNavBar from "../../component/GalleryNavBar/GalleryNavBar"

const Salome = () => {

  return (
    <>
      <SalBlock1 />
      <SalBlock2 />
      <GalleryNavBar currentPage="/salome" />
      <Navbar currentPage="/salome" />
    </>
  )
}

export default Salome