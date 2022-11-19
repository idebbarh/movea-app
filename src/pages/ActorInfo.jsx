import React, { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import ActorBio from "../components/ActorBio";
import CardsGridAnimation from "../components/animation/CardsGridAnimation";
import SingleCardAnimation from "../components/animation/SingleCardAnimation";
import MovieCard from "../components/MovieCard";
import MoviesPagesContext from "../components/providers/MoviesPagesContext";
function ActorInfo() {
  const { id: actor_id } = useParams();
  const [actorData, setActorData] = useState(null);
  const {dispatch} = useContext(MoviesPagesContext);
  useEffect(() => {
    dispatch({type:'anotherPage',payload:{}});
    fetchActorData();
  }, [actor_id]);
  const fetchActorData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/person/${actor_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data = await res.json();
    const moviesRes = await fetch(`https://api.themoviedb.org/3/person/${actor_id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const moviesData = await moviesRes.json();
    setActorData({...data,movies:moviesData.cast.slice(0,20)});
  };
  const moviesElem = actorData ? actorData?.movies.map((movie,index)=>{
                                return (
                                  <SingleCardAnimation key={index} index={index}>
                                    <MovieCard movieData={movie} />
                                  </SingleCardAnimation>
                                );
  }) : []; 
  return (
    <div className="actor-info">
      <div className="actor-info--top">
        <div className="actor-info--image">
          <img
            src={
              actorData &&
              `https://image.tmdb.org/t/p/original${actorData?.profile_path}`
            }
            alt=""
          />
        </div>
        <div>
          <h2 className="actor-info--name">{actorData?.name}</h2>
          <h4 className="actor-info--date">
            <span>born: {actorData?.birthday}</span>
            {actorData?.deathday && <span>die: {actorData?.deathday}</span>}
          </h4>
          <ActorBio actorData={actorData} />
          <a href={`https://www.imdb.com/name/${actorData?.imdb_id}` } target="_blank">
              <button className="actor-info--imdb-btn">IMDB</button>
          </a>
        </div>
      </div>
      <div className="actor-info--movies">
          <h3>movies</h3>
        <CardsGridAnimation>
            <div className="movies-grid">{moviesElem}</div>
        </CardsGridAnimation>
      </div>
    </div>
  );
}

export default ActorInfo;
