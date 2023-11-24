function Sidebar() {
  return (
    <div className="sidebar-start">
      <div className="person">
        <img
          src="/assets/icons/sidebarIcons/Person.png"
          alt="person icon"
          className="hoverablee"
        />
      </div>
      <div className="bookmark">
        <img
          src="/assets/icons/sidebarIcons/Bookmark.png"
          alt="bookmark icon"
          className="hoverablee"
        />
      </div>
      <div className="clock">
        <img
          src="/assets/icons/sidebarIcons/Clock.png"
          alt="clock-icon"
          className="hoverablee"
        />
      </div>

      <div className="sidebar-end">
        <div className="logout">
          <img
            src="/assets/icons/sidebarIcons/Logout.png"
            alt="logout-icon"
            className="hoverablee"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
