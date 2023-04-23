import React, { useEffect, useState, useRef } from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({ children, containerClassName, className, direction = 'left-to-right', style }) => {
  const getAnimationClass = () => {
    switch (direction) {
      case 'left-to-right':
        return 'floating-div-left-to-right'
      case 'right-to-left':
        return 'floating-div-right-to-left'
      case 'top-to-bottom':
        return 'floating-div-top-to-bottom'
      case 'bottom-to-top':
        return 'floating-div-bottom-to-top'
      default:
        return 'floating-div-left-to-right'
    }
  }

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

  return (
    <div ref={ref} className={`${containerClassName}`}>
      <div className={`floating-div ${isVisible ? getAnimationClass() : ""} ${className}`} style={style}>{children}</div>
    </div >
  )
}

export default FloatingDiv
