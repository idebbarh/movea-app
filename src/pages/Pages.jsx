import React from 'react'
import Home from './Home'
import MovieInfo from './MovieInfo'
import {Route,Routes} from 'react-router-dom'
function Pages() {
  return (
    <div className='pages'>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/movie/:id'} element={<MovieInfo/>}/>
        </Routes>
    </div>
  )
}

export default Pages