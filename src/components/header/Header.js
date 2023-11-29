import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header d-flex justify-content-end">
      <div className="header-navigation">
        <div className="header-links">
          <NavLink to="/movies" className="header-link">
            ფილმები
          </NavLink>
          <NavLink to="/non-existing-tvshows" className="header-link">
            სერიალები
          </NavLink>
          <NavLink to="/non-existing-animes" className="header-link">
            ანიმე
          </NavLink>
          <NavLink to="/non-existing-books" className="header-link">
            წიგნები
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
