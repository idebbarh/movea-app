import React from 'react'
import Home from './Home'
import {Route,Routes} from 'react-router-dom'
function Pages() {
  return (
    <div className='pages'>
        <Routes>
            <Route path='/home' element={<Home pageTitle='Random Movies'/>}/>
            <Route path='/popular' element={<Home pageTitle='Popular Movies'/>}/>
            <Route path='/top-rated' element={<Home pageTitle='Top Rated Movies'/>}/>
            <Route path='/upcoming' element={<Home pageTitle='Upcoming Movies'/>}/>
            <Route path='/favorite' element={<Home pageTitle='Favorite Movies'/>}/>
        </Routes>
    </div>
  )
}

export default Pages