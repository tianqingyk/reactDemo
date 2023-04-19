import React from "react"
import CarouselBlock from "../../component/CarouselBlock/CarouselBlock"
import FloatingDiv from "../../component/FloatingDiv/FloatingDiv"
import TextDiv from "../../component/TextDiv/TextDiv"
import ClickButton from "../../component/ClickButton/ClickButton"

const Block3 = () => {
  const slide1English = `2021-2022 menswear
  Death in Venice`
  const slide1Chinese = `男装系列设计：《死于威尼斯》`

  const slide2English = `2021womenswear
  Deconstruction Bushido`
  const slide2Chinese = `女装系列设计：《解构武士道》`

  const slide3English = `2020 womenswear
  SALOME`
  const slide3Chinese = `                《莎乐美》`

  return (
    <div className='divStyle3'>
      <CarouselBlock>
        <div className='slide1'>
          <div style={{ height: '100%', width: '50%', color: "white", backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <FloatingDiv containerClassName='center-container' className='slide1FloatingDiv' direction="top-to-bottom" >
              <TextDiv className='english-style' align='center' content={slide1English} fontSize='22px' lineHeight='1' />
              <TextDiv className='Chinese-style' aligh='center' content={slide1Chinese} fontSize='22px' lineHeight='0' />
              <ClickButton />
            </FloatingDiv>
          </div>
        </div>

        <div className='slide2' style={{ color: "white" }}>
          <div className="slideContainer">
            <FloatingDiv containerClassName="slide2Container1" className='slide2FloatingDiv1' direction="top-to-bottom" />
            <FloatingDiv containerClassName="slide2Container2" className='slide2FloatingDiv2' direction="bottom-to-top" />
          </div>

          <FloatingDiv containerClassName='slide2FloatingDiv3'>
            <TextDiv className='english-style' align='center' content={slide2English} fontSize='22px' lineHeight='1' />
            <TextDiv className='Chinese-style' aligh='center' content={slide2Chinese} fontSize='20px' lineHeight='0' />
            <ClickButton />
          </FloatingDiv>
        </div>
        <div className='slide3' style={{ color: "white" }}>
          <FloatingDiv containerClassName='slider3Container' className='slide3FloatingDiv1' direction="top-to-bottom" />
          <FloatingDiv containerClassName='center-container' className='slide3FloatingDiv2' direction="bottom-to-top" >
            <TextDiv className='english-style' align='center' content={slide3English} fontSize='22px' lineHeight='1' />
            <TextDiv className='Chinese-style' aligh='center' content={slide3Chinese} fontSize='22px' lineHeight='0' />
            <ClickButton />
          </FloatingDiv>
        </div>
      </CarouselBlock >
    </div >
  )
}

export default Block3