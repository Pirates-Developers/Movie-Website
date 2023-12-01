import "./all-movie-card.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AllMovieCard({ data }) {
  return (
    <div key={data.id} className="all-movie-card">
      <Link
      // to={`/movie/${data.name}`}
      >
      {window.innerWidth > 900 &&
        <img
          src="/assets/icons/header-slide-icon/movie-card-play.svg"
          alt="play-icon"
          className="play-img"
        />
      }
        <LazyLoadImage
          className="all-movie-card-img"
          src={data.photo}
          alt="movie-img"
          effect="blur"
        />
        {window.innerWidth <= 900 ? (
          <div className="all-movie-title">
            <h1>{data.name}</h1>
          </div>
        ) : (
          <>
            <div className="all-movie-card-body">
              <div>
                <div className="all-movie-title">
                  <h1>{data.name}</h1>
                </div>
                <div className="all-movie-rating">
                  <p>{data.imdb}</p>
                </div>
              </div>
              <div>
                <div className="all-movie-title-english">
                  <h2>TItle</h2>
                </div>
                <div className="all-movie-imdb">
                  <p>IMDB</p>
                </div>
              </div>
              <div>
                <div className="all-movie-genres">
                  <p>{data.category}</p>
                </div>
                <div className="all-movie-year">
                  <h3>{data.year}</h3>
                </div>
              </div>
            </div>
          </>
        )}
      </Link>
    </div>
  );
}

export default AllMovieCard;
