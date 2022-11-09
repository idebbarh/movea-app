import React from 'react'
import {AiFillStar} from 'react-icons/ai'
function MovieCard(props) {
    const {poster_path:imgUrl,title,vote_average:rating} = props.movieData
  return (
    <div className='movies-grid--movie-card'>
        <div className='movie-card--image'>
            <img src={`https://image.tmdb.org/t/p/original${imgUrl}`} alt={title}/>
        </div>
        <h3 className='movie-card--title'>{title}</h3>
        <div className="movie-card--rating">
            <AiFillStar/>
            <span>{rating}</span>
        </div>
    </div>
  )
}

export default MovieCard