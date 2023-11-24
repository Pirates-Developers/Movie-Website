import "./main.css"
import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import SideBar from "../Header-Sidebar/Sidebar";

function Main() {
  return (
    <div className="main">
      <SideBar />
      <div className="image-container">
        <img
          src="/assets/images/game-of-thrones 1.png"
          alt="game-of-thronesImage"
          className="gameOfThroneImg"
        />
        <div className="SearchBar">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Main;
