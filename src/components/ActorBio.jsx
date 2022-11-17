import React,{useState,useEffect} from 'react'

function ActorBio({actorData}) {
    const [[start,end],setTextToShow] = useState([0,0]);

    useEffect(()=>{
        setTextToShow([0,Math.floor(actorData?.biography.length/2)])        
    },[actorData])

    function seeMoreClick(){
        setTextToShow(()=>[start,end < actorData?.biography.length ? actorData?.biography.length : Math.floor(actorData?.biography.length/2)]);
    }

    return (actorData?.biography.length > 0 && <div className="actor-info--bio">
                <p>
                    {actorData?.biography.slice(start,end)}
                    {
                    <button onClick={seeMoreClick} className="actor-info--see-more-btn">
                        {end < actorData?.biography.length ? '...show more' : 'show less'}
                    </button>
                    }
                </p>
            </div>)
}

export default ActorBio