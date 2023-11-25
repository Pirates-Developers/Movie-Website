import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header d-flex justify-content-end">
      <div className="header-navigation">
        <div className="header-links">
          <NavLink to="/" className="header-link">
            ფილმები
          </NavLink>
          <NavLink to="/" className="header-link">
            სერიალები
          </NavLink>
          <NavLink to="/" className="header-link">
            ანიმე
          </NavLink>
          <NavLink to="/" className="header-link">
            წიგნები
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
