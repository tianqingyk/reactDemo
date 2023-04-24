import React, { useState } from "react"
import "./Navbar.css"
import PresentAnimation from "../PresentAnimation/PresentAnimation"
import { Link } from "react-router-dom"

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
    <div className="navbar-div" onMouseLeave={() => setSubmenu(null)}>

      <PresentAnimation mainHeight={80} mainWidth={900} childWidth={900} childHeight={80} maskLeft={190}>
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
      </PresentAnimation>

      <nav className="submenu">
        {submenu && submenu.length > 0 && (
          <>
            {
              submenu.map((item, index) => (
                <SubItem
                  key={index}
                  title={item.title}
                  link={item.link}
                  isActive={currentPage === item.link}
                />
              ))
            }
          </>
        )
        }
      </nav>

    </div >
  )
}

function NavItem ({ title, link, submenu, isActive, currentPage, setSubmenu }) {

  const handleMouseEnter = () => {
    setSubmenu(submenu)
  }
  return (
    <>
      <div
        className={` ${submenu.length > 0 ? 'nav-item' : 'nav-item-default'}`}
        onMouseEnter={handleMouseEnter}
      >
        {submenu.length <= 0 ?
          <Link to={link}>
            <div
              href={isActive ? "#" : link}
              className={`nav-text ${isActive ? "nav-text-hover" : ""} ${isActive || submenu.length > 0 ? "disabled" : ""}`}
            >
              {title}
            </div>
          </Link> :
          <div
            href={isActive ? "#" : link}
            className={`nav-text ${isActive ? "nav-text-hover" : ""} ${isActive || submenu.length > 0 ? "disabled" : ""}`}
          >
            {title}
          </div>
        }



      </div >
    </>
  )
}

function SubItem ({ title, link, isActive }) {
  return (
    <div
      className="submenu-item"
    >
      <Link to={link}>
        <div
          href={isActive ? "#" : link}
          className={`submenu-text ${isActive ? "submenu-text-hover disabled" : ""}`}
        >
          {title}
        </div>
      </Link>
    </div >
  )
}

export default Navbar
