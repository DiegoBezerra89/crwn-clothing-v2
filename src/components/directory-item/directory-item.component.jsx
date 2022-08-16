import { Link } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage backgroundImage={`url(${imageUrl})`} />
      <Body to={`shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
