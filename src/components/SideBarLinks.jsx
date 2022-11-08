import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BiCameraMovie} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import {RiMovie2Fill} from 'react-icons/ri'
import {MdFavorite} from 'react-icons/md'
import {NavLink} from 'react-router-dom'
function SideBarLinks() {
  return (
    <ul className="side-bar--pages-links">
        <NavLink className="pages-links--link" to={'/'}><AiFillHome className='link--icon'/>Home</NavLink>
        <NavLink className="pages-links--link" to={'/popular'}><BiCameraMovie className='link--icon'/>Popular</NavLink>
        <NavLink className="pages-links--link" to={'/top-rated'}><AiFillStar className='link--icon'/>Top Rated</NavLink>
        <NavLink className="pages-links--link" to={'/upcoming'}><RiMovie2Fill className='link--icon'/>Upcoming</NavLink>
        <NavLink className='pages-links--link' to={'/favorite'}><MdFavorite className='link--icon'/>Favorite</NavLink>
    </ul>
  )
}

export default SideBarLinks