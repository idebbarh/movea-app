import { createContext,useEffect,useState } from "react";


const MoviesPagesContext = createContext()
const apiKey = process.env.REACT_APP_API_KEY
const apiPerPageCat = {
  'home':`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
  'popular':`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  'top rated':`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  'upcoming':`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
}

export function ApiProvider({children}){
    const [selectedPage,setSelectedPage] = useState('home');
    const [curApi,setCurApi] = useState(apiPerPageCat[selectedPage])
    const [genreId,setGenreId] = useState({})
    useEffect(()=>{
        getAllCategories()
    },[])
    
    const getAllCategories = async ()=>{
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const data = await res.json();
        localStorage.setItem('allCategories',JSON.stringify(data.genres));
        let genreToId = {}
        data.genres.forEach(g=>{
            genreToId = {...genreToId,[g.name]:g.id}
        })
        console.log(genreToId)
        setGenreId(genreToId)
    }

    useEffect(()=>{
        setCurApi(apiPerPageCat[selectedPage] !== undefined ? apiPerPageCat[selectedPage] : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=${genreId[selectedPage]}`)
    },[selectedPage])
    return (
        <MoviesPagesContext.Provider value={{selectedPage:selectedPage,setSelectedPage:setSelectedPage,curApiUrl:curApi}}>
            {children}
        </MoviesPagesContext.Provider>
    )

}

export default MoviesPagesContext;