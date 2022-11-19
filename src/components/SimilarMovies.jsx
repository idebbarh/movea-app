import React,{useState,useEffect} from 'react'
import MovieCard from './MovieCard';
import CardsGridAnimation from './animation/CardsGridAnimation';
import SingleCardAnimation from './animation/SingleCardAnimation';
function SimilarMovies(props) {
    const [similarMovies,setSimilarMovies] = useState([]);
    useEffect(()=>{
      fetchSimilarMovies();
    },[props.id])
    const fetchSimilarMovies = async ()=>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${props.id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        const data = await res.json();
        setSimilarMovies(data.results)
    }
    const cardsElem = similarMovies.map((movie,index)=>{
      return (
              <SingleCardAnimation key={index} index={index}>
                <MovieCard movieData={movie} />
              </SingleCardAnimation>
            );
    })
  return (
    <div className="movie-info--similar-movies">
        <h4>more like this</h4>
        <CardsGridAnimation selectedPage={props.id}>
          <div className="movies-grid">{cardsElem}</div>
      </CardsGridAnimation>
    </div>
  )
}

export default SimilarMovies