import React from "react";
import { product } from "../types";
import { IoClose } from "react-icons/io5";

interface PopupType {
  product: product;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup = ({ product,setOpen}: PopupType) => {
  return (
    <div className="backdrop">
      <div className="popup">
        <IoClose className="close-btn" onClick={() => setOpen(false)} />
        <div className="popup-img-container">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="popup-body">
          <p className="title">{product.title}</p>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating:  {product.rating.rate} ({product.rating.count})</p>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
