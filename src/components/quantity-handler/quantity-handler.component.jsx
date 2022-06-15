import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const QuantityHandler = ({ product }) => {
  const { quantity, id } = product;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const addProductToCard = () => addItemToCart(product);
  const removeProductFromCart = () => removeItemFromCart(product);

  return (
    <>
      <button onClick={addProductToCard}>+</button>
      <span>{quantity}</span>
      <button onClick={removeProductFromCart}>-</button>
    </>
  );
};

export default QuantityHandler;
