import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BiCameraMovie} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import {RiMovie2Fill} from 'react-icons/ri'
import {MdFavorite} from 'react-icons/md'
import {motion} from 'framer-motion'
import {useContext} from 'react'
import MoviesPagesContext from '../MoviesPagesContext'
function SideBarLinks() {
  const {selectedPage,setSelectedPage,spliderRef} = useContext(MoviesPagesContext);
  const onClickHandler = (index,pageName)=>{
    if(spliderRef.current){
      spliderRef.current.go(index)
    }
    setSelectedPage(pageName)
  }
  return (
    <ul className="side-bar--pages-links">
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <li className={`pages-links--link ${selectedPage === 'home' && 'active'}`} onClick={()=>onClickHandler(0,'home')}><AiFillHome className='link--icon'/>Home</li>
        </motion.div>

        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <li className={`pages-links--link ${selectedPage === 'popular' && 'active'}`} onClick={()=>onClickHandler(0,'popular')}><BiCameraMovie className='link--icon'/>Popular</li>
        </motion.div>

        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <li className={`pages-links--link ${selectedPage === 'top rated' && 'active'}`} onClick={()=>onClickHandler(0,'top rated')}><AiFillStar className='link--icon'/>Top Rated</li>
        </motion.div>

        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <li className={`pages-links--link ${selectedPage === 'upcoming' && 'active'}`} onClick={()=>onClickHandler(0,'upcoming')}><RiMovie2Fill className='link--icon'/>Upcoming</li>
        </motion.div>
        
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <li className={`pages-links--link ${selectedPage === 'favorite' && 'active'}`}><MdFavorite className='link--icon'/>Favorite</li>
        </motion.div>
    </ul>
  )
}

export default SideBarLinks