import { useContext } from "react";
import { ProductsContext } from "../../contexts/product.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
      <h2>Shop page</h2>
    </div>
  );
};

export default Shop;
