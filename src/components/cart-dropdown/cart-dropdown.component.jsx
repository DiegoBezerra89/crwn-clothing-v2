import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, totalCartValue } = useContext(CartContext);
  console.log(totalCartValue);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <span>Total: R$ {totalCartValue.toFixed(2)}</span>
      <Button buttonType={"inverted"}>
        <Link to="/checkout">GO TO CHECKOUT</Link>
      </Button>
    </div>
  );
};

export default CartDropdown;
