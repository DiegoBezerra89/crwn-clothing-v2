import { createContext, useState } from "react";

export const CartContext = createContext({
  // products: [],
  isCartOpen: false,
  setIsCartOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = {
    // products,
    isCartOpen,
    setIsCartOpen,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
