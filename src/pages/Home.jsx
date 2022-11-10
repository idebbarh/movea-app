import React from 'react'
import { useEffect, useState } from "react"
import {useContext} from 'react'
import MoviesPagesContext from '../MoviesPagesContext';
import MovieCard from '../components/MovieCard';
import LandingMovie from '../components/LandingMovie';
import Categories from '../components/Categories';
import {motion} from 'framer-motion'
import {nanoid} from 'nanoid'
function Home() {
  const [moviesData,setMoviesData] = useState([]);
  const {selectedPage,curApiUrl} = useContext(MoviesPagesContext);
  useEffect(()=>{
    console.log(selectedPage)
    console.log(curApiUrl)
    const moviesFromLocalStorage = localStorage.getItem(selectedPage)
    if(moviesFromLocalStorage){
      setMoviesData(JSON.parse(moviesFromLocalStorage))
    }else{
      fetchMoviesData()
    }
  },[selectedPage])
  const fetchMoviesData = async ()=>{
    const res = await fetch(curApiUrl);
    const data = await res.json()
    localStorage.setItem(selectedPage,JSON.stringify(data.results))
    setMoviesData(data.results)
  }
  const cardsElem = moviesData.map(card=>{
            return <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} key={nanoid()}>
                      <MovieCard movieData={card}/>
                    </motion.div>
       
  })

  return (
    <div className='main-movies-contents'>
      <div className="landing">
        <LandingMovie moviesData={moviesData}/>
        <Categories/>
      </div>
      <h2 className="section-title">{selectedPage === 'home' ? 'now playing' : selectedPage} movies</h2>
      <div className="movies-grid">
        {cardsElem}
      </div>
    </div>
  )
}

export default Home