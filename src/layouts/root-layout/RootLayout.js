import "./root-layout.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="root-layout d-flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main
        className="main-content"
        style={sidebarOpen ? { overflow: "hidden" } : { overflow: "auto" }}
      >
        <Header setSidebarOpen={setSidebarOpen} />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default RootLayout;
