import React, { useEffect, useState ,useContext} from 'react'
import MoviesPagesContext from '../MoviesPagesContext';

function Categories() {
    const [allCategories,setAllCategories] = useState([]);
    const {selectedPage,setSelectedPage} = useContext(MoviesPagesContext)
    useEffect(()=>{
        const categoriesFromLocalStorage = localStorage.getItem('allCategories');
        if(categoriesFromLocalStorage){
            setAllCategories(JSON.parse(categoriesFromLocalStorage))
        }else {
            getAllCategories();
        }
    },[])
    const getAllCategories = async ()=>{
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const data = await res.json();
        localStorage.setItem('allCategories',JSON.stringify(data.genres));
        setAllCategories(data.genres)
    }
    const catoriesLinksElem = allCategories.map(categ=>{
            return <div key={categ.id} className='categoris-link' onClick={()=>setSelectedPage(categ.name)}>{categ.name}</div>
    })
  return (
    <div className="categories">
        <h3 className="categories--title">Category</h3>
        <div className='categories-selector'>
            {catoriesLinksElem}
        </div>
    </div>
  )
}

export default Categories