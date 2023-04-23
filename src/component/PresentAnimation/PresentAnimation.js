import React, { useState, useEffect, useRef } from "react"
import "./PresentAnimation.css"


const PresentAnimation = ({ children, mainWidth, mainHeight, childWidth, childHeight, maskLeft = 0 }) => {

  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const mainStyle = {
    width: mainWidth,
    height: mainHeight
  }

  const maskDivStyle = {
    width: childWidth,
    height: childHeight,
    left: maskLeft - childWidth
  }

  const presentDivStyle = {
    width: childWidth,
    height: childHeight,
  }

  return (
    <div ref={ref} className="main-div" style={mainStyle}>
      <div className="mask-div" style={maskDivStyle} />
      <div className={`${isVisible ? "present-div" : ""}`} style={presentDivStyle}>
        {children}
      </div>
    </div>
  )
}

export default PresentAnimation