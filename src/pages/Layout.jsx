import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex-col w-screen h-screen">
            <h2>hadassa medeiros</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            about me
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            projects
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div >
    );
}

export default Layout;