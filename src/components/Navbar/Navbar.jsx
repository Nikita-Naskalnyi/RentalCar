import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

export const Navbar = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${s.link} ${s.active}` : s.link;

  return (
    <nav className={s.nav}>
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>

      <NavLink className={getNavLinkClass} to="/catalog" end>
        Catalog
      </NavLink>
    </nav>
  );
};
