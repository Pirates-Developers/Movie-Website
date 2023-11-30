import "./movies.css";
import SearchBox from "../../components/searchbox/SearchBox";
import FilterBoxes from "../../components/FilterBoxes/FilterBoxes";
import { FilmsData } from "../../data/FilmsData";

export default function Movies() {
  return (
    <main>
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
        <div className="film-container">
          {FilmsData.Data.map((film) => (
            <div className="film-main">
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
            </div>
          ))}
        </div>
      </>
    </main>
  );
}
