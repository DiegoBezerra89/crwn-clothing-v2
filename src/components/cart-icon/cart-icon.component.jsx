import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import { Container, Icon, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <Container className="cart-icon-container" onClick={toggleIsCartOpen}>
      <Icon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </Container>
  );
};

export default CartIcon;
