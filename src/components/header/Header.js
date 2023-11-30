import "./header.css";
import { NavLink } from "react-router-dom";

function Header({ setSidebarOpen }) {
  return (
    <header className="header d-flex justify-content-lg-end justify-content-md-end">
      {/* Render Header On Different Screen Width */}
      {window.innerWidth <= 900 ? (
        <>
          <div className="brand-logo d-flex justify-content-center align-items-center">
            <h1 className="header-logo">logo</h1>
          </div>
          <div className="header-navigation d-flex align-items-center justify-content-center">
            <img
              className="header-search"
              src="/assets/icons/header-slide-icon/search.svg"
              alt="search-icon"
            />
            <img
              onClick={() => setSidebarOpen(true)}
              className="header-menu"
              src="/assets/icons/header-slide-icon/menu.svg"
              alt="menu-icon"
            />
          </div>
        </>
      ) : (
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
      )}
    </header>
  );
}

export default Header;
