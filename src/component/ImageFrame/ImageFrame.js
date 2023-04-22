import React from "react"
import "./ImageFrame.css"

const ImageFrame = ({ src, width, height }) => {

  const w = width
  const h = height
  const c = "#cb4d4d"
  const cb = "rgb(217, 34, 34)"
  const sc = 1

  const imgFrameDiv = {
    width: { width },
    height: { height },
    cursor: "pointer",
    border: `1px solid rgb(225, 111, 111)`,
    borderRadius: `0 0 999px 999px`,
    outline: `6px solid ${c}`
  }

  return (
    <div>
      <img src={src} style={imgFrameDiv} />
    </div >
  )
}

export default ImageFrame