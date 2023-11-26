import "./slide-content.css";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import MovieCard from "../movie-card/MovieCard";

const filterCategories = ["დღის", "კვირის", "წლის"];

function SlideContent({ name, data, filter }) {
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
            <img src="/assets/icons/video-play.svg" alt="video-play-icon" />
            &nbsp;&nbsp;
            {name}
          </h1>
          {filter ? (
            <ul className="slide-content-filter d-flex justify-content-between">
              {filterCategories.map((filterCategory) => (
                <li
                  className={`${
                    filterCategory === filterMovies ? "slide-filter-active" : ""
                  }`}
                  onClick={() => onFilter(filterCategory)}
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
    </section>
  );
}

export default SlideContent;
