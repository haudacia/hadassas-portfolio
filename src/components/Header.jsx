import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <button>
            <Link to="/project-surflowforms">surflow forms app</Link>
          </button>
        </li>

        <li>
          <button>
            <Link to="/project-revitaddins">python + revit addins</Link>
          </button>
        </li>

        <li>
          <Link to="/about-me">about me</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
