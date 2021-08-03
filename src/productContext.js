import React, { useState } from "react";

let ProductContext = React.createContext();

export default ProductContext;

export const ProductProvider = ({ children }) => {
  let [products, setProducts] = useState([]);

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};
