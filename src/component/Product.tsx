import React, { useState } from "react";
import { product } from "../types";
import Popup from "./Popup";

interface ProductType {
  product: product;
}

const Product = ({ product }: ProductType) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="card">
        <div className="image-container">
          <img
            onClick={() => setOpen(true)}
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="card-body">
          <p className="title">{product.title}</p>
          <p>{product.description.slice(0, 50)}...</p>
          <button onClick={() => setOpen(true)}>Buy - £{product.price}</button>
        </div>
        {open && <Popup product={product} setOpen={setOpen} />}
      </div>
    </>
  );
};

export default Product;
