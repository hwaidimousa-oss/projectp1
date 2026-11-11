
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-5">

        <div className="row g-4">

          <div className="col-12 col-md-6">
            <h3 className="fw-bold">
              PRINT HUB
            </h3>

            <p>
              Quality printing solutions for
              home, school, and office.
            </p>
          </div>

          <div className="col-12 col-md-3">
            <h5>Quick Links</h5>

            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-12 col-md-3">
            <h5>Our Brands</h5>

            <p>HP</p>
            <p>Canon</p>
            <p>Epson</p>
            <p>Brother</p>
          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2026 Print Hub. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
