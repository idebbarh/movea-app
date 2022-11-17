import React,{useContext} from "react"
import SideBarLinks from "./SideBarLinks"
import {BiFilm} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import MoviesPagesContext from "./providers/MoviesPagesContext"

function SideBar() {
  const {dispatch} = useContext(MoviesPagesContext)
  return (
    <div className="side-bar">
      <Link to={'/'} onClick={()=>dispatch({type:'category',payload:{selectedPage:'home',genreToId:''}})}>
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