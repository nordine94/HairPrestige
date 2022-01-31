import { useRef } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/img/logo_hairPrestige.png";
import "./Navbar.css";

const Navbar = () => {

    const hamburger = useRef();
    const navMenu = useRef();

    const mobileMenu = () => {
        hamburger.current.classList.toggle("active");
        navMenu.current.classList.toggle("active");
    }

    



  return (
    <nav className="navbar">
      <NavLink to="/" className="logo"><img src={logo} alt="Logo Hair Prestige"/></NavLink>
      <ul className="nav_menu" id="menu_navbar" ref={navMenu}>
        <li className="nav_item">
          <NavLink className="nav_link" to="/">
            Accueil
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="/conseils">
            Conseils
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="hamburger" ref={hamburger} onClick={mobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
