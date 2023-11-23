import "./slide-content.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import MovieCard from "../movie-card/MovieCard";

function SlideContent({ name, data, filter }) {
  return (
    <div className="slide-content">
      <div className="slide-content-header">
        <div>
          <h1>
            <img src="/assets/icons/video-play.svg" alt="video-play-icon" />
            &nbsp;&nbsp;
            {name}
          </h1>
          {filter ? (
            <ul className="slide-content-filter">
              <li>დღის</li>
              <li>კვირის</li>
              <li>წლის</li>
            </ul>
          ) : null}
        </div>
        <div className="border" />
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
    </div>
  );
}

export default SlideContent;
