import "./movie-card.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MovieCard({ data }) {
  return (
    <div className="movie-card">
      <LazyLoadImage
        className="movie-img"
        effect="blur"
        src={data?.img}
        alt="movie-card-img"
      />
      <div className="movie-card-top">
        <img
          src="/assets/icons/movie-card-play.svg"
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
    </div>
  );
}

export default MovieCard;
