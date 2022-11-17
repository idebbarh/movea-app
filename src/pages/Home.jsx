import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import MoviesPagesContext from "../components/providers/MoviesPagesContext";
import MovieCard from "../components/MovieCard";
import LandingMovie from "../components/LandingMovie";
import Categories from "../components/Categories";
import { nanoid } from "nanoid";
import CardsGridAnimation from "../components/animation/CardsGridAnimation";
import SingleCardAnimation from "../components/animation/SingleCardAnimation";
function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const { selectedPage, dataToUse } = useContext(MoviesPagesContext);
  useEffect(() => {
    if(dataToUse.apiUrl !== null){
        fetchMoviesData();
    }else{
      fetchFavoriteMovies().then(res=>setMoviesData(res))
    }
  }, [selectedPage]);
  const fetchMoviesData = async () => {
    const res = await fetch(dataToUse.apiUrl);
    const data = await res.json();
    setMoviesData(data.results);
  };
  const fetchFavoriteMovies = async () =>{
    let allMovies = [];
    for(let id of dataToUse.data){
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
      const data = await res.json();
      allMovies.push(data);
    }
    return allMovies;
  }
  const cardsElem = moviesData.map((card, index) => {
    return (
      <SingleCardAnimation key={nanoid()} index={index}>
        <MovieCard movieData={card} />
      </SingleCardAnimation>
    );
  });

  return (
    cardsElem.length > 0 ? <div className="main-movies-contents">
      <div className="landing">
        <LandingMovie moviesData={moviesData} />
        <Categories />
      </div>
      <h2 className="section-title">
        {selectedPage === "home" ? "now playing" : selectedPage} movies
      </h2>
      <CardsGridAnimation>
        <div className="movies-grid">{cardsElem}</div>
      </CardsGridAnimation>
    </div> : <h2 style={{textTrasform:'capitalize',color:'var(--main-white-color)',fontSize:'30px',fontWeight:'normal'}}>favorite movies list is empty</h2>
  );
}

export default Home;
