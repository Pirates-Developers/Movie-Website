import "./movies.css";
import { useState } from "react";
import useMoviesGet from "../../hooks/useMoviesGet";
import SearchBox from "../../components/searchbox/SearchBox";
import FilterBoxes from "../../components/FilterBoxes/FilterBoxes";
import InfiniteScroll from "../../components/infinite-scroll/InfiniteScroll";

const api =
  "https://api.themoviedb.org/3/discover/movie?api_key=b96be90fb5eb89b775dfd1f4c66779f1";

export default function Movies() {
  const [pageNumber, setPageNumber] = useState(1);

  const { movies, hasMore } = useMoviesGet(api, pageNumber);

  return (
    <div className="movies">
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
      <div className="film-container">
        <InfiniteScroll
          data={movies}
          hasMore={hasMore}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
}
