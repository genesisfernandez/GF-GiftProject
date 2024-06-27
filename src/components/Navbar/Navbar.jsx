import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
        <nav className="navbar">
          <img src={logo} alt="" className="logo" />
          <div className="menu" onClick={handleMenu}> 
            <ListIcon className="menuItem" />
          </div>
          <ul className={menuOpen ? "open" : "list"}>
            <li className="list-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/album">Album</NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/message">Message</NavLink>
            </li>
          </ul>
        </nav>
  );
}

export default Navbar;
