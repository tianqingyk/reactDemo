import React from "react"
import './ImageBlock.css'
import ImageView from "../../../../component/ImageView/ImageView"
import DL1 from "../../../../UI/death/DL-1.jpg"
import DL2 from "../../../../UI/death/DL-2.jpg"
import DL3 from "../../../../UI/death/DL-3.jpg"
import DL4 from "../../../../UI/death/DL-4.jpg"
import DL5 from "../../../../UI/death/DL-5.jpg"
import DL6 from "../../../../UI/death/DL-6.jpg"
import DL7 from "../../../../UI/death/DL-7.jpg"
import DL8 from "../../../../UI/death/DL-8.jpg"
import DL9 from "../../../../UI/death/DL-9.jpg"
import DL10 from "../../../../UI/death/DL-10.png"
import DL11 from "../../../../UI/death/DL-11.png"
import DL12 from "../../../../UI/death/DL-12.jpg"
import DL13 from "../../../../UI/death/DL-13.png"
import DL14 from "../../../../UI/death/DL-14.png"
import DL15 from "../../../../UI/death/DL-15.jpg"
import DL16 from "../../../../UI/death/DL-16.jpg"
import DL17 from "../../../../UI/death/DL-17.jpg"


import dl1 from "../../../../UI/death/dl1.jpg"
import dl2 from "../../../../UI/death/dl2.jpg"
import dl3 from "../../../../UI/death/dl3.jpg"
import dl4 from "../../../../UI/death/dl4.jpg"
import dl5 from "../../../../UI/death/dl5.jpg"
import dl6 from "../../../../UI/death/dl6.jpg"
import dl7 from "../../../../UI/death/dl7.jpg"
import dl8 from "../../../../UI/death/dl8.jpg"
import dl9 from "../../../../UI/death/dl9.jpg"
import dl10 from "../../../../UI/death/dl10.jpg"
import dl11 from "../../../../UI/death/dl11.jpg"
import dl12 from "../../../../UI/death/dl12.jpg"
import dl13 from "../../../../UI/death/dl13.jpg"
import dl14 from "../../../../UI/death/dl14.jpg"
import dl15 from "../../../../UI/death/dl15.jpg"
import dl16 from "../../../../UI/death/dl16.jpg"
import dl17 from "../../../../UI/death/dl17.jpg"

const ImageBlock = () => {

  const images = [DL7, DL8, DL9, DL1, DL2, DL3, DL4, DL5, DL6]
  const preimg = [dl7, dl8, dl9, dl1, dl2, dl3, dl4, dl5, dl6]
  return (
    <>
      <div className="block-div">
        <div className="grid-container">
          {images.map((img, index) => (
            <ImageView className={`grid-item`} src={preimg[index]} preview={img} />
          ))
          }
        </div>
      </div>

      <div className="block-div">
        <div className="grid-container2">
          <ImageView src={dl10} preview={DL10} width={536} height={349} />
          <ImageView src={dl11} preview={DL11} width={242} height={349} />
          <ImageView src={dl12} preview={DL12} width={242} height={349} />
        </div>
      </div>

      <div className="block-div">
        <div className="grid-container3">
          <ImageView src={dl13} preview={DL13} width={515} height={365} />
          <ImageView src={dl14} preview={DL14} width={515} height={365} />
        </div>
      </div>

      <div className="block-div">
        <ImageView src={dl15} preview={DL15} width={1076} height={242} />
      </div>

      <div className="block-div">
        <div className="grid-container4">
          <ImageView src={dl16} preview={DL16} width={704} height={384} />
          <ImageView src={dl17} preview={DL17} width={640} height={384} />
        </div>
      </div>
    </>
  )
}

export default ImageBlock