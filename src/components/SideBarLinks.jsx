import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BiCameraMovie} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import {RiMovie2Fill} from 'react-icons/ri'
import {MdFavorite} from 'react-icons/md'
import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'
function SideBarLinks() {
  return (
    <ul className="side-bar--pages-links">
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <NavLink className={`pages-links--link ${({isActive})=> isActive && 'active'}`} to={'/home'}><AiFillHome className='link--icon'/>Home</NavLink>
        </motion.div>

        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <NavLink className={`pages-links--link ${({isActive})=> isActive && 'active'}`} to={'/popular'}><BiCameraMovie className='link--icon'/>Popular</NavLink>
        </motion.div>

        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <NavLink className={`pages-links--link ${({isActive})=> isActive && 'active'}`} to={'/top-rated'}><AiFillStar className='link--icon'/>Top Rated</NavLink>
        </motion.div>

        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <NavLink className={`pages-links--link ${({isActive})=> isActive && 'active'}`} to={'/upcoming'}><RiMovie2Fill className='link--icon'/>Upcoming</NavLink>
        </motion.div>
        
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <NavLink className={`pages-links--link ${({isActive})=> isActive && 'active'}`} to={'/favorite'}><MdFavorite className='link--icon'/>Favorite</NavLink>
        </motion.div>
    </ul>
  )
}

export default SideBarLinks