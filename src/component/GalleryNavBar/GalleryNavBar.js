import React from "react"
import "./GalleryNavBar.css"
import PresentAnimation from "../PresentAnimation/PresentAnimation"
import { Link } from "react-router-dom"

const GalleryNavBar = ({ currentPage }) => {

  const textArry = ["Death in Venice · 死于威尼斯", "Deconstruction Bushido · 解构武士道", "Salome 莎乐美"]
  const linkArry = ["/death", "/deconstruction", "/salome"]
  return (
    <div className="gallery-div">
      <div className="gallery-nar-bar">
        {textArry.map((text, index) =>
          <PresentAnimation mainWidth={333} childWidth={333} childHeight={50} maskLv={999 - 2 * index}>
            <a
              href={linkArry[index] === currentPage ? "#" : linkArry[index]}
              className={linkArry[index] === currentPage ? "disabled" : ""}
            >
              <div className={` ${linkArry[index] !== currentPage ? "gallery-text-div" : " disable gallery-text-div-hover"}`} >
                <sapn>{text}</sapn>
              </div>
            </a>

          </PresentAnimation>
        )}
      </div>
    </div >
  )
}

export default GalleryNavBar
