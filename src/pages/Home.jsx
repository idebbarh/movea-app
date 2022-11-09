import React from 'react'
import { useEffect, useState } from "react"
import {useContext} from 'react'
import ApiContext from '../ApiContext';
function Home() {
  const [moviesData,setMoviesData] = useState([]);
  const {selectedPage,curApiUrl} = useContext(ApiContext) 
  useEffect(()=>{

  },[])
  const fetchMoviesData = async ()=>{
    console.log(curApiUrl)
    const res = await fetch(curApiUrl);
    const data = await res.json()
    localStorage.setItem(selectedPage,data.results)
    setMoviesData(data.results)
  }
  console.log(curApiUrl)
  return (
    <div className='main-movies-contents'>

    </div>
  )
}

export default Home