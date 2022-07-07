import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import QuantityHandler from "../quantity-handler/quantity-handler.component";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, classes }) => {
  const { name, imageUrl, price, id } = cartItem;
  const { deleteItemFromCart } = useContext(CartContext);

  const handleDeleteItem = () => deleteItemFromCart(cartItem);

  return (
    <div className={classes}>
      <img className="item-container" src={imageUrl} alt={name} />
      <span className="item-container">{name}</span>
      <QuantityHandler product={cartItem} classes="item-container" />
      <span className="item-container">$ {price}</span>
      <button
        className="item-container"
        type="button"
        onClick={handleDeleteItem}
      >
        X
      </button>
    </div>
  );
};

export default CheckoutItem;
