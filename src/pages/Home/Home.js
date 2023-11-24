import "./home.css";
import { MovieData } from "../../data/MovieData";
import SlideContent from "../../components/slide-content/SlideContent";

function Home() {
  return (
    <div className="home">
      <SlideContent name="ფილმები" data={MovieData} filter={false} />
      <SlideContent name="სერიალები" data={MovieData} filter={true} />
      <SlideContent name="ფილმები" data={MovieData} filter={false} />
      <SlideContent name="სერიალები" data={MovieData} filter={true} />
    </div>
  );
}

export default Home;
