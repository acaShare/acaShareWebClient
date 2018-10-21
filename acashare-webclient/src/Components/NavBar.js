import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/universities" className="brand-logo">acaShare</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="panel_moderatora.html">Panel moderatora</a></li>
        <li><Link to="/login">Wyloguj</Link></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;