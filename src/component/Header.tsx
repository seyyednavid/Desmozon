import React from "react";

interface HeaderType {
  searchProducts:(s:string) => void;
}

const Header = ({searchProducts}: HeaderType) => {
  return (
    <header>
      <img
        src="https://banner2.cleanpng.com/20190418/qty/kisspng-amazon-web-services-logo-cloud-computing-amazon-co-logoaws-1-itnext-summit-5cb80ea9bc03d6.8054658415555662497701.jpg"
        alt="logo"
      />

      <input
      onChange={(e) =>  searchProducts(e.target.value)}
        type="text"
        placeholder="Search products by description or name"
      ></input>
    </header>
  );
};

export default Header;
