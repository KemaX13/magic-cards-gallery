import { Link } from "react-router-dom";
import logo from '../img/magic-logo.png';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item logo"><img src={logo} alt="logo"/></li>
          <li className="nav-item"><Link to="/">Inicio</Link></li>
          <li className="nav-item"><Link to="#">Favoritos</Link></li>
          <li className="nav-item"><Link to="#">Tipos</Link></li>
          <li className="nav-item"><Link to="#">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header