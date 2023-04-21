import React from "react"
import FloatingDiv from "../../component/FloatingDiv/FloatingDiv"
import './HomePage.css'
import TextDiv from "../../component/TextDiv/TextDiv"


const Block2 = () => {
  const englishText = `RONGTONG now has 3 collection, from 2019-2022
  The collection from 2021-2022,Menswear collection: Death in Venice
  The collection from 2020-2021,Womenswear collection:Deconstruction the Bushido
  The collection from 2020,Womensear collection:Salomé`
  const chineseText = `容瞳现在拥有从2019-2022的三个系列设计：
  2021-2022，男装系列设计：《死于威尼斯》
  2020-2021，女装系列设计：《解构武士道》
  ​以及2019女装实验性设计：《莎乐美》`
  return (
    <div className='divStyle2'>
      <div style={{ float: "right", width: '70%', color: 'white' }}>
        <FloatingDiv containerClassName='center-container' direction='right-to-left' style={{ height: '64px', animationDelay: '1.5 s' }}>
          <TextDiv className='title-style' content='COLLECTION' boldWords={['COLLECTION']} align='right' width='430px' />
        </FloatingDiv>
        <FloatingDiv containerClassName='center-container' direction='right-to-left' style={{ height: '114px', marginTop: '40px' }}>
          <TextDiv className='english-style' content={englishText} boldWords={['RONGTONG']} align="right" lineHeight={2} width='430px' />
        </FloatingDiv >
        <FloatingDiv containerClassName='center-container' direction='right-to-left' style={{ height: '70px', marginTop: '20px', animationDelay: '1s' }}>
          <TextDiv className='chinese-style' content={chineseText} align="right" lineHeight={2} width='430px' />
        </FloatingDiv>
      </div>

    </div >
  )
}

export default Block2