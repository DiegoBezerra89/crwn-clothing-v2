import CheckoutItem from "../checkout-item/checkout-item.component";

const ProductTable = ({ cartItems }) => {
  return (
    <div>
      <div>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
    </div>
  );
};

export default ProductTable;
