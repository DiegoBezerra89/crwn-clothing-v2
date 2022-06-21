import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop_data.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = {
    products,
    setProducts,
  };

  useEffect(() => {
    const fetchProducts = () => null;
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};