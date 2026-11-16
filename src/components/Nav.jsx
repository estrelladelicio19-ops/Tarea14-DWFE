import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  function claseactiva({ isActive, isPending }) {
    return isPending ? "pending" : isActive ? "active" : "";
  }

  return (
    <nav>
      <NavLink to="/" className={claseactiva}>Inicio</NavLink>
      <NavLink to="/destinos" className={claseactiva}>Destinos</NavLink>
      <NavLink to="/nosotros" className={claseactiva}>Nosotros</NavLink>
    </nav>
  );
}