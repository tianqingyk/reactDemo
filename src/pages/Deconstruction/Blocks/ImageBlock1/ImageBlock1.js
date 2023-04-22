import React from "react"
import "./ImageBlock1.css"
import ImageView from "../../../../component/ImageView/ImageView"
import TextDiv from "../../../../component/TextDiv/TextDiv"
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
      <Block1 />
      <Block2 />
      <Block3 />
    </>
  )
}

const Block1 = () => {

  const chineseText1 = `一次女士西装的设计
  ​一次关于日式服装的变革
  一次关于都市人群与丛林盔甲之间的讨论
  一次关于结绳，皮革，金属之间的工艺探索
  
  `
  const chineseText2 = `一共22块皮革，92块金属环，92个结绳，由设计师从设计打版到切割缝
  制，再到最后的摄影呈现：
  《解构武士道》`

  const englishText1 = `PHOTOSHOOT
  PHOTOGRAPHER: JIARONG XIE
  MODEL: YUTZU KANG`
  return (
    <>
      <div className="dec-block-div">
        <div className="dec-grid-container">
          <ImageView src={dec1} preview={DEC1} width={246} height={346} />
          <ImageView src={dec2} preview={DEC2} width={246} height={346} />
          <ImageView src={dec3} preview={DEC3} width={246} height={346} />
          <ImageView src={dec4} preview={DEC4} width={246} height={346} />
        </div>
        <div className="text-div1">
          <TextDiv className="text-style-1" content="The Chrysanthemum and the Sword" align="center" fontSize={20} lineHeight={0} />
          <TextDiv className="text-style-2" content="DECONSTRUCTION BUSHIDO" align="center" fontSize={23} lineHeight={0} />
        </div>
        <div className="dec-grid-container">
          <ImageView src={dec5} preview={DEC5} width={246} height={346} />
          <ImageView src={dec6} preview={DEC6} width={246} height={346} />
          <ImageView src={dec7} preview={DEC7} width={246} height={346} />
          <ImageView src={dec8} preview={DEC8} width={246} height={346} />
        </div>
        <div>
          <TextDiv className="text-style-3" content={chineseText1} align="center" fontSize={16} lineHeight={1.5} />
          <TextDiv className="text-style-4" content={chineseText2} align="center" fontSize={16} lineHeight={1.5} />
          <TextDiv className="text-style-5" content={englishText1} align="center" fontSize={14} lineHeight={1.5} />
        </div>
      </div>
    </>
  )
}

const Block2 = () => {
  return (
    <>
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
    </>
  )
}

const Block3 = () => {
  return (
    <>
      <div className="dec-block-div3">
        <div>
          <TextDiv className="text-style-6" content="DESIGN PROCESS" boldWords={["DESIGN", "PROCESS"]} align="center" fontSize={14} lineHeight={1.5} />
        </div>

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