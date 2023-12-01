import "./all-movie-card.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AllMovieCard({ data }) {
  return (
    <div key={data.id} className="all-movie-card">
      <Link to={`/movie/${data.name}`}>
        <img
          src="/assets/icons/header-slide-icon/movie-card-play.svg"
          alt="play-icon"
          className="play-img"
        />
        <LazyLoadImage
          className="all-movie-card-img"
          src={data.photo}
          alt="movie-img"
          effect="blur"
        />
        <div className="all-movie-card-body">
          <div>
            <div>
              <h1 className="all-movie-title">{data.name}</h1>
            </div>
            <div>
              <p className="all-movie-rating">{data.imdb}</p>
            </div>
          </div>
          <div>
            <div>
              <h2 className="all-movie-title-english">TItle</h2>
            </div>
            <div>
              <p className="all-movie-imdb">IMDB</p>
            </div>
          </div>
          <div>
            <div>
              <p className="all-movie-genres">asdasd</p>
            </div>
            <div>
              <p className="all-movie-year">asdasd</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AllMovieCard;
