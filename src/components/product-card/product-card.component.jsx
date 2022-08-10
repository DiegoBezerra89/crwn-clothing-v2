import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import {
  ProductCardContainer,
  ProductImage,
  FooterContainer,
  Name,
  Price,
  AddToCartButton,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <FooterContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </FooterContainer>
      <AddToCartButton buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </AddToCartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
