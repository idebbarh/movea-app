import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import { motion } from "framer-motion";
import { useContext } from "react";
import MoviesPagesContext from "./providers/MoviesPagesContext";
import { Link } from "react-router-dom";
function SideBarLinks() {
  const { dispatch, selectedPage, spliderRef } =
    useContext(MoviesPagesContext);
  const onClickHandler = (index, pageName) => {
    if(pageName !== 'favorite'){
      dispatch({type:'category',payload:{selectedPage:pageName,genreToId:''}});
    }else{
      dispatch({type:'favorite',payload:{selectedPage:pageName,genreToId:''}});
    }
    if (spliderRef.current) {
      spliderRef.current.go(index);
      
    }
  };
  return (
    <ul className="side-bar--pages-links">
      <Link to={"/"}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <li
            className={`pages-links--link ${
              selectedPage === "home" && "active"
            }`}
            onClick={() => onClickHandler(0, "home")}
          >
            <AiFillHome className="link--icon" />
            Home
          </li>
        </motion.div>
      </Link>

      <Link to={"/"}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <li
            className={`pages-links--link ${
              selectedPage === "popular" && "active"
            }`}
            onClick={() => onClickHandler(0, "popular")}
          >
            <BiCameraMovie className="link--icon" />
            Popular
          </li>
        </motion.div>
      </Link>

      <Link to={"/"}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <li
            className={`pages-links--link ${
              selectedPage === "top rated" && "active"
            }`}
            onClick={() => onClickHandler(0, "top rated")}
          >
            <AiFillStar className="link--icon" />
            Top Rated
          </li>
        </motion.div>
      </Link>

      <Link to={"/"}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <li
            className={`pages-links--link ${
              selectedPage === "upcoming" && "active"
            }`}
            onClick={() => onClickHandler(0, "upcoming")}
          >
            <RiMovie2Fill className="link--icon" />
            Upcoming
          </li>
        </motion.div>
      </Link>
      {/* localStorage.getItem('favoriteMovies') && JSON.parse(localStorage.getItem('favoriteMovies')).length > 0 &&  */}
      <Link to={"/"}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <li
            className={`pages-links--link ${
              selectedPage === "favorite" && "active"
            }`}
            onClick={() => onClickHandler(0, "favorite")}
          >
            <MdFavorite className="link--icon" />
            Favorite
          </li>
        </motion.div>
      </Link>
    </ul>
  );
}

export default SideBarLinks;
