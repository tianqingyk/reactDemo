import React, { useEffect } from "react"
import './Contact.css'
import TextDiv from "../../component/TextDiv/TextDiv"
import Navbar from "../../component/Navbar/Navbar"

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      <Navbar currentPage="/contact" />
    </>

  )
}

export default Contact