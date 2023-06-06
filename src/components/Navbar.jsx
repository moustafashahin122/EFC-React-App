import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./CSS/Navbar.css";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light mb-5 bg-body-secondary sticky-top shadow ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span id="pagelogo">EFC</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Form">
                login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
          </ul>
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
