import "./movie-card.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${data.name}`}>
        <div className="movie-card-overlay"></div>
        <LazyLoadImage
          className="movie-img"
          effect="blur"
          src={data?.img}
          alt="movie-card-img"
        />
        <div className="movie-card-top">
          <img
            src="/assets/icons/header-slide-icon/movie-card-play.svg"
            alt="movie-card-play-icon"
          />
        </div>
        <div className="movie-card-body">
          <h6 className="title">{data?.name}</h6>
          <h6 className="rating">
            <span>IMDB</span>
            &nbsp;
            <span className="rating-number">{data?.rating}</span>
          </h6>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
