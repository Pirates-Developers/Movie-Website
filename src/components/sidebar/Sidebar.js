import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const sidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div
      className={`sidebar ${
        window.innerWidth <= 900 && sidebarOpen ? "sidebar-open" : ""
      } d-flex flex-column align-items-center`}
    >
      {/* Render Sidebar On Different Screen Width */}
      {window.innerWidth <= 900 ? (
        <>
          <div className="brand-logo">
            <img src="/Logo.svg" alt="brand-logo" />
          </div>
          <div className="sidebar-navigation d-flex flex-column">
            <div className="sidebar-links d-flex flex-column align-items-center">
              <NavLink
                to="/"
                onClick={sidebarClose}
                className="sidebar-link d-flex align-items-center"
              >
                <img
                  src="/assets/icons/sidebarIcons/Home.svg"
                  alt="sidebar-icon"
                />
                <span>მთავარი</span>
              </NavLink>
              <NavLink
                to="/movies"
                onClick={sidebarClose}
                className="sidebar-link d-flex align-items-center"
              >
                <img
                  src="/assets/icons/header-slide-icon/video-play.svg"
                  alt="sidebar-icon"
                />
                <span>ფილმები</span>
              </NavLink>
              <NavLink
                to="/tvshows"
                onClick={sidebarClose}
                className="sidebar-link d-flex align-items-center"
              >
                <img
                  src="/assets/icons/header-slide-icon/video-play.svg"
                  alt="sidebar-icon"
                />
                <span>სერიალები</span>
              </NavLink>
              <NavLink
                to="/animes"
                onClick={sidebarClose}
                className="sidebar-link d-flex align-items-center"
              >
                <img
                  src="/assets/icons/header-slide-icon/video-play.svg"
                  alt="sidebar-icon"
                />
                <span>ანიმე</span>
              </NavLink>
              <NavLink
                to="/books"
                onClick={sidebarClose}
                className="sidebar-link d-flex align-items-center"
              >
                <img
                  src="/assets/icons/header-slide-icon/video-play.svg"
                  alt="sidebar-icon"
                />
                <span>წიგნები</span>
              </NavLink>
            </div>
            <div className="sidebar-border"></div>
            <div className="sidebar-additional-settings d-flex flex-column align-items-center">
              <NavLink
                to="/profile"
                onClick={sidebarClose}
                className="sidebar-link d-flex align-items-center"
              >
                <div className="soon">მალე</div>
                <img
                  src="/assets/icons/sidebarIcons/User.svg"
                  alt="sidebar-icon"
                />
                <span>პროფილი</span>
              </NavLink>
              <NavLink
                to="/favorites"
                onClick={sidebarClose}
                className="sidebar-link d-flex align-items-center"
              >
                <div className="soon">მალე</div>
                <img
                  src="/assets/icons/sidebarIcons/Bookmark.svg"
                  alt="sidebar-icon"
                />
                <span>ფავორიტი</span>
              </NavLink>
              <NavLink
                to="/notifications"
                onClick={sidebarClose}
                className="sidebar-link d-flex align-items-center"
              >
                <div className="soon">მალე</div>
                <img
                  src="/assets/icons/sidebarIcons/Notification.svg"
                  alt="sidebar-icon"
                />
                <span>შეტყობინება</span>
              </NavLink>
              <Link
                to="/logout"
                onClick={sidebarClose}
                className="sidebar-link d-flex align-items-center"
              >
                <img
                  src="/assets/icons/sidebarIcons/Logout.svg"
                  alt="sidebar-icon"
                />
                <span>გასვლა</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-close">
            <img
              onClick={sidebarClose}
              src="/assets/icons/close.svg"
              alt="close-icon"
            />
          </div>
        </>
      ) : (
        <>
          <div className="brand-logo">
            <img src="/Logo.svg" alt="brand-logo" />
          </div>
          <div className="sidebar-navigation d-flex flex-column justify-content-between">
            <div className="sidebar-links d-flex flex-column align-items-center">
              <NavLink
                to="/"
                className="sidebar-link d-flex flex-column align-items-center"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.5 23.25H15.5001C15.2926 23.25 15.125 23.0825 15.125 22.875V17.625C15.125 15.8988 13.7262 14.5 12 14.5C10.2738 14.5 8.875 15.8988 8.875 17.625V22.875C8.875 23.0825 8.70744 23.25 8.49994 23.25H4.5C2 23.25 0.75 22 0.75 19.5V11.5638C0.75 9.06628 1.40382 8.6826 2.53757 7.7326L9.99255 1.48123C11.1538 0.507478 12.8476 0.507478 14.0088 1.48123L21.4638 7.7326C22.5963 8.6826 23.2512 9.06628 23.2512 11.5638V19.5C23.25 22 22 23.25 19.5 23.25Z"
                    fill="#E7E7E7"
                  />
                </svg>
                <span>მთავარი</span>
              </NavLink>
              <NavLink
                to="/profile"
                className="sidebar-link d-flex flex-column align-items-center"
              >
                <div className="soon">მალე</div>
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0113 8.125C10.0113 5.3675 12.2538 3.125 15.0113 3.125C17.7688 3.125 20.0113 5.3675 20.0113 8.125C20.0113 10.8825 17.7688 13.125 15.0113 13.125C12.2538 13.125 10.0113 10.8825 10.0113 8.125ZM17.5 15.625H12.5C7.425 15.625 5.625 19.3413 5.625 22.5238C5.625 25.3701 7.13881 26.875 10.0038 26.875H19.9962C22.8612 26.875 24.375 25.3701 24.375 22.5238C24.375 19.3413 22.575 15.625 17.5 15.625Z"
                    fill="#E7E7E7"
                  />
                </svg>
                <span>პროფილი</span>
              </NavLink>
              <NavLink
                to="/favorites"
                className="sidebar-link d-flex flex-column align-items-center"
              >
                <div className="soon">მალე</div>
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7886 4.12838C16.2873 3.62387 13.7127 3.62387 11.2114 4.12838C8.32732 4.71011 6.25 7.27789 6.25 10.2612V23.2865C6.25 25.5723 8.69588 26.995 10.6403 25.8401L14.1813 23.7368C14.687 23.4365 15.313 23.4365 15.8187 23.7368L19.3597 25.8401C21.3041 26.995 23.75 25.5723 23.75 23.2865V10.2612C23.75 7.27789 21.6727 4.71011 18.7886 4.12838Z"
                    fill="#E7E7E7"
                  />
                </svg>
                <span>ფავორიტი</span>
              </NavLink>
              <NavLink
                to="/notifications"
                className="sidebar-link d-flex flex-column align-items-center"
              >
                <div className="soon">მალე</div>
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.3258 22.9973C18.7999 23.3125 18.9276 23.9507 18.611 24.4227C17.8539 25.5514 16.491 26.25 15 26.25C13.509 26.25 12.1461 25.5514 11.389 24.4227C11.0724 23.9507 11.2001 23.3125 11.6742 22.9973C12.1483 22.682 12.7892 22.8092 13.1058 23.2812C13.4477 23.7908 14.1386 24.1945 15 24.1945C15.8614 24.1945 16.5524 23.7908 16.8942 23.2812C17.2108 22.8092 17.8518 22.682 18.3258 22.9973Z"
                    fill="#E7E7E7"
                  />
                  <path
                    d="M21.8046 12.1924C21.6336 12.0242 21.5374 11.7949 21.5374 11.5556V10.703C21.5374 9.62942 21.3562 8.56343 21.0013 7.54961C20.3234 5.61275 18.6317 4.20325 16.5973 3.88034L16.5427 3.87166C15.5207 3.70945 14.4793 3.70945 13.4573 3.87166L13.4027 3.88034C11.3683 4.20325 9.67658 5.61275 8.99867 7.54961C8.64383 8.56343 8.46262 9.62942 8.46262 10.703V11.5556C8.46262 11.7949 8.36641 12.0242 8.19545 12.1924L7.55954 12.818C5.10933 15.2286 6.26831 19.381 9.61634 20.1872C13.1544 21.0391 16.8456 21.0391 20.3837 20.1872C23.7317 19.381 24.8907 15.2286 22.4405 12.818L21.8046 12.1924Z"
                    fill="#E7E7E7"
                  />
                </svg>
                <span>შეტყობინება</span>
              </NavLink>
            </div>
            <div className="sidebar-additional-settings d-flex flex-column align-items-center">
              <Link
                to="/logout"
                className="sidebar-link d-flex flex-column align-items-center"
              >
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 2.5H17.75C13.75 2.5 11.25 5 11.25 9V14.0625H19.0625C19.575 14.0625 20 14.4875 20 15C20 15.5125 19.575 15.9375 19.0625 15.9375H11.25V21C11.25 25 13.75 27.5 17.75 27.5H20.9875C24.9875 27.5 27.4875 25 27.4875 21V9C27.5 5 25 2.5 21 2.5Z"
                    fill="#E7E7E7"
                  />
                  <path
                    d="M5.70005 14.0625L8.28755 11.475C8.47505 11.2875 8.56255 11.05 8.56255 10.8125C8.56255 10.575 8.47505 10.325 8.28755 10.15C7.92505 9.78749 7.32505 9.78749 6.96255 10.15L2.77505 14.3375C2.41255 14.7 2.41255 15.3 2.77505 15.6625L6.96255 19.85C7.32505 20.2125 7.92505 20.2125 8.28755 19.85C8.65005 19.4875 8.65005 18.8875 8.28755 18.525L5.70005 15.9375H11.25V14.0625H5.70005Z"
                    fill="#E7E7E7"
                  />
                </svg>
                <span>გასვლა</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
