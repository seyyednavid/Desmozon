import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Products from "./component/Products";
import { products } from "./types";
import axios from "axios";

function App() {
  const [products, setProducts] = useState<products>([]);
  const [allproducts, setAllProducts] = useState<products>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (): Promise<void> => {
    const res = await axios("https://fakestoreapi.com/products");
    setAllProducts(res.data);
    setProducts(res.data);
  };

  const searchProducts = (s: string) => {
    let text = s.trim().toLowerCase();
    let searchProducts = allproducts.filter(
      (product) =>
        product.title.toLowerCase().includes(text) ||
        product.description.toLowerCase().includes(text)
    );
    setProducts(searchProducts);
  };

  return (
    <div className="App">
      <Header searchProducts={searchProducts} />
      <Products products={products} />
    </div>
  );
}

export default App;
