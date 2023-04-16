import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({ children, direction = 'left-to-right', style }) => {
  const getAnimationClass = () => {
    switch (direction) {
      case 'left-to-right':
        return 'floating-div-left-to-right'
      case 'right-to-left':
        return 'floating-div-right-to-left'
      case 'top-to-bottom':
        return 'floating-div-top-to-bottom'
      default:
        return 'floating-div-left-to-right'
    }
  }

  return (
    <div className="floating-div-container">
      <div className={`floating-div ${getAnimationClass()}`} style={style}>{children}</div>
    </div >
  )
}

export default FloatingDiv
