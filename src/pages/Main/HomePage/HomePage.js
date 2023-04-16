import React from "react"
import './HomePage.css'
import TransparentDiv from "../../../component/TransparentDiv/TransparentDiv"
import Block1 from "./Block1"
import Block2 from "./Block2"
import Block3 from "./Block3"

const HomePage = () => {
  return (
    <div className='home-page'>
      <TransparentDiv className='transparentDivStyle' backgroundPositionY='30%' />
      <Block1 />
      <Block2 />
      <Block3 />
      <TransparentDiv className='transparentDivStyle2' backgroundPositionY='30%' />
    </div >
  )
}

export default HomePage