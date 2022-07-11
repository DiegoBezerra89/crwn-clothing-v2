import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./quantity-handler.styles.scss";

const QuantityHandler = ({ product, classes }) => {
  const { quantity, id } = product;
  const { addItemToCart, decrementItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  const decrementProductFromCart = () => decrementItemFromCart(product);
  const deleteProductFromCart = () => deleteItemFromCart(product);

  return (
    <div className={`${classes}`}>
      <div className={"container"}>
        <div
          onClick={
            quantity > 1 ? decrementProductFromCart : deleteProductFromCart
          }
          className={"container-arrow"}
        >
          &#10094;
        </div>
        <span>{quantity}</span>
        <div onClick={addProductToCart} className={"container-arrow"}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default QuantityHandler;
