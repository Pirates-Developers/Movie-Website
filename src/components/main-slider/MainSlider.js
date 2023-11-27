import "./main-slider.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MainSlider() {
  const [search, setSearch] = useState("");

  return (
    <section className="main-slider">
      <Swiper
        effect={"fade"}
        modules={[Autoplay, Pagination, EffectFade]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="d-flex justify-content-start align-items-center">
          <div className="movie-slider-img">
            <div className="movie-slider-img-overlay"></div>
            <LazyLoadImage
              src="/assets/images/header-slide-img/img1.jpg"
              alt="movie-slider-img"
              effect="blur"
            />
          </div>
          <div className="movie-slider-info">
            <div className="movie-slider-title">
              <h1>ჯონ სნოუ და ტარგარიენები სამეფო კარის თამაშები</h1>
            </div>
            <div className="movie-slider-description">
              <p>
                აქ ფილმზე რამე ინფორმაცია რომ დავწეროთ, მოკლე აღწერა ან რაიმე
                .ცოტა რომ იყოს.ასევე შეზღუდული უნდა იყოს რაოდენობა რამდენიმე
                წინადადება აქ ფილმზე რამე ინფორმაცია რომ დავწეროთ, მოკლე აღწერა
                ან რაიმე .ცოტა რომ იყოს.ასევე შეზღუდული უნდა იყოს რაოდენობა
                რამდენიმე წინადადება
              </p>
            </div>
            <div className="movie-slider-others d-flex align-items-center">
              <div className="movie-slider-rating d-flex align-items-center">
                <img
                  src="/assets/icons/header-slide-icon/imdb.svg"
                  alt="imdb-icon"
                />
                <span>9.8</span>
              </div>
              <div className="movie-slider-trailer d-flex align-items-center">
                <span>თრეილერი</span>
                <img
                  src="/assets/icons/header-slide-icon/play.svg"
                  alt="play-icon"
                />
              </div>
            </div>
            <button className="movie-slider-play-button d-flex align-items-center">
              <span>ნახვა</span>
              <span>
                <span>
                  <img
                    src="/assets/icons/header-slide-icon/play.svg"
                    alt="play-icon"
                  />
                </span>
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-start align-items-center">
          <div className="movie-slider-img">
            <div className="movie-slider-img-overlay"></div>
            <LazyLoadImage
              src="/assets/images/header-slide-img/img2.jpg"
              alt="movie-slider-img"
              effect="blur"
            />
          </div>
          <div className="movie-slider-info">
            <div className="movie-slider-title">
              <h1>აქვამენი</h1>
            </div>
            <div className="movie-slider-description">
              <p>
                აქ ფილმზე რამე ინფორმაცია რომ დავწეროთ, მოკლე აღწერა ან რაიმე
                .ცოტა რომ იყოს.ასევე შეზღუდული უნდა იყოს რაოდენობა რამდენიმე
                წინადადება ...
              </p>
            </div>
            <div className="movie-slider-others d-flex align-items-center">
              <div className="movie-slider-rating d-flex align-items-center">
                <img
                  src="/assets/icons/header-slide-icon/imdb.svg"
                  alt="imdb-icon"
                />
                <span>9.8</span>
              </div>
              <div className="movie-slider-trailer d-flex align-items-center">
                <span>თრეილერი</span>
                <img
                  src="/assets/icons/header-slide-icon/play.svg"
                  alt="play-icon"
                />
              </div>
            </div>
            <button className="movie-slider-play-button d-flex align-items-center">
              <span>ნახვა</span>
              <span>
                <span>
                  <img
                    src="/assets/icons/header-slide-icon/play.svg"
                    alt="play-icon"
                  />
                </span>
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-start align-items-center">
          <div className="movie-slider-img">
            <div className="movie-slider-img-overlay"></div>
            <LazyLoadImage
              src="/assets/images/header-slide-img/img3.jpg"
              alt="movie-slider-img"
              effect="blur"
            />
          </div>
          <div className="movie-slider-info">
            <div className="movie-slider-title">
              <h1>კუკარაჩა</h1>
            </div>
            <div className="movie-slider-description">
              <p>
                აქ ფილმზე რამე ინფორმაცია რომ დავწეროთ, მოკლე აღწერა ან რაიმე
                .ცოტა რომ იყოს.ასევე შეზღუდული უნდა იყოს რაოდენობა რამდენიმე
                წინადადება ...
              </p>
            </div>
            <div className="movie-slider-others d-flex align-items-center">
              <div className="movie-slider-rating d-flex align-items-center">
                <img
                  src="/assets/icons/header-slide-icon/imdb.svg"
                  alt="imdb-icon"
                />
                <span>9.8</span>
              </div>
              <div className="movie-slider-trailer d-flex align-items-center">
                <span>თრეილერი</span>
                <img
                  src="/assets/icons/header-slide-icon/play.svg"
                  alt="play-icon"
                />
              </div>
            </div>
            <button className="movie-slider-play-button d-flex align-items-center">
              <span>ნახვა</span>
              <span>
                <span>
                  <img
                    src="/assets/icons/header-slide-icon/play.svg"
                    alt="play-icon"
                  />
                </span>
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-start align-items-center">
          <div className="movie-slider-img">
            <div className="movie-slider-img-overlay"></div>
            <LazyLoadImage
              src="/assets/images/header-slide-img/img4.jpg"
              alt="movie-slider-img"
              effect="blur"
            />
          </div>
          <div className="movie-slider-info">
            <div className="movie-slider-title">
              <h1>ოპენხაიმერი</h1>
            </div>
            <div className="movie-slider-description">
              <p>
                აქ ფილმზე რამე ინფორმაცია რომ დავწეროთ, მოკლე აღწერა ან რაიმე
                .ცოტა რომ იყოს.ასევე შეზღუდული უნდა იყოს რაოდენობა რამდენიმე
                წინადადება ...
              </p>
            </div>
            <div className="movie-slider-others d-flex align-items-center">
              <div className="movie-slider-rating d-flex align-items-center">
                <img
                  src="/assets/icons/header-slide-icon/imdb.svg"
                  alt="imdb-icon"
                />
                <span>9.8</span>
              </div>
              <div className="movie-slider-trailer d-flex align-items-center">
                <span>თრეილერი</span>
                <img
                  src="/assets/icons/header-slide-icon/play.svg"
                  alt="play-icon"
                />
              </div>
            </div>
            <button className="movie-slider-play-button d-flex align-items-center">
              <span>ნახვა</span>
              <span>
                <span>
                  <img
                    src="/assets/icons/header-slide-icon/play.svg"
                    alt="play-icon"
                  />
                </span>
              </span>
            </button>
          </div>
        </SwiperSlide>
        <input
          className="movie-search-bar"
          type="text"
          placeholder="ძებნა &#61442;"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Swiper>
    </section>
  );
}

export default MainSlider;
