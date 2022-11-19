import React,{useContext} from "react"
import SideBarLinks from "./SideBarLinks"
import {BiFilm} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import MoviesPagesContext from "./providers/MoviesPagesContext"
import SideBarContext from "./providers/SideBarContext"
import useMediaQuery from "../hooks/useMediaQuery"
import {AiOutlineClose} from 'react-icons/ai'
function SideBar() {
  const {spliderRef} = useContext(MoviesPagesContext);
  const {isShowingSideBar,setIsShowingSideBar} = useContext(SideBarContext);
  const isSmallScreens = useMediaQuery('(max-width:1024px)');
  const sideBarStyle = isSmallScreens ? {left: isShowingSideBar ? '0' : '-100%'} : {}
  return (
    <div className="side-bar" style={sideBarStyle}>
      {isShowingSideBar && <AiOutlineClose className="side-bar--close-btn" onClick={()=>setIsShowingSideBar(prevState=>!prevState)}/>}
      <Link to={'/'} onClick={()=>spliderRef.current.go(0)}>
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