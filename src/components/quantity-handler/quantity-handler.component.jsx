import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const QuantityHandler = ({ product }) => {
  const { quantity, id } = product;
  const { addItemToCart, decrementItemFromCart } = useContext(CartContext);
  const addProductToCard = () => addItemToCart(product);
  const decrementProductFromCart = () => decrementItemFromCart(product);

  return (
    <>
      <button onClick={addProductToCard}>+</button>
      <span>{quantity}</span>
      <button onClick={decrementProductFromCart}>-</button>
    </>
  );
};

export default QuantityHandler;
