import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">about me</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
