import React from 'react'

function MovieCast(props) {
    console.log(props.castInfos)
  return (
    <div className='cast'>
        <div className="cast--image">
            <img src={`https://image.tmdb.org/t/p/original${props.castInfos.profile_path}`} alt="" />
        </div>
        <div className="cast--info">
            <span className="cast--name">{props.castInfos.name}</span>
            <span className="cast--character">{props.castInfos.character.split("/")[0]}</span>
        </div>
    </div>
  )
}

export default MovieCast