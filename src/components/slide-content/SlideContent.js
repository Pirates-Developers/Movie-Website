import "./slide-content.css";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import MovieCard from "../movie-card/MovieCard";
import christmasHat from "./images/christmas-hat.png";
import sponsorImg from "./images/sponsor.png";

const filterCategories = ["დღის", "კვირის", "წლის"];
function SlideContent({ name, data, filter, christmas, sponsor }) {
  const [filterMovies, setFilterMovies] = useState(
    filter ? filterCategories[0] : null
  );

  const onFilter = (category) => {
    setFilterMovies(category);
  };

  return (
    <section className="slide-content">
      <div className="slide-content-header">
        <div>
          <h1>
            <img
              src="/assets/icons/header-slide-icon/video-play.svg"
              alt="video-play-icon"
            />
            &nbsp;&nbsp;
            {name}
            {christmas && (
              <div className="christmas-hat-div">
                <img
                  className="christmas-hat"
                  src={christmasHat}
                  alt="Christmas Hat"
                />
              </div>
            )}
          </h1>
          {filter ? (
            <ul className="slide-content-filter d-flex justify-content-between">
              {filterCategories.map((filterCategory) => (
                <li
                  className={`${
                    filterCategory === filterMovies ? "slide-filter-active" : ""
                  }`}
                  onClick={() => onFilter(filterCategory)}
                  key={filterCategory}
                >
                  <div className="slide-filter-category">{filterCategory}</div>
                  <div className="slide-filter-border"></div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="slider">
        <Swiper
          slidesPerView={5}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {sponsor && (
        <div className="sponsor-image-container">
          <img src={sponsorImg} alt="Sponsor" />
        </div>
      )}
    </section>
  );
}

export default SlideContent;
