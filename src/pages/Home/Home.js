import "./home.css";
import { MovieData } from "../../data/MovieData";
import SlideContent from "../../components/slide-content/SlideContent";
import MainSlider from "../../components/main-slider/MainSlider";

function Home() {
  return (
    <div className="home">
      <MainSlider />
      <SlideContent
        name="ფილმები"
        data={MovieData}
        filter={false}
        christmas={false}
      />
      <SlideContent
        name="საახალწლო ფილმები"
        data={MovieData}
        filter={false}
        christmas={true}
        sponsor={true}
      />
      <SlideContent
        name="სერიალები"
        data={MovieData}
        filter={true}
        christmas={false}
      />
      <SlideContent
        name="ფილმები"
        data={MovieData}
        filter={false}
        christmas={false}
      />
    </div>
  );
}

export default Home;
