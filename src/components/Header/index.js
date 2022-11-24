import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="team-container">
      <h1 className="team-title">Team Projects</h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Deepak
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/sainaveen">
            SaiNaveen
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/sathwik">
            Sathwik
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/venkat">
            Venkat
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/ramya">
            Ramya
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/dhathrija">
          Dhathrija
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
