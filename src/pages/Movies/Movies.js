import "./movies.css";
import { useState, useEffect } from "react";
import { movies } from "../../data/MovieData";
import SearchBox from "../../components/searchbox/SearchBox";
import FilterBoxes from "../../components/FilterBoxes/FilterBoxes";
import AllMovieCard from "../../components/all-movie-card/AllMovieCard";

export default function Movies() {
  // const [moviesToShow, setMoviesToShow] = useState([]);
  // const [page, setPage] = useState(1);

  // const loadMovies = () => {
  //   const startIndex = (page - 1) * 10;
  //   const selectedMovies = movies.slice(startIndex, startIndex + 10);
  //   setMoviesToShow(moviesToShow.concat(selectedMovies));
  // };

  // useEffect(() => {
  //   loadMovies();
  // }, [page]);

  // const handleScroll = (event) => {
  //   const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
  //   if (scrollHeight - scrollTop === clientHeight) {
  //     setPage(page + 1);
  //   }
  // };

  return (
    <main
    // onScroll={handleScroll}
    // style={{ overflowY: "auto", height: "100vh" }}
    >
      <div className="film-search-filter-div">
        <div className="film-div">
          ფილმები
          <img
            src="./assets/images/header-films-img/video-play.png"
            alt="film-icon"
          />
        </div>
        <SearchBox />
        <FilterBoxes />
      </div>
      <>
        <div className="film-height">
          <div className="film-container">
            {movies.map((movie, index) => (
              <AllMovieCard data={movie} key={index} />
            ))}
          </div>
        </div>
      </>
    </main>
  );
}
