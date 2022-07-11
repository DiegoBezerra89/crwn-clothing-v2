import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import ProductTable from "../../components/product-table/product-table.component";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <div>
        <ProductTable cartItems={cartItems} />
      </div>
    </>
  );
};

export default CheckoutPage;
