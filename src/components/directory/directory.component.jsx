import DirectoryItem from "../directory-item/directory-item.component";

import { Container } from "./directory.styles.jsx";

const Directory = ({ categories }) => {
  return (
    <Container>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
};

export default Directory;
