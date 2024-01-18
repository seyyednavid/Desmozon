import React from "react";
import { products } from "../types";
import Product from "./Product";

interface ProductsType {
  products: products;
}

const Products = ({ products }: ProductsType) => {
  return (
    <div className="product-section">
      <h1>PRODUCTS ({products.length})</h1>
      <div className="container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
