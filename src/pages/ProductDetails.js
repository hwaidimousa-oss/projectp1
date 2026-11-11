
import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  return (
    <section className="container py-5">

      <Link
        to="/products"
        className="btn btn-outline-primary mb-4"
      >
        ← Back to Products
      </Link>

      {products.map((product) => (
        product.id === Number(id) && (
          <div className="card border-0 shadow-sm" key={product.id}>
            <div className="row g-0 align-items-center">

              <div className="col-12 col-lg-6">
                <div className="details-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="card-body p-4 p-lg-5">

                  <p className="section-label">
                    {product.brand}
                  </p>

                  <h1 className="fw-bold mb-3">
                    {product.name}
                  </h1>

                  <p className="text-secondary">
                    {product.description}
                  </p>

                  <hr />

                  <h5>Printer Type</h5>
                  <p>{product.type}</p>

                  <h5>Brand</h5>
                  <p>{product.brand}</p>

                  <h2 className="product-price my-4">
                    ${product.price}
                  </h2>

                  <Link
                    to="/contact"
                    className="btn hero-primary-btn"
                  >
                    Contact Us About This Printer
                  </Link>

                </div>
              </div>

            </div>
          </div>
        )
      ))}

    </section>
  );
}

export default ProductDetails;
