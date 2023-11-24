import "./main.css";
import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import SideBar from "../Header-Sidebar/Sidebar";
import { ImageChange } from "./ImageChange/ImageChange";

function Main() {
  return (
    <div className="main">
      <SideBar />
      <ImageChange />
      <SearchBar />
    </div>
  );
}

export default Main;
