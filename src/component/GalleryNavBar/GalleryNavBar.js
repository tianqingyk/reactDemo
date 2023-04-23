import React from "react"
import "./GalleryNavBar.css"
import PresentAnimation from "../PresentAnimation/PresentAnimation"

const GalleryNavBar = () => {

  const textArry = ["Death in Venice · 死于威尼斯", "Deconstruction Bushido · 解构武士道", "Salome 莎乐美"]
  return (
    <div className="gallery-div">
      <div className="gallery-nar-bar">
        {textArry.map((text, index) =>
          <PresentAnimation mainWidth={333} childWidth={333} childHeight={50} maskLv={999 - 2 * index}>
            <div className="gallery-text-div" >
              <sapn>{text}</sapn>
            </div>
          </PresentAnimation>
        )}
      </div>
    </div >
  )
}

export default GalleryNavBar
