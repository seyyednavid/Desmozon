import React from "react";
import { products } from "../types";

interface ProductsType {
  products: products;
}

const Products = ({ products }: ProductsType) => {
  console.log(products);
  return (
    <div className="container">
      {products.map((product) => (
        <div className="card">
          <div className="image-container">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="card-body">
            <p>{product.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
