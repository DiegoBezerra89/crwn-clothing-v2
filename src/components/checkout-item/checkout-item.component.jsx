import QuantityHandler from "../quantity-handler/quantity-handler.component";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, id } = cartItem;
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
      <span>$ {price}</span>
    </div>
  );
};

export default CheckoutItem;
