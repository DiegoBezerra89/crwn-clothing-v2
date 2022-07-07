import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const QuantityHandler = ({ product, classes }) => {
  const { quantity, id } = product;
  const { addItemToCart, decrementItemFromCart, deleteItemFromCart } =
    useContext(CartContext);
  const addProductToCard = () => addItemToCart(product);
  const decrementProductFromCart = () => decrementItemFromCart(product);
  const deleteProductFromCart = () => deleteItemFromCart(product);
  return (
    <div className={classes}>
      <button
        onClick={
          quantity > 1 ? decrementProductFromCart : deleteProductFromCart
        }
      >
        -
      </button>
      <span>{quantity}</span>
      <button onClick={addProductToCard}>+</button>
    </div>
  );
};

export default QuantityHandler;
