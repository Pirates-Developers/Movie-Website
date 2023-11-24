import "./header.css";
import mainPageIcon from "../../images/mainPageIcon.png";

function Header() {
  return (
    <div className="header">
      <div className="absolute cursor-pointer">
        <img src={mainPageIcon} alt="mainIcon" />
      </div>
      <div className="header-end">
        <div src="/" className="FIlMEBI hoverable">
          ფილმები
        </div>
        <div src="/" className="SERIALEBI hoverable">
          სერიალები
        </div>
        <div src="/" className="WIGNEBI hoverable">
          წიგნები
        </div>
        <div src="/" className="ANIMACIEBI hoverable">
          ანიმე ანიმაციები
        </div>
      </div>
    </div>
  );
}

export default Header;
