import React from 'react'
import './ImageBackgroundPage.css'

const ImageBackgroundPage = () => {
  // /*滚动效果*/
  // const backgroundRef = useRef(null)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!backgroundRef.current) return

  //     const elements = backgroundRef.current.querySelectorAll('.parallax-item')
  //     const backgroundSpeed = 0.1 // 调整背景图片的滚动速度

  //     // 根据滚动距离移动背景图片
  //     const backgroundOffset = window.scrollY * backgroundSpeed
  //     backgroundRef.current.style.backgroundPositionY = `-${backgroundOffset}px`

  //     // 为子 div 添加视差效果
  //     elements.forEach((element, index) => {
  //       const speed = 0.1 * (index % 2 === 0 ? 1 : -1)
  //       const value = window.scrollY * speed
  //       element.style.transform = `translateY(${value}px)`
  //     })
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])


  const numberOfDivs = 5

  const generateDivs = () => {
    const divs = []
    for (let i = 0; i < numberOfDivs; i++) {
      const isTransparent = i % 2 === 0
      divs.push(
        <div
          key={i}
          className={`grid - item ${isTransparent ? 'transparent-div' : 'solid-div'}`}
        ></div>
      )
    }
    return divs
  }

  return (
    <div className="image-background-page">
      <div className="grid-container">{generateDivs()}</div>
    </div>
  )
}

export default ImageBackgroundPage
