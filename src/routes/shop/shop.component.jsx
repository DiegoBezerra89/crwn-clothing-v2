import { useContext } from "react";
import CategoryItem from "../../components/category-item/category-item.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  {
    return Object.keys(categoriesMap).map((title) => (
      <>
        <h2>{title}</h2>
        <div className="products-container">
          {categoriesMap[title].map(
            (product, index) =>
              index < 1 && (
                <CategoryItem
                  category={product}
                  key={product.id}
                  title={title}
                />
              )
          )}
        </div>
      </>
    ));
  }
};

export default Shop;
