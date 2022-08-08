import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoryPage = () => {
  const { categoryProducts } = useContext(CategoriesContext);
  return (
    <>
      <div className="products-container">
        {categoryProducts?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
