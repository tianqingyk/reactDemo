import React from "react"
import './Salome.css'
import Navbar from "../../component/Navbar/Navbar"
import SalBlock1 from "./Block1/SalBlock1"


const Salome = () => {

  return (
    <>
      <SalBlock1 />
      <Navbar currentPage="/salome" />
    </>
  )
}

export default Salome