import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import QuantityHandler from "../quantity-handler/quantity-handler.component";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, id } = cartItem;
  const { deleteItemFromCart } = useContext(CartContext);

  const handleDeleteItem = () => deleteItemFromCart(cartItem);

  return (
    <div>
      <div>
        <span>Product</span>
        <span>Sescription</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
      <QuantityHandler product={cartItem} />
      <button type="button" onClick={handleDeleteItem}>
        X
      </button>
      <span>$ {price}</span>
    </div>
  );
};

export default CheckoutItem;
