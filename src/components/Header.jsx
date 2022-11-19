import { BsSearch } from 'react-icons/bs'
import React,{ useState,useContext,useRef, useEffect }   from 'react'
import MoviesPagesContext from './providers/MoviesPagesContext'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
function Header() {
    const {dispatch,spliderRef} = useContext(MoviesPagesContext);
    const [isDark,setIsdark] = useState(true);
    const [suggestMovies,setSuggestMovies] = useState([]);
    const [inputVal,setInputVal] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if(inputVal.length > 0) {
            fetchSuggestMovies();
        }else{
            setSuggestMovies([]);
        }
    }, [inputVal]);
    function switchMode(){
        setIsdark(prevState=>!prevState)
    }
    const search = (e)=>{
        e.preventDefault();
        navigate('/');
        dispatch({type:'search',payload:{selectedPage:inputVal,genreToId:''}});
        setInputVal('')
        if (spliderRef.current) {
            spliderRef.current.go(0);
        }else{
            setTimeout(()=>{
                if (spliderRef.current) {
                    spliderRef.current.go(0);
                }
            },300)
        }
    }
    const fetchSuggestMovies = async ()=>{
        let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${inputVal}`);
        let data = await res.json();
        let moviesNames = data.results.map(movie=>{
            return {title:movie.title,id:movie.id}
        })
        setSuggestMovies(moviesNames.slice(0,10));
    }
    const suggestMoviesElem = suggestMovies.map((movies,index)=>{
        return (
            <Link to={`/movie/${movies.id}`} onClick={()=>setInputVal('')} key={index}><span>{movies.title}</span></Link>
        )
    })
  return (
    <div className='header'>
        <div className={`header--mode-switcher ${isDark ? 'dark-mode' : 'light-mode'}`}>
            <h3 className="mode-switcher--hello-text">GoodNight!</h3>
            <div className="mode-switcher--container" onClick={switchMode}>
                <span className="mode-switcher--icon" role='img' aria-label='moon'>🌜</span>
                <span className="mode-switcher--icon" role='img' aria-label='sun'>🌞</span>
                <div className="mode-switcher--ball"></div>
            </div>
        </div>
        <form className='header--form' onSubmit={(e)=>search(e)}>
            <div className="from--search-input">
                <BsSearch className='search-input--icon'/>
                <input value={inputVal} type="text" placeholder='type to search' onChange={(e)=>setInputVal(e.target.value)}/>
                {suggestMovies.length > 0 && <div className="suggest-moves-container">{suggestMoviesElem}</div>}
            </div>
        </form>
    </div>
  )
}

export default Header