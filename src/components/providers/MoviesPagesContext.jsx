import { createContext,useRef,useReducer,useEffect,useState } from "react";

const MoviesPagesContext = createContext()
const apiKey = process.env.REACT_APP_API_KEY
const apiPerPageCat = {
  'home':`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
  'popular':`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  'top rated':`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  'upcoming':`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
}
const initialState = {apiUrl:apiPerPageCat['home'],data:[],selectedPage:'home'};
const ACTIONS = {
    CATEGOIE:'category',
    GENRES:'genres',
    FAVORITE:'favorite'
}

function reducer(state,action){
    if(action.type === ACTIONS.CATEGOIE){
        return {apiUrl:apiPerPageCat[action.payload.selectedPage],data:[],selectedPage:action.payload.selectedPage}
    }else if(action.type === ACTIONS.GENRES){
        return {apiUrl:`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=${action.payload.genreToId[action.payload.selectedPage]}`,data:[],selectedPage:action.payload.selectedPage}
    }else if(action.type === ACTIONS.FAVORITE){
        return {apiUrl:null,data:localStorage.getItem('favoriteMovies') ? JSON.parse(localStorage.getItem('favoriteMovies')) : [],selectedPage:action.payload.selectedPage}
    }else if(action.type === 'anotherPage'){
        return {apiUrl:null,data:null,selectedPage:''}
    }else{
        throw new Error();
    }
}

export function ApiProvider({children}){
    const [state,dispatch] = useReducer(reducer,initialState)
    const spliderRef = useRef(null);
    const [genreToId,setGenreId] = useState({});
    useEffect(()=>{
        const fetchGenre = async ()=>{
            const res = await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
              );
              const data = await res.json();
              let genreToId = {}
              data.genres.forEach(g=>{
                  genreToId = {...genreToId,[g.name]:g.id}
              })
              setGenreId(genreToId)
        }
        fetchGenre()
    },[])
    return (
        <MoviesPagesContext.Provider value={{dispatch,spliderRef,selectedPage:state['selectedPage'],dataToUse:state,genreToId:genreToId}}>
            {children}
        </MoviesPagesContext.Provider>
    )

}

export default MoviesPagesContext;