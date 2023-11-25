import "./root-layout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function RootLayout() {
  return (
    <div className="root-layout d-flex">
      <Sidebar />
      <main className="main-content">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default RootLayout;
