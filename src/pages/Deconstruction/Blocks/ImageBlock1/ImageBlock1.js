import React from "react"
import "./ImageBlock1.css"
import ImageView from "../../../../component/ImageView/ImageView"
import DEC1 from "../../../../UI/deconstruction/DEC-1.png"
import DEC2 from "../../../../UI/deconstruction/DEC-2.png"
import DEC3 from "../../../../UI/deconstruction/DEC-3.png"
import DEC4 from "../../../../UI/deconstruction/DEC-4.png"
import DEC5 from "../../../../UI/deconstruction/DEC-5.png"
import DEC6 from "../../../../UI/deconstruction/DEC-6.png"
import DEC7 from "../../../../UI/deconstruction/DEC-7.png"
import DEC8 from "../../../../UI/deconstruction/DEC-8.png"

import dec1 from "../../../../UI/deconstruction/dec1.jpg"
import dec2 from "../../../../UI/deconstruction/dec2.jpg"
import dec3 from "../../../../UI/deconstruction/dec3.jpg"
import dec4 from "../../../../UI/deconstruction/dec4.jpg"
import dec5 from "../../../../UI/deconstruction/dec5.jpg"
import dec6 from "../../../../UI/deconstruction/dec6.jpg"
import dec7 from "../../../../UI/deconstruction/dec7.jpg"
import dec8 from "../../../../UI/deconstruction/dec8.jpg"
import dec9 from "../../../../UI/deconstruction/dec9.jpg"
import dec10 from "../../../../UI/deconstruction/dec10.jpg"
import dec11 from "../../../../UI/deconstruction/dec11.jpg"
import dec12 from "../../../../UI/deconstruction/dec12.jpg"

import dec1_1 from "../../../../UI/deconstruction/dec1-1.jpg"
import dec1_2 from "../../../../UI/deconstruction/dec1-2.jpg"
import dec1_3 from "../../../../UI/deconstruction/dec1-3.jpg"
import dec1_4 from "../../../../UI/deconstruction/dec1-4.jpg"
import dec2_1 from "../../../../UI/deconstruction/dec2-1.jpg"
import dec2_2 from "../../../../UI/deconstruction/dec2-2.jpg"
import dec2_3 from "../../../../UI/deconstruction/dec2-3.jpg"
import dec2_4 from "../../../../UI/deconstruction/dec2-4.jpg"

import DEC1_1 from "../../../../UI/deconstruction/DEC1-1.png"
import DEC1_2 from "../../../../UI/deconstruction/DEC1-2.png"
import DEC1_3 from "../../../../UI/deconstruction/DEC1-3.png"
import DEC1_4 from "../../../../UI/deconstruction/DEC1-4.png"
import DEC2_1 from "../../../../UI/deconstruction/DEC2-1.png"
import DEC2_2 from "../../../../UI/deconstruction/DEC2-2.png"
import DEC2_3 from "../../../../UI/deconstruction/DEC2-3.png"
import DEC2_4 from "../../../../UI/deconstruction/DEC2-4.png"


const ImageBlock1 = () => {

  return (
    <>
      <div className="dec-block-div">
        <div className="dec-grid-container">
          <ImageView src={dec1} preview={DEC1} width={246} height={346} />
          <ImageView src={dec2} preview={DEC2} width={246} height={346} />
          <ImageView src={dec3} preview={DEC3} width={246} height={346} />
          <ImageView src={dec4} preview={DEC4} width={246} height={346} />
        </div>
      </div>

      <div className="dec-block-div">
        <div className="dec-grid-container">
          <ImageView src={dec5} preview={DEC5} width={246} height={346} />
          <ImageView src={dec6} preview={DEC6} width={246} height={346} />
          <ImageView src={dec7} preview={DEC7} width={246} height={346} />
          <ImageView src={dec8} preview={DEC8} width={246} height={346} />
        </div>
      </div>

      <div className="dec-block-div2">
        <div className="dec-grid-container1">
          <ImageView src={dec9} width={525} height={700} />
          <ImageView src={dec10} width={525} height={350} />
        </div>
        <div className="dec-grid-container2">
          <ImageView src={dec11} width={454} height={454} />
          <ImageView src={dec12} width={454} height={596} />
        </div>
      </div>

      <div className="dec-block-div3">
        <div className="dec-grid-container3">
          <ImageView src={dec1_1} preview={DEC1_1} width={249} height={350} />
          <ImageView src={dec1_2} preview={DEC1_2} width={249} height={350} />
          <ImageView src={dec1_3} preview={DEC1_3} width={249} height={350} />
          <ImageView src={dec1_4} preview={DEC1_4} width={249} height={350} />

          <ImageView src={dec2_1} preview={DEC2_1} width={238} height={339} />
          <ImageView src={dec2_2} preview={DEC2_2} width={238} height={339} />
          <ImageView src={dec2_3} preview={DEC2_3} width={238} height={339} />
          <ImageView src={dec2_4} preview={DEC2_4} width={238} height={339} />
        </div>
      </div>
    </>
  )
}

export default ImageBlock1