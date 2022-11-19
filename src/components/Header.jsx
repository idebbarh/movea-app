import { BsSearch } from 'react-icons/bs'
import React,{ useState,useContext,useRef, useEffect }   from 'react'
import MoviesPagesContext from './providers/MoviesPagesContext'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { AnimatePresence,motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import {GiHamburgerMenu} from 'react-icons/gi'
import SideBarContext from './providers/SideBarContext';
function Header() {
    const {dispatch,spliderRef} = useContext(MoviesPagesContext);
    const {setIsShowingSideBar} = useContext(SideBarContext);
    const [isDark,setIsdark] = useState(true);
    const [suggestMovies,setSuggestMovies] = useState([]);
    const [inputVal,setInputVal] = useState([]);
    const navigate = useNavigate();
    const isSmallScreens = useMediaQuery('(max-width:1024px)');
    useEffect(() => {
        if(inputVal.length > 0) {
            fetchSuggestMovies();
        }else{
            setSuggestMovies([]);
        }
    }, [inputVal]);
    useEffect(()=>{
        if(isDark){
            document.documentElement.style.setProperty('--main-background-color', '#1f1d2c');
            document.documentElement.style.setProperty('--main-blue-color', '#2384f8');
            document.documentElement.style.setProperty('--main-white-color', '#eff3ff');
            document.documentElement.style.setProperty('--card-background', '#1f1d2c');
            document.documentElement.style.setProperty('--side-bar-icons-color', '#584957');
            document.documentElement.style.setProperty('--main--glass-blue-color', '#2383f82d');
            document.documentElement.style.setProperty('--side-bar-text-color', '#958d95');
            document.documentElement.style.setProperty('--card-box-shadow', 'rgba(0 0, 0, 0) 0px 0px 0px 0px');
            
        }else{
            document.documentElement.style.setProperty('--main-background-color', '#edf3f0');
            document.documentElement.style.setProperty('--main-blue-color', '#40d391');
            document.documentElement.style.setProperty('--main-white-color', '#272727');
            document.documentElement.style.setProperty('--card-background', '#ffffff');
            document.documentElement.style.setProperty('--side-bar-icons-color', '#c4d3cc');
            document.documentElement.style.setProperty('--main--glass-blue-color', '#c3f7dc');
            document.documentElement.style.setProperty('--side-bar-text-color', '#3f3f3f');
            document.documentElement.style.setProperty('--card-box-shadow', 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px');
        }
    },[isDark])
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
        {isSmallScreens && <GiHamburgerMenu className='header--burger-icon' onClick={()=>setIsShowingSideBar(prevState=>!prevState)}/>}
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
                <AnimatePresence mode='wait'>
                    {suggestMovies.length > 0 && <motion.div                     
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -10, opacity: 0 }}
                                                    className="suggest-moves-container">
                        {suggestMoviesElem}
                    </motion.div>}
                </AnimatePresence>
            </div>
        </form>
    </div>
  )
}

export default Header