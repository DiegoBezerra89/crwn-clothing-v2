import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import QuantityHandler from "../quantity-handler/quantity-handler.component";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, id } = cartItem;
  const { deleteItemFromCart } = useContext(CartContext);

  const handleDeleteItem = () => deleteItemFromCart(cartItem);

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
      <QuantityHandler product={cartItem} />
      <span>$ {price}</span>
      <button type="button" onClick={handleDeleteItem}>
        X
      </button>
    </div>
  );
};

export default CheckoutItem;
