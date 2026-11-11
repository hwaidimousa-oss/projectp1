
import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <p className="section-label">
          OUR COLLECTION
        </p>

        <h1 className="fw-bold">
          Explore Our Printers
        </h1>

        <p className="text-secondary">
          Discover reliable printers from trusted brands.
        </p>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div
            className="col-12 col-md-6 col-lg-4"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default Products;
