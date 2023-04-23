import React from "react"
import './Contact.css'
import TextDiv from "../../component/TextDiv/TextDiv"
import Navbar from "../../component/Navbar/Navbar"
import GalleryNavBar from "../../component/GalleryNavBar/GalleryNavBar"

const Contact = () => {

  const content = `Designer: Jiarong Xie
  75012, Paris, France
  Email: jiarong.fw@gmail.com`
  return (
    <>
      <div className="contact">
        <h2>
          <TextDiv className='text-style' content={content} align='center'></TextDiv>
        </h2>
      </div>
      <GalleryNavBar />
      <Navbar currentPage="/contact" />
    </>

  )
}

export default Contact