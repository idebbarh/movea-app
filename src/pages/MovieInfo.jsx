import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {nanoid} from 'nanoid'
import {MdFavorite} from 'react-icons/md'
import {BsFillPlayFill} from 'react-icons/bs'
import MovieCast from '../components/MovieCast'
function MovieInfo() {
    const {id:movie_id} = useParams();
    const [movieInfo,setMovieInfo] = useState(null);
    const [isFavorite,setIsFavorite] = useState(null);
    useEffect(()=>{
      const movieInfoFromLocalStorage = localStorage.getItem(`movie${movie_id}`);
      if(movieInfoFromLocalStorage){
        setMovieInfo(JSON.parse(movieInfoFromLocalStorage))
      }else{
        fetchMovieInfo()
      }
    },[movie_id])
    useEffect(()=>{
        const favoriteMoviesList = localStorage.getItem('favoriteMovies')
        if(favoriteMoviesList){
          if(JSON.parse(favoriteMoviesList).includes(movie_id)){
            setIsFavorite(true);
          }else{
            setIsFavorite(false);
          }
        }else{
          setIsFavorite(false);
        }
    },[])
    const fetchMovieInfo = async ()=>{
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
      const movieData = await res.json();
      const castRes = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      const castData = await castRes.json();
      setMovieInfo({...movieData,'movieCast':castData});
    }
    const castsElem = movieInfo?.movieCast.cast.map((character)=>{
           return character.profile_path && <MovieCast key={nanoid()} castInfos={character}/>
    }).slice(0,6);
    const handleIsFavoriteBtn = ()=>{
      const favoriteMoviesList = localStorage.getItem('favoriteMovies');
      let newList;
      if(favoriteMoviesList){
        if(!isFavorite){
          newList = [...JSON.parse(favoriteMoviesList),movie_id]
        }else{
          newList = JSON.parse(favoriteMoviesList).filter(id=>id!==movie_id);
        }
      }else{
        newList = [movie_id]
      }
      localStorage.setItem('favoriteMovies',JSON.stringify(newList))
      setIsFavorite(prevState=>!prevState);
    }
  return (
    <div className='movie-info'>
      <header className="movie-info--header">
        <div className="header--movie-big-image">
          <img src={movieInfo !== null ? `https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}` : ''} alt={movieInfo?.title} />
          <div className="overlay"></div>
        </div>
        <button className="header--main-btn"><BsFillPlayFill className='icon'/>trailer</button>
      </header>
      <div className="movie-info--main-info">
        <div className="main-info--top">
          <div className="main-info--movie-small-image">
            <img src={movieInfo !== null ? `https://image.tmdb.org/t/p/original${movieInfo.poster_path}` : ''} alt={movieInfo?.title} />
          </div>
          <div className="main-info--infos">
            <h2 className="main-info--movie-title">{movieInfo?.title}</h2>
            <div className="main-info--movie-genres">
              {movieInfo?.genres.map(genre=>{
                return (<span className="genre" key={nanoid()}>{genre.name}</span>)
              })}
            </div>
            <div className="main-info--btns">
              <button className="header--main-btn"><BsFillPlayFill className='icon'/>watch</button>
              <button className={`btns--favorite-btn ${isFavorite && 'active'}`} onClick={handleIsFavoriteBtn}><MdFavorite className='favorite-icon'/></button>
            </div>
          </div>
        </div>
        <div className="main-info--bottom">
            <div className="main-info--storyline">
              <h4>storyline</h4>
              <p>{movieInfo?.overview}</p>
            </div>
            <div className="main-info--casts">
              <h4>Cast</h4>
              <div className="casts-list">
                {castsElem}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo