import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="mainPageIcon">
        <img src="/assets/images/mainPageIcon.png" alt="mainIcon" />
      </div>
      <div className="header-end">
        <Link to="/*" className="FIlMEBI hoverable">
          ფილმები
        </Link>
        <Link to="/*" className="SERIALEBI hoverable">
          სერიალები
        </Link>
        <Link to="/*" className="WIGNEBI hoverable">
          წიგნები
        </Link>
        <Link to="/*" className="ANIMACIEBI hoverable">
          ანიმე ანიმაციები
        </Link>
      </div>
    </div>
  );
}

export default Header;
