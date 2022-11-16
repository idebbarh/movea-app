import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
function ActorInfo() {
    const {id:actor_id} = useParams();
    const [actorData,setActorData] = useState(null);

    useEffect(()=>{
        fetchActorData();
    },[actor_id])
    
    const fetchActorData = async ()=>{
        const res = await fetch(`https://api.themoviedb.org/3/person/${actor_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const data = await res.json();
        console.log(data)
    }
  return (
    <div>{actor_id}</div>
  )
}

export default ActorInfo