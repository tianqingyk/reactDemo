import React, { useState } from 'react'
import { Image } from 'antd'

const GroupImage = ({ className, srcs = [], imgs = [], width = 340, height = 453 }) => {
  const [visible, setVisible] = useState(false)

  const shiftedArray = []
  for (let i = 0; i < imgs.length; i++) {
    const shiftedItem = imgs.slice(i).concat(imgs.slice(0, i))
    shiftedArray.push(shiftedItem)
  }
  console.log(shiftedArray)
  return (
    <>
      {srcs.map((src, index) => (
        <div>
          < Image
            key={"group" + index}
            className={className}
            preview={{ visible: false }}
            src={src}
            width={width}
            height={height}
            onClick={() => setVisible(true)}
          />
          <div key={"image" + index} style={{ display: 'none' }}>
            <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
              {shiftedArray[index].map((img, i) => <Image key={"img" + index + i} src={img} />)}
            </Image.PreviewGroup>
          </div>
        </div>
      ))}
    </>
  )
}

export default GroupImage