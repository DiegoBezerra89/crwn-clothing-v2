import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CheckoutPage;
