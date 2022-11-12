import React from 'react'
import {Link} from 'react-router-dom'
function LandingMovie(props) {
    const randomIndex = Math.floor(Math.random()*props.moviesData.length);
    const randomMovies = props.moviesData[randomIndex];
    const {backdrop_path:imgUrl,title,id} = randomMovies !== undefined ? randomMovies : {};
  return (
    <Link to={`/movie/${id}`}>
        <div className='landing-movie'>
            <div className="landing-movie--image">
                <img src={imgUrl !== undefined ? `https://image.tmdb.org/t/p/original${imgUrl}` : ''} alt={title} />
                <div className="overlay"></div>
            </div>
            <h3 className="landing-movie--title">{title}</h3>
        </div>
    </Link>

  )
}

export default LandingMovie