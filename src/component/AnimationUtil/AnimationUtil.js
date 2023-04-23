import React, { useState, useRef, useEffect } from "react"
import "./FadeIn.css"
import "./ScaleUp.css"
import "./SwingIn.css"
import "./BounceIn.css"
import "./ShutterIn.css"
import "./Test.css"

const AnimationUtil = ({ children, animation, style, className }) => {
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
    <div ref={ref} >
      <div className={`${isVisible ? animation : ""} ${className}`} style={style}>{children}</div>
    </div >
  )
}

export default AnimationUtil