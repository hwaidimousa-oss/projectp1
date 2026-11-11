
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-12 col-lg-6">
              <p className="hero-label">
                PREMIUM PRINTING SOLUTIONS
              </p>

              <h1 className="hero-title">
                Print Smarter.
                <br />
                Work Better.
              </h1>

              <p className="hero-description">
                Discover reliable printers from trusted
                brands. Find the perfect printing solution
                for your home, school, or office.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Link
                  to="/products"
                  className="btn hero-primary-btn"
                >
                  Explore Printers →
                </Link>

                <Link
                  to="/about"
                  className="btn hero-secondary-btn"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-6 text-center">
              <img
                src="/images/hp.jpg"
                alt="Featured HP printer"
                className="img-fluid hero-printer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <p className="section-label">
            WHY CHOOSE US
          </p>

          <h2 className="fw-bold">
            Printing Made Simple
          </h2>

          <p className="text-secondary">
            Everything you need for a better printing experience.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-12 col-md-4">
            <div className="feature-card">
              <h3>01</h3>
              <h5>Quality Printers</h5>
              <p>
                Explore reliable printers from
                trusted manufacturers.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="feature-card">
              <h3>02</h3>
              <h5>Affordable Prices</h5>
              <p>
                Find printing solutions that
                fit your needs and budget.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="feature-card">
              <h3>03</h3>
              <h5>Easy Shopping</h5>
              <p>
                Browse our collection and
                compare different printers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="home-cta">
        <div className="container text-center">
          <h2 className="fw-bold">
            Ready to Find Your Printer?
          </h2>

          <p>
            Explore our collection of printers today.
          </p>

          <Link to="/products" className="btn hero-primary-btn">
            Browse Products →
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
