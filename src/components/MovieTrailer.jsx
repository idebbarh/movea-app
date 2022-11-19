import React from 'react'
import {RemoveScrollBar} from 'react-remove-scroll-bar';
function MovieTrailer({setShowTrailer,trailerInfo}) {
  return (
    <div className='movie-trailer'>
        <RemoveScrollBar />
        <div className="movie-trailer--overlay" onClick={()=>setShowTrailer(false)}></div>
        <iframe src={trailerInfo ? `https://www.youtube.com/embed/${trailerInfo?.key}` : ''} frameBorder="0"></iframe>
    </div>
  )
}

export default MovieTrailer