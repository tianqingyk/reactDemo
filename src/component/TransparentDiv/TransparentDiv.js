import React, { useEffect, useRef } from 'react'
import './TransparentDiv.css'


const TransparentDiv = ({ children, className, backgroundPositionY }) => {
  const parallaxBg = useRef(null)
  const scrollSpeed = 0.2
  const divStyle = {
    backgroundPositionY
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxBg.current) {
        return
      }
      console.log(backgroundPositionY)
      const scrollTop = (window.pageYOffset || document.documentElement.scrollTop) * scrollSpeed
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      parallaxBg.current.style.backgroundPositionY = `${parseInt(divStyle.backgroundPositionY, 10) + scrollPercent}%`
    }


    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={parallaxBg} className={`scrolling-bg ${className}`} style={divStyle}>{children}</div>
  )
}

export default TransparentDiv