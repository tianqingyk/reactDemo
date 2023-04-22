import React, { useEffect, useState } from "react"
import "./CollapseDiv.css"
import { Animation } from 'rsuite'

const CollapseDiv = ({ children }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  })

  return (
    <Animation.Collapse in={show} dimension="width">
      {children}
    </Animation.Collapse>
  )
}

export default CollapseDiv