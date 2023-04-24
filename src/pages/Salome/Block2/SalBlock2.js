import React from "react"
import "./SalBlock2.css"

import SAL2 from "../../../UI/salome/SAL2.png"
import SAL3 from "../../../UI/salome/SAL3.png"
import SAL5 from "../../../UI/salome/SAL5.png"
import SAL6 from "../../../UI/salome/SAL6.png"
import SAL8 from "../../../UI/salome/SAL8.png"
import SAL9 from "../../../UI/salome/SAL9.png"
import SAL10 from "../../../UI/salome/SAL10.png"
import SAL11 from "../../../UI/salome/SAL11.png"


import sal1 from "../../../UI/salome/sal1.jpg"
import sal2 from "../../../UI/salome/sal2.jpg"
import sal3 from "../../../UI/salome/sal3.jpg"
import sal4 from "../../../UI/salome/sal4.jpg"
import sal5 from "../../../UI/salome/sal5.jpg"
import sal6 from "../../../UI/salome/sal6.jpg"
import sal7 from "../../../UI/salome/sal7.jpg"
import sal8 from "../../../UI/salome/sal8.jpg"
import sal9 from "../../../UI/salome/sal9.jpg"
import sal10 from "../../../UI/salome/sal10.jpg"
import sal11 from "../../../UI/salome/sal11.jpg"
import ImageView from "../../../component/ImageView/ImageView"
import ImageFrame from "../../../component/ImageFrame/ImageFrame"

const SalBlock2 = () => {
  return (
    <>
      <div className="sal-img-block" >
        <div className="sal-grid-container1">
          {/* <ImageView src={sal1} preview={sal1} width={444} height={666} /> */}
          <ImageView src={sal1} width={444} height={666} />
          <ImageView src={sal2} preview={SAL2} width={442} height={312} />
          <ImageView src={sal3} preview={SAL3} width={444} height={312} />
          <ImageView src={sal4} preview={sal4} width={446} height={297} />
          <ImageView src={sal5} preview={SAL5} width={449} height={297} />
          <ImageView src={sal6} preview={SAL6} width={449} height={316} />
        </div>
        <div className="sal-grid-container2">
          {/* <ImageView src={sal7} preview={sal7} width={636} height={424} /> */}
          <ImageView src={sal7} width={636} height={424} />
          <ImageView src={sal8} preview={SAL8} width={637} height={431} />
          <ImageView src={sal9} preview={SAL9} width={648} height={437} />
          <ImageView src={sal10} preview={SAL10} width={647} height={425} />
          <ImageView src={sal11} preview={SAL11} width={646} height={462} />
        </div>
      </div>
    </>
  )
}

export default SalBlock2