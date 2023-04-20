import React from 'react'
import { Image } from 'antd'

const ImageView = ({ className, src, preview, width = 340, height = 453 }) => {

  return (
    <Image
      className={className}
      width={width}
      height={height}
      src={src}
      preview={{ src: preview }}
    />
  )
}

export default ImageView