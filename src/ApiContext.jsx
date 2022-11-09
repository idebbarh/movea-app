import { createContext,useState } from "react";


const ApiContext = createContext()
const apiKey = process.env.REACT_APP_API_KEY
const apiPerPage = {
  'home':`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
  'popular':`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  'top rated':`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  'upcoming':`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
}

export function ApiProvider({children}){
    const [selectedPage,setSelectedPage] = useState('home');
    return (
        <ApiContext.Provider value={{selectedPage:selectedPage,setSelectedPage:setSelectedPage,curApiUrl:apiPerPage[selectedPage]}}>
            {children}
        </ApiContext.Provider>
    )

}

export default ApiContext;