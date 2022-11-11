import React from "react"
import SideBarLinks from "./SideBarLinks"
import {BiFilm} from 'react-icons/bi'
import {Link} from 'react-router-dom'
function SideBar() {
  return (
    <div className="side-bar">
      <Link to={'/'}>
        <div className="side-bar--logo">
              <BiFilm className="logo--icon"/>
              <h3 className="logo--text">
                  Movea
              </h3>
          </div>
      </Link>
        <SideBarLinks/>
    </div>
  )
}

export default SideBar