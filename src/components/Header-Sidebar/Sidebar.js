import personIcon from "../../images/sidebar /Person.png";
import bookmarkIcon from "../../images/sidebar /Bookmark.png";
import clockIcon from "../../images/sidebar /Clock.png";
import logoutIcon from "../../images/sidebar /logout.png";

function Sidebar() {
  return (
    <div className="sidebar-start">
      <div className="person">
        <img src={personIcon} alt="person icon" className="hoverablee" />
      </div>
      <div className="bookmark">
        <img src={bookmarkIcon} alt="bookmark icon" className="hoverablee" />
      </div>
      <div className="clock">
        <img src={clockIcon} alt="clock icon" className="hoverablee" />
      </div>

      <div className="sidebar-end">
        <div className="logout">
          <img src={logoutIcon} alt="logout icon" className="hoverablee" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
