import React from 'react'
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

  return (
    <div className={`${containerClassName}`}>
      <div className={`floating-div ${getAnimationClass()} ${className}`} style={style}>{children}</div>
    </div >
  )
}

export default FloatingDiv
