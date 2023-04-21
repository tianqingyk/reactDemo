import React, { useState } from "react"
import './ClickButton.css'
import TextDiv from "../TextDiv/TextDiv"
import { Link } from "react-router-dom"


const ClickButton = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    console.log("Div clicked")
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const divStyle = {
    padding: "5px",
    backgroundColor: !isHovered ? "#111111" : "#fff",
    color: !isHovered ? "#fff" : "#000",
    cursor: "pointer",
    fontFamily: 'venir-lt-w01_35-light1475496,sans-serif'
  }

  return (
    <Link to={link}>
      <div
        style={divStyle}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <p style={{
          textAlign: 'center',
          verticalAlign: 'middle'
        }}>CLICK HERE</p>
      </div>
    </Link>
  )
}

export default ClickButton



