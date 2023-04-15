import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({ div, direction = 'left-to-right' }) => {
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
      <h1 className={`floating-div ${getAnimationClass()}`}>{div}</h1>
    </div>
  )
}

export default FloatingDiv
