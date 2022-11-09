import React from "react"
import SideBarLinks from "./SideBarLinks"
import {BiFilm} from 'react-icons/bi'
function SideBar() {
  return (
    <div className="side-bar">
        <div className="side-bar--logo">
            <BiFilm className="logo--icon"/>
            <h3 className="logo--text">
                Movea
            </h3>
        </div>
        <SideBarLinks/>
    </div>
  )
}

export default SideBar