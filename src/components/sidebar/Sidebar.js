import "./sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({ ref }) {
  const scrollToTop = () => {
    document
      .querySelector(".main-content")
      .scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="sidebar d-flex flex-column align-items-center">
      <div className="brand-logo">
        <img src="/Logo.svg" alt="brand-logo" />
      </div>
      <div className="sidebar-navigation d-flex flex-column justify-content-between">
        <div className="sidebar-links d-flex flex-column align-items-center">
          <NavLink
            to="/"
            className="sidebar-link d-flex flex-column align-items-center"
          >
            <img
              src="/assets/icons/sidebarIcons/Home.svg"
              alt="sidebar-link-icon"
            />
            <span>მთავარი</span>
          </NavLink>
          <NavLink
            to="/"
            className="sidebar-link d-flex flex-column align-items-center"
          >
            <div className="soon">Soon</div>
            <img
              src="/assets/icons/sidebarIcons/User.svg"
              alt="sidebar-link-icon"
            />
            <span>პროფილი</span>
          </NavLink>
          <NavLink
            to="/"
            className="sidebar-link d-flex flex-column align-items-center"
          >
            <div className="soon">Soon</div>
            <img
              src="/assets/icons/sidebarIcons/Bookmark.svg"
              alt="sidebar-link-icon"
            />
            <span>ფავორიტი</span>
          </NavLink>
          <NavLink
            to="/"
            className="sidebar-link d-flex flex-column align-items-center"
          >
            <div className="soon">Soon</div>
            <img
              src="/assets/icons/sidebarIcons/Notification.svg"
              alt="sidebar-link-icon"
            />
            <span>შეტყობინება</span>
          </NavLink>
        </div>
        <div className="sidebar-additional-settings d-flex flex-column align-items-center">
          <div className="logout d-flex justify-content-center">
            <NavLink
              to="/"
              className="logout-link d-flex justify-content-center"
            >
              <img
                src="/assets/icons/sidebarIcons/Logout.svg"
                alt="sidebar-link-icon"
              />
            </NavLink>
          </div>
          <button
            onClick={scrollToTop}
            className="scroll-up-button d-flex justify-content-center"
          >
            <img
              src="/assets/icons/sidebarIcons/Arrow_Up_MD.svg"
              alt="scroll-up-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
