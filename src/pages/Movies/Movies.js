import axios from "axios";
import "./movies.css";
import { useState, useEffect } from "react";
// import { movies } from "../../data/MovieData";
import SearchBox from "../../components/searchbox/SearchBox";
import FilterBoxes from "../../components/FilterBoxes/FilterBoxes";
import AllMovieCard from "../../components/all-movie-card/AllMovieCard";
// import AllMovieCard from "../../components/all-movie-card/AllMovieCard";

export default function Movies() {
  const API_KEY = "api_key=b96be90fb5eb89b775dfd1f4c66779f1";
  const BASE_URL = "https://api.themoviedb.org/3";
  const discoverURL = `${BASE_URL}/discover/movie?${API_KEY}`;
  // const searchURL = `${BASE_URL}/search/movie?${API_KEY}`;

  const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(discoverURL);
  }, []);

  const getMovies = async (url) => {
    await axios
      .get(url)
      .then((res) => {
        const getData = res.data.results;
        setMovies(getData);
        console.log(getData);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchTerm) {
  //     getMovies(`${searchURL}&query=${encodeURIComponent(searchTerm)}`);
  //   }
  // // };

  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const url = `${discoverURL}&page=${page}`;
      try {
        const response = await axios.get(url);
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };

    loadMovies();
  }, [page]);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight * 1.5) {
      // Adjust this threshold as needed
      setPage((prevPage) => prevPage + 1);
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
      <div className="film-container">
        {movies.map((movie, index) => (
          <AllMovieCard data={movie} key={index} />
        ))}
        {/* {movies.map((movie, index) => (
          <AllMovieCard data={movie} key={index} />
        ))} */}
      </div>
    </main>
  );
}
