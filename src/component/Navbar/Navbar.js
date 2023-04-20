import React, { useState } from "react"
import "./Navbar.css"
import FloatingDiv from "../FloatingDiv/FloatingDiv"

function Navbar ({ currentPage }) {

  const menuItems = [
    {
      title: "HOME 主页",
      link: "/",
      submenu: []
    },
    {
      title: "GALLERY 作品集",
      link: "/gallery",
      submenu: [
        {
          title: 'DEATH IN VENICE',
          link: "/death"
        },
        {
          title: `DECONSTRUCTION
        BUSHIDO`,
          link: "/deconstruction"
        },
        {
          title: 'SALOME',
          link: "/salome"
        }
      ]
    },
    {
      title: "CONTACT 联系我们",
      link: "/contact",
      submenu: []
    }
  ]

  const [submenu, setSubmenu] = useState(null)

  return (
    <FloatingDiv direction="top-to-bottom">
      <div className="navbar-div" onMouseLeave={() => setSubmenu(null)}>
        <nav className="navbar">
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              title={item.title}
              link={item.link}
              submenu={item.submenu}
              isActive={currentPage === item.link || (item.submenu && item.submenu.find((v) => v.link === currentPage))}
              currentPage={currentPage}
              setSubmenu={setSubmenu}
            />
          ))}
        </nav>

        {submenu && submenu.length > 0 && (
          <nav className="submenu">
            {submenu.map((item, index) => (
              <SubItem
                key={index}
                title={item.title}
                link={item.link}
                isActive={currentPage === item.link}
              />
            ))}
          </nav>
        )
        }

      </div >
    </FloatingDiv>
  )
}

function NavItem ({ title, link, submenu, isActive, currentPage, setSubmenu }) {

  const handleMouseEnter = () => {
    setSubmenu(submenu)
  }
  return (
    <div
      className={` ${submenu.length > 0 ? 'nav-item' : 'nav-item-default'} `}
      onMouseEnter={handleMouseEnter}
    >
      <a
        href={isActive ? "#" : link}
        className={`nav-text ${isActive ? "nav-text-hover" : ""} ${isActive || submenu.length > 0 ? "disabled" : ""}`}
      >
        {title}
      </a>
    </div >
  )
}

function SubItem ({ title, link, isActive }) {
  return (
    <div
      className="submenu-item"
    >
      <a
        href={isActive ? "#" : link}
        className={`submenu-text ${isActive ? "submenu-text-hover disabled" : ""}`}
      >
        {title}
      </a>
    </div >
  )
}

export default Navbar
