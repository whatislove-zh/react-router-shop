import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Green Shop
      </Link>
      <nav className="nav">
        <NavLink to="catalog">Catalog</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
        <NavLink to="test">404</NavLink>
      </nav>
    </header>
  );
};

export default Header;
