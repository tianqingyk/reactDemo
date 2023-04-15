import React, { useEffect, useRef } from 'react'
import './TransparentDiv.css'


const TransparentDiv = ({ divStyle }) => {
  ;
  const backgroundPositionYValue = parseInt(divStyle.backgroundPositionY, 10)
  const parallaxBg = useRef(null)
  const scrollSpeed = 0.2


  const handleScroll = () => {
    if (!parallaxBg.current) {
      return
    }


    const scrollTop = (window.pageYOffset || document.documentElement.scrollTop) * scrollSpeed
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercent = (scrollTop / docHeight) * 100

    parallaxBg.current.style.backgroundPositionY = `${backgroundPositionYValue + scrollPercent}%`
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={parallaxBg} class="scrolling-bg" style={divStyle}></div>
  )
}

export default TransparentDiv