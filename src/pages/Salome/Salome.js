import React, { useEffect } from "react"
import './Salome.css'
import Navbar from "../../component/Navbar/Navbar"
import SalBlock1 from "./Block1/SalBlock1"
import SalBlock2 from "./Block2/SalBlock2"
import GalleryNavBar from "../../component/GalleryNavBar/GalleryNavBar"

const Salome = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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