
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">

        <Link className="navbar-brand print-logo" to="/">
          PRINT HUB
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <div className="navbar-nav ms-auto align-items-lg-center">

            <Link className="nav-link mx-2" to="/">
              Home
            </Link>

            <Link className="nav-link mx-2" to="/products">
              Products
            </Link>

            <Link className="nav-link mx-2" to="/about">
              About
            </Link>

            <Link className="nav-link mx-2" to="/contact">
              Contact
            </Link>

            <Link className="btn nav-shop-btn ms-lg-3" to="/products">
              Shop Now
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
