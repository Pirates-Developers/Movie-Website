import "./home.css";
import { MovieData } from "../../data/MovieData";
import SlideContent from "../../components/slide-content/SlideContent";
import MainSlider from "../../components/main-slider/MainSlider";
import SponsorArea from "../../components/sponsor-area/SponsorArea";

function Home() {
  return (
    <div className="home">
      <MainSlider />
      <SlideContent
        name="ფილმები"
        data={MovieData}
        filter={false}
        christmas={false}
        sponsor={false}
      />
      <SlideContent
        name="საახალწლო ფილმები"
        data={MovieData}
        filter={false}
        christmas={true}
        sponsor={true}
      />
      <SponsorArea sponsorImg="/assets/images/sponsor.png" />
      <SlideContent
        name="სერიალები"
        data={MovieData}
        filter={true}
        christmas={false}
        sponsor={false}
      />
      <SlideContent
        name="ფილმები"
        data={MovieData}
        filter={false}
        christmas={false}
        sponsor={false}
      />
    </div>
  );
}

export default Home;
