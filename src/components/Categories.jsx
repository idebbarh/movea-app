import React, { useEffect, useState, useContext } from "react";
import MoviesPagesContext from "../MoviesPagesContext";
import { nanoid } from "nanoid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function Categories() {
  const [allCategories, setAllCategories] = useState([]);
  const { selectedPage, setSelectedPage } = useContext(MoviesPagesContext);
  const splideIndexToGenre = {
    0: selectedPage,
    1: "Action",
    2: "Adventure",
    3: "Animation",
    4: "Comedy",
    5: "Crime",
    6: "Documentary",
    7: "Drama",
    8: "Family",
    9: "Fantasy",
    10: "History",
    11: "Horror",
    12: "Music",
    13: "Mystery",
    14: "Romance",
    15: "Science Fiction",
    16: "TV Movie",
    17: "Thriller",
    18: "War",
    19: "Western",
  };
  useEffect(() => {
    const categoriesFromLocalStorage = localStorage.getItem("allCategories");
    if (categoriesFromLocalStorage) {
      setAllCategories(JSON.parse(categoriesFromLocalStorage));
    } else {
      getAllCategories();
    }
  }, []);
  const getAllCategories = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data = await res.json();
    localStorage.setItem("allCategories", JSON.stringify(data.genres));
    setAllCategories(data.genres);
  };
  const getSlidePage = (elem) => {
    const index = elem.index;
    if (index === 0) {
    //   setSelectedPage("home");
    } else {
      setSelectedPage(splideIndexToGenre[index]);
    }
  };
  const catoriesLinksElem = allCategories.map((categ, i) => {
    return (
      <SplideSlide key={nanoid()}>
        <div className="categoris-link">{categ.name}</div>
      </SplideSlide>
    );
  });
  return (
    <div className="categories">
      <h3 className="categories--title">Category</h3>
      <div className="categories-selector">
        <Splide
          options={{
            rewind: true,
            autoWidth: true,
            direction: "ttb",
            perPage: 3,
            focus: "center",
            heightRatio: 5,
            type: "slide",
            cover: true,
            pagination: false,
            perMove: 1,
            arrows: false,
            trimSpace: false,
            // updateOnMove:true,
          }}
          onActive={(event, elem) => getSlidePage(elem)}
        >
          {[
            <SplideSlide key={nanoid()}>
              <div className="categoris-link">Select Genre</div>
            </SplideSlide>,
            ...catoriesLinksElem,
          ]}
        </Splide>
      </div>
    </div>
  );
}

export default Categories;
