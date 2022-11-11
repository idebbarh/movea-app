import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
function MovieCard(props) {
    const {poster_path:imgUrl,title,vote_average:rating,id} = props.movieData
  return (
    <Link to={`/movie/${id}`}>
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
    </Link>
  )
}

export default MovieCard