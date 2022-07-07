import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import "./product-table.styles.scss";

const ProductTable = ({ cartItems }) => {
  const { totalCartValue } = useContext(CartContext);
  return (
    <div className="table-container">
      <div className="table-row">
        <span className="table-row--item">Product</span>
        <span className="table-row--item">Description</span>
        <span className="table-row--item">Quantity</span>
        <span className="table-row--item">Price</span>
        <span className="table-row--item">Remove</span>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem
          cartItem={cartItem}
          key={cartItem.id}
          classes="table-row"
        />
      ))}
      <div className="table-row">
        <span>TOTAL: R$ {totalCartValue.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductTable;
