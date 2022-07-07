import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import ProductTable from "../../components/product-table/product-table.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = () => {
  const { cartItems, totalCartValue } = useContext(CartContext);
  return (
    <>
      <div>
        <ProductTable cartItems={cartItems} />
      </div>
    </>
  );
};

export default CheckoutPage;
