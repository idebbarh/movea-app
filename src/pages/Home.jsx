import React from 'react'
import { useEffect, useState } from "react"
import {useContext} from 'react'
import MoviesPagesContext from '../MoviesPagesContext';
import MovieCard from '../components/MovieCard';
import LandingMovie from '../components/LandingMovie';
import Categories from '../components/Categories';
import {nanoid} from 'nanoid'
import CardsGridAnimation from '../components/animation/CardsGridAnimation';
import SingleCardAnimation from '../components/animation/SingleCardAnimation';
function Home() {
  const [moviesData,setMoviesData] = useState([]);
  const {selectedPage,curApiUrl} = useContext(MoviesPagesContext);
  useEffect(()=>{
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
  const cardsElem = moviesData.map((card,index)=>{
            return <SingleCardAnimation key={nanoid()} index={index}>
                      <MovieCard movieData={card}/>
                    </SingleCardAnimation>
       
  })

  return (
    <div className='main-movies-contents'>
      <div className="landing">
        <LandingMovie moviesData={moviesData}/>
        <Categories/>
      </div>
      <h2 className="section-title">{selectedPage === 'home' ? 'now playing' : selectedPage} movies</h2>
      <CardsGridAnimation>
          <div className="movies-grid">
            {cardsElem}
          </div>
      </CardsGridAnimation>
    </div>
  )
}

export default Home