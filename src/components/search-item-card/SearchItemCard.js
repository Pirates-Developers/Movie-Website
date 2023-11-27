import "./search-item-card.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SearchItemCard({ data }) {
  return (
    <div className="search-item-card">
      <Link to={`/movie/${data.name}`}>
        <LazyLoadImage
          className="search-item-img"
          effect="blur"
          src={data?.photo}
          alt="search-item-img"
        />
        <div className="search-item-body d-flex flex-column align-items-start">
          <h6 className="title">ღიმილი</h6>
          <h6 className="year">{data.year}</h6>
        </div>
      </Link>
    </div>
  );
}

export default SearchItemCard;
