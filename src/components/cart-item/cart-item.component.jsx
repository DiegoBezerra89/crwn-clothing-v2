import { Container, Details, Name } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <Container>
      <img src={imageUrl} alt={`${name}`} />
      <Details>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </Details>
    </Container>
  );
};

export default CartItem;
