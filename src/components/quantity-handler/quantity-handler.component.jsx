import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const QuantityHandler = ({ product }) => {
  const { quantity, id } = product;
  const { addItemToCart, decrementItemFromCart, deleteItemFromCart } =
    useContext(CartContext);
  const addProductToCard = () => addItemToCart(product);
  const decrementProductFromCart = () => decrementItemFromCart(product);
  const deleteProductFromCart = () => deleteItemFromCart(product);
  return (
    <>
      <button onClick={addProductToCard}>+</button>
      <span>{quantity}</span>
      <button
        onClick={
          quantity > 1 ? decrementProductFromCart : deleteProductFromCart
        }
      >
        -
      </button>
    </>
  );
};

export default QuantityHandler;
