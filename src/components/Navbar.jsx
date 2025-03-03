import { Link } from "react-router-dom";
import "../styles/globals.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre mí</Link></li>
        <li><Link to="/projects">Proyectos</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
