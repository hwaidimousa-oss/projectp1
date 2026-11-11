
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <p className="section-label">
          ABOUT OUR STORE
        </p>

        <h1 className="fw-bold">
          Welcome to Print Hub
        </h1>

        <p className="text-secondary">
          Your destination for quality printing solutions.
        </p>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-12 col-lg-9">

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-lg-5">

              <h2 className="fw-bold mb-4">
                Who We Are
              </h2>

              <p>
                Print Hub is an online printer store
                offering a collection of printers
                for homes, students, and businesses.
              </p>

              <p>
                Our goal is to provide customers with
                a simple and convenient way to explore
                printing solutions from trusted brands.
              </p>

              <h3 className="fw-bold mt-4">
                Our Mission
              </h3>

              <p>
                We aim to make choosing the right
                printer easier by providing clear
                product information and a comfortable
                browsing experience.
              </p>

            </div>
          </div>

        </div>
      </div>

      <div className="row g-4 text-center">

        <div className="col-12 col-md-4">
          <div className="feature-card">
            <h3>01</h3>
            <h5>Quality</h5>
            <p>Printers from trusted brands.</p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="feature-card">
            <h3>02</h3>
            <h5>Variety</h5>
            <p>Printing solutions for different needs.</p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="feature-card">
            <h3>03</h3>
            <h5>Simplicity</h5>
            <p>An easy and convenient browsing experience.</p>
          </div>
        </div>

      </div>

      <div className="text-center mt-5">
        <Link to="/products" className="btn hero-primary-btn">
          Explore Our Products →
        </Link>
      </div>

    </section>
  );
}

export default About;
