import "./home.css";
import { MovieData } from "../../data/MovieData";
import SlideContent from "../../components/slide-content/SlideContent";
import Header from "../../components/Header-Sidebar/Header";
import Main from "../../components/main/Main";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <div className="home">
        <SlideContent name="ფილმები" data={MovieData} filter={false} />
        <SlideContent name="სერიალები" data={MovieData} filter={true} />
        <SlideContent name="ფილმები" data={MovieData} filter={false} />
        <SlideContent name="სერიალები" data={MovieData} filter={true} />
      </div>
    </>
  );
}

export default Home;
