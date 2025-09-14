import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
