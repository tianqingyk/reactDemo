


import React, { useState } from "react"
import "./Navbar.css"

function Navbar ({ currentPage }) {

  const menuItems = [
    {
      title: "HOME 主页",
      link: "",
      submenu: []
    },
    {
      title: "GALLERY 作品集",
      link: "",
      submenu: [
        { title: 'DEATH IN VENICE', link: "" },
        {
          title: `DECONSTRUCTION
        BUSHIDO`, link: ""
        },
        { title: 'SALOME', link: "" }
      ]
    },
    {
      title: "HOME 主页",
      link: "",
      submenu: []
    }
  ]

  const [submenu, setSubmenu] = useState(null)

  return (
    <div className="navbar-div" onMouseLeave={() => setSubmenu(null)}>
      <nav className="navbar">
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            title={item.title}
            link={item.link}
            submenu={item.submenu}
            isActive={currentPage === item.link}
            currentPage={currentPage}
            setSubmenu={setSubmenu}
          />
        ))}
      </nav>
      <nav className="submenu" onMouseLeave={() => setSubmenu(null)}>
        {submenu && submenu.length > 0 && (
          <>
            {submenu.map((item, index) => (
              <SubItem
                key={index}
                title={item.title}
                link={item.link}
              />
            ))}
          </>
        )
        }
      </nav>
    </div>
  )
}

function NavItem ({ title, link, submenu, isActive, currentPage, setSubmenu }) {

  const handleMouseEnter = () => {
    setSubmenu(submenu)
  }
  return (
    <div
      className={`${submenu.length > 0 ? 'nav-item' : 'nav-item-default'}  `}
      onMouseEnter={handleMouseEnter}
    >
      <a
        href={isActive ? "#" : link}
        className={`nav-text ${isActive ? "disabled" : ""}`}
      >
        {title}
      </a>
    </div >
  )
}

function SubItem ({ title, link }) {
  return (
    <div
      className="submenu-item"
    >
      <a
        href={false ? "#" : link}
        className={`submenu-text`}
      >
        {title}
      </a>
    </div >
  )
}

export default Navbar
