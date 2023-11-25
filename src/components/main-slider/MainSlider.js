import "./main-slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

function MainSlider() {
  return (
    <section className="main-slider">
      <Swiper
        effect={"fade"}
        modules={[Autoplay, Pagination, EffectFade]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        className="mySwiper"
      >
        <SwiperSlide className="d-flex justify-content-start align-items-center">
          <div className="movie-slider-img">
            <div className="movie-slider-img-overlay"></div>
            <img
              src="https://images4.alphacoders.com/653/thumbbig-653613.webp"
              alt="movie-slider-img"
            />
          </div>
          <div className="movie-slider-info">
            <div className=".movie-slider-title">
              <h1>სამეფო კარის თამაშები</h1>
            </div>
            <div className="movie-slider-description">
              <p>
                აქ ფილმზე რამე ინფორმაცია რომ დავწეროთ, მოკლე აღწერა ან რაიმე
                .ცოტა რომ იყოს.ასევე შეზღუდული უნდა იყოს რაოდენობა რამდენიმე
                წინადადება ...
              </p>
            </div>
            <div className="movie-slider-others">
              <div className="movie-slider-rating">
                <img src="/assets/icons/imdb.svg" alt="imdb-icon" />
                &nbsp;
                <span>9.8</span>
              </div>
              <div className="movie-slider-trailer">
                <span>თრეილერი</span>&nbsp;
                <img src="/assets/icons/play.svg" alt="play-icon" />
              </div>
            </div>
            <button className="movie-slider-play-button">
              <span>ნახვა</span>
              <span>
                <span>
                  <img src="/assets/icons/play.svg" alt="play-icon" />
                </span>
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-start align-items-center">
          <img
            className="movie-slider-img"
            src="https://images3.alphacoders.com/133/thumbbig-1334627.webp"
            alt="movie-slider-img"
          />
          <div className="movie-slider-description">
            <h1 className="movie-slider-title">სამეფო კარის თამაშები</h1>
            <p className="movie-slider-description">
              აქ ფილმზე რამე ინფორმაცია რომ დავწეროთ, მოკლე აღწერა ან რაიმე
              .ცოტა რომ იყოს.ასევე შეზღუდული უნდა იყოს რაოდენობა რამდენიმე
              წინადადება ...
            </p>
            <div className="movie-slider-others">
              <div className="movie-slider-rating">
                <img src="/assets/icons/imdb.svg" alt="imdb-icon" />
                &nbsp;
                <span>9.8</span>
              </div>
              <div className="movie-slider-trailer">
                <span>თრეილერი</span>&nbsp;
                <img src="/assets/icons/play.svg" alt="play-icon" />
              </div>
            </div>
            <button className="movie-slider-play-button">
              <span>ნახვა</span>
              <span>
                <span>
                  <img src="/assets/icons/play.svg" alt="play-icon" />
                </span>
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-start align-items-center">
          <img
            className="movie-slider-img"
            src="https://images4.alphacoders.com/133/thumbbig-1337072.webp"
            alt="movie-slider-img"
          />
          <div className="movie-slider-description">
            <h1 className="movie-slider-title">სამეფო კარის თამაშები</h1>
            <p className="movie-slider-description">
              აქ ფილმზე რამე ინფორმაცია რომ დავწეროთ, მოკლე აღწერა ან რაიმე
              .ცოტა რომ იყოს.ასევე შეზღუდული უნდა იყოს რაოდენობა რამდენიმე
              წინადადება ...
            </p>
            <div className="movie-slider-others">
              <div className="movie-slider-rating">
                <img src="/assets/icons/imdb.svg" alt="imdb-icon" />
                &nbsp;
                <span>9.8</span>
              </div>
              <div className="movie-slider-trailer"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-start align-items-center">
          <img
            className="movie-slider-img"
            src="https://images6.alphacoders.com/132/thumbbig-1328391.webp"
            alt="movie-slider-img"
          />
          <div className="movie-slider-description">
            <h1 className="movie-slider-title">სამეფო კარის თამაშები</h1>
            <p className="movie-slider-description">
              აქ ფილმზე რამე ინფორმაცია რომ დავწეროთ, მოკლე აღწერა ან რაიმე
              .ცოტა რომ იყოს.ასევე შეზღუდული უნდა იყოს რაოდენობა რამდენიმე
              წინადადება ...
            </p>
            <div className="movie-slider-others">
              <div className="movie-slider-rating">
                <img src="/assets/icons/imdb.svg" alt="imdb-icon" />
                &nbsp;
                <span>9.8</span>
              </div>
              <div className="movie-slider-trailer"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MainSlider;
