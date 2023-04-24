import React, { forwardRef, useEffect } from "react"
import './HomePage.css'
import TransparentDiv from "../../component/TransparentDiv/TransparentDiv"
import Block1 from "./Block1"
import Block2 from "./Block2"
import Block3 from "./Block3"
import Navbar from "../../component/Navbar/Navbar"

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='home-page'>
        <TransparentDiv className='transparentDivStyle' backgroundPositionY='30%' />
        <Block1 />
        <Block2 />
        <Block3 />
        <div className="divStyle4" />
        <TransparentDiv className='transparentDivStyle2' backgroundPositionY='30%' />
      </div >
      <Navbar currentPage="/" />
    </>

  )
}

export default HomePage