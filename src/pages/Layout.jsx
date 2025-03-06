import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Info from "../components/Info";

function Layout() {
    return (
        <div className="flex h-screen">
            <Header />
            <Info />
            <nav className="w-64 bg-gray-900 text-white p-5 fixed h-full md:w-48 sm:w-40 sm:p-3">
                <h1 className="text-xl font-bold mb-4 sm:text-lg">My Portfolio</h1>
                <ul className="space-y-3">
                    <li>
                        <Link to="/" className="block p-2 hover:bg-gray-700 rounded sm:p-1">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="block p-2 hover:bg-gray-700 rounded sm:p-1">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-me" className="block p-2 hover:bg-gray-700 rounded sm:p-1">
                            About Me
                        </Link>
                    </li>
                </ul>
            </nav>
            <main className="ml-64 p-8 flex-1 md:ml-48 sm:ml-40 sm:p-4">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;