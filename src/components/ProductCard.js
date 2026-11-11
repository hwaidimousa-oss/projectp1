
import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card product-card h-100">

      <div className="printer-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="card-body d-flex flex-column p-4">

        <p className="product-label">
          {product.brand} PRINTER
        </p>

        <h5 className="fw-bold">
          {product.name}
        </h5>

        <p className="product-description">
          {product.description}
        </p>

        <h4 className="product-price mt-auto">
          ${product.price}
        </h4>

        <Link
          to={"/products/" + product.id}
          className="view-btn"
        >
          View Product →
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;
