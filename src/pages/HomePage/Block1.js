import React from "react"
import FloatingDiv from "../../component/FloatingDiv/FloatingDiv"
import './HomePage.css'
import TextDiv from "../../component/TextDiv/TextDiv"

const Block1 = () => {
  const englishText = `Founded in 2022, Paris, the name of the brand, RONGTONG is derived from the designer's name and nickname,”Rong“ for "comprehensive" and "tong" for eyes.  To put it as simply as possible - seeing our universe with your eyes - this is the brand name meaning`
  const chineseText = `成立于2022，巴黎，容瞳二字取于设计师的原名容和昵称曈，另取其意：包容万象之美的双瞳。这也蕴含了品牌的理念：多元的艺术性。`

  return (
    <div className='divStyle1'>
      <div style={{ float: 'left', width: '70%', color: "black" }}>
        <FloatingDiv containerClassName='center-container' style={{ height: '64px', animationDelay: '0.5s' }}>
          <TextDiv className='home-title-style' content='RONGTONG' boldWords={['RONGTONG']} align='left' width='385px' />
        </FloatingDiv>
        <FloatingDiv containerClassName='center-container' style={{ height: '114px', marginTop: '40px' }}>
          <TextDiv className='home-english-style' content={englishText} boldWords={['RONGTONG']} align="left" lineHeight={2} width='385px' />
        </FloatingDiv >
        <FloatingDiv containerClassName='center-container' style={{ height: '70px', marginTop: '20px', animationDelay: '0.7s' }}>
          <TextDiv className='home-chinese-style' content={chineseText} align="left" lineHeight={2} width='385px' />
        </FloatingDiv>
      </div>

    </div >
  )
}

export default Block1