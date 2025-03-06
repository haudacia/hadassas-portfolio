import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to='/projects'>
            projects
          </Link>
        </li>
        <li>
          <Link to='/about-me'>
            about me
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header