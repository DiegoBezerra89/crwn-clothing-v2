import { createContext, useState, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const decrementCartItem = (cartItems, productToRemove) => {
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export const getTotalCartItems = (cartItems) => {
  const quantityArr = cartItems.map((item) => {
    return item.quantity;
  });
  const totalQuantityValue = quantityArr.reduce((curr, acc) => curr + acc, 0);
  return totalQuantityValue;
};

export const getTotalValue = (cartItems) => {
  const pricesArray = cartItems.map((item) => item.price * item.quantity);
  const totalPriceValue = pricesArray.reduce((curr, acc) => curr + acc, 0);
  return totalPriceValue;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCartValue, setTotalCartValue] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newTotalValue = getTotalValue(cartItems);
    setCartCount(newCartCount);
    setTotalCartValue(newTotalValue);
  }, [cartItems]);

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const decrementItemFromCart = (productToRemove) =>
    setCartItems(decrementCartItem(cartItems, productToRemove));

  const deleteItemFromCart = (productToDelete) =>
    setCartItems(deleteCartItem(cartItems, productToDelete));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    getTotalCartItems,
    cartCount,
    decrementItemFromCart,
    deleteItemFromCart,
    totalCartValue,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
