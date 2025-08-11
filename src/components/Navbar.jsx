import { Link } from "react-router-dom";
import { Button } from "haudacia-themed-ui";
import "haudacia-themed-ui/dist/themed-ui.css";

const Navbar = () => {
  return (
    <header>
      <nav className="header-nav">
        <h2>hadassa medeiros</h2>
        <ul>
          <li>
            <Button label="fsdf" />
            <Link to="/">about me</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
