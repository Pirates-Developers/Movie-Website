import React, { useState, useEffect } from "react";
import "./movies.css";
import SearchBox from "../../components/searchbox/SearchBox";
import FilterBoxes from "../../components/FilterBoxes/FilterBoxes";
import { FilmsData } from "../../data/FilmsData";

export default function Movies() {
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [page, setPage] = useState(1);

  const loadMovies = () => {
    const startIndex = (page - 1) * 10;
    const selectedMovies = FilmsData.Data.slice(startIndex, startIndex + 10);
    setMoviesToShow(moviesToShow.concat(selectedMovies));
  };

  useEffect(() => {
    loadMovies();
  }, [page]);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage(page + 1);
    }
  };

  return (
    <main
      onScroll={handleScroll}
      style={{ overflowY: "auto", height: "100vh" }}
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
            {moviesToShow.map((film) => (
              <div key={film.id} className="film">
                <img
                  src="./assets/images/PLAY.png"
                  alt="PLAY-icon"
                  className="PLAY-img"
                />
                <img src={film.img} alt={film.img} />
                <div className="image-texts">
                  <div className="satauri-rating">
                    <div className="start">
                      <h3 className="h1">{film.name}</h3>
                    </div>
                    <div className="end">
                      <p className="p1">{film.rating}</p>
                    </div>
                  </div>
                  <div className="title-imdb">
                    <div className="start">
                      <h3 className="h2">{film.Title}</h3>
                    </div>
                    <div className="end">
                      <p className="p2"> {film.IMDB} </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </main>
  );
}
