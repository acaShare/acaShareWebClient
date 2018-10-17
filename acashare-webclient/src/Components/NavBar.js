import React from "react";

const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="home.html" className="brand-logo">acaShare</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="panel_moderatora.html">Panel moderatora</a></li>
        <li><a href="login.html">Wyloguj</a></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;