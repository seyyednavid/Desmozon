import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Products from "./component/Products";
import { products } from "./types";
import axios from "axios";

function App() {
  const [products, setProducts] = useState<products>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (): Promise<void> => {
    const res = await axios("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  return (
    <div className="App">
      <Header />
      <Products products={products} />
    </div>
  );
}

export default App;
