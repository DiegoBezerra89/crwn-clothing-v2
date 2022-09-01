import { Container, Details, Name } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <Container className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <Details className="item-details">
        <Name className="name">{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </Details>
    </Container>
  );
};

export default CartItem;
