import "./filmebi.css";
import SearchBox from "../../searchbox/SearchBox";
import FilterBoxes from "../../FilterBoxes/FilterBoxes";
import { FilmsData } from "./FilmsData";

export default function Films() {
  return (
    <form>
      <div className="film-search-filter-div">
        <div className="film-div">
          ფილმები
          <img
            src="./assets/images/header>films-img/video-play.png"
            alt="film-icon"
          />
        </div>
        <SearchBox />
        <FilterBoxes />
      </div>
      <>
        <div className="film-container">
          {FilmsData.Data.map((film) => (
            <div key={film.id} className="film">
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
      </>
    </form>
  );
}
