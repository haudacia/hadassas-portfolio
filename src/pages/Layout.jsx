import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex-col w-screen h-screen">
      <h2>hadassa medeiros</h2>
      <Navbar />

      <Outlet />
    </div>
  );
}

export default Layout;
