import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-start">
      <div className="person">
        <Link to="/*">
          <img
            src="/assets/icons/sidebarIcons/Person.png"
            alt="person icon"
            className="hoverablee"
          />
        </Link>
      </div>
      <div className="bookmark">
        <Link to="/*">
          <img
            src="/assets/icons/sidebarIcons/Bookmark.png"
            alt="bookmark icon"
            className="hoverablee"
          />
        </Link>
      </div>
      <div className="clock">
        <Link to="/*">
          <img
            src="/assets/icons/sidebarIcons/Clock.png"
            alt="clock-icon"
            className="hoverablee"
          />
        </Link>
      </div>

      <div className="sidebar-end">
        <div className="logout">
          <Link to="/*">
            <img
              src="/assets/icons/sidebarIcons/Logout.png"
              alt="logout-icon"
              className="hoverablee"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
