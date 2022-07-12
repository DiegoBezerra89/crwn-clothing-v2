import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category-item.styles.scss";

const CategoryItem = (props) => {
  const { category, title } = props;
  const { handleSelectedCategory } = useContext(CategoriesContext);

  const navigate = useNavigate();

  const goToCategoryHandler = () => {
    handleSelectedCategory(category);
    navigate("/categories");
  };

  return (
    <>
      <div className="category-container" onClick={goToCategoryHandler}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
