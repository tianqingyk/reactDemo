import { Carousel } from 'antd'
import "./CarouselBlock.css"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

const CarouselBlock = ({ children }) => {


  return (
    <div style={{ position: 'relative' }}>
      <Carousel arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
        {children.map((child) => <div>{child}</div>)}
      </Carousel>
    </div >
  )

}

export default CarouselBlock