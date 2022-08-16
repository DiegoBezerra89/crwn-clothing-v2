import { useState } from "react";
import {
  Container,
  FormInputBox,
  FormInputLabel,
} from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <FormInputBox
        {...otherProps}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {label && (
        <FormInputLabel shrink={!!otherProps.value.length || isFocused}>
          {label}
        </FormInputLabel>
      )}
    </Container>
  );
};

export default FormInput;
