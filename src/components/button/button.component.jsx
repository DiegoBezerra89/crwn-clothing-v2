import { BaseButton, GoogleButton, InvertedButton } from "./button.styles.jsx";

//### IMPORTANT ###
//This architecture is usefull

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getTypeButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ buttonType, children, ...otherProps }) => {
  const StyledButton = getTypeButton(buttonType);
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default Button;
