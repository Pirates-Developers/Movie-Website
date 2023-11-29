import "./movie.css";
import SearchBox from "../../components/searchbox/SearchBox";
import { MovieData } from "../../data/MovieData";
import SlideContent from "../../components/slide-content/SlideContent";
import VideoPlayer from "../../components/player/VideoPlayer";

export default function Films() {
  return (
    <div className="outer">
      <SearchBox />
      <div className="marginer"></div>
      <VideoPlayer />
      <div className="free-banner">სპონსორის სივრცე</div>
      <div className="details-container">
        <div className="details-container-inner">
          <div className="image-triler">
            <img
              src="./assets/images/slide-img/movie-img-2.png"
              alt="film-icon"
              className="movie-image"
            />
            <div className="trailer-button">
              <img
                src="./assets/icons/detailed-icons/playTrailer.svg"
                alt="film-icon"
              />
              <p className="triler-text">თრილერი</p>
            </div>{" "}
          </div>
        </div>
        <div>
          <div className="text-parent">
            <div className="text-container-first">
              <h2 className="detailed-title-geo">ბეჭდების მბრძანებელი</h2>
              <h3 className="detailed-title-eng">LORD OF THE RINGS</h3>
            </div>
            <div className="detailed-right">
              <div className="imdb-container">
                <img
                  src="./assets/icons/detailed-icons/imdb.svg"
                  alt="film-icon"
                  className="imdbIcon"
                />
                <p className="imdb-text">9.8</p>
              </div>
              <img
                src="./assets/icons/detailed-icons/fav.svg"
                alt="film-icon"
                className="fav"
              />
            </div>
          </div>
          <div className="text-container-second">
            <p className="detailed-text">წელი: 2023</p>
            <p className="detailed-text">ჟანრი: სათავგადასავლო</p>
            <p className="detailed-text">რეჟისორი: მე ვარ :დ</p>
            <p className="detailed-text">
              მსახიობები: აქაც მე ვთამაშობ ყველა როლში :დ
            </p>
            <p className="detailed-text">ქვეყანა: დიდი ბრიტანეთი</p>
            <p className="detailed-text">მოკლე აღწერა:</p>
            <p className="detailed-text description">
              დვდავბდსვბნლკდ ნვლდკავ ნდალკვნ დალკლ ნვდ კლდვხაჰჯსც ჰკ სცჯვკ
              ხცსჰკჯც ბსკჯცბ ჯკბცკსბ კჯსც ბსლჯლსაჯცვ სლვბლსლკვც სლვნლსნlc sc ls
              cs kavkjbaskjbfkjasbvjkls bვფჯკბნჯკალს ვკჯსვბსალფბოალბვ
              ალსვნსაჯბოვ ვსაიკჯბვ ასლივბნასლჯკნვ ჯსბავჰგოაჯნსბვ ოსაihfwoe
              ბსლჯლსაჯცვ სლვბლსლკვც სლვნლსნlc sc lscs kavkjbaskjbfkjasbvjkls
              bვფჯკბნჯკალს ვკჯსვბსალფბოალბვ{" "}
            </p>
          </div>
          <div className="free-banner2">სპონსორის სივრცე</div>
        </div>
      </div>
      <div className="detailed-page-swiper">
        <SlideContent
          name="რეკომენდებული"
          data={MovieData}
          filter={false}
          christmas={false}
          sponsor={false}
        />
      </div>
    </div>
  );
}
