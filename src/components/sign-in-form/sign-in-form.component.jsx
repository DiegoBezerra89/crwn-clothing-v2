import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect password!");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email!");
          break;
        default:
          console.log(err);
      }
    }
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" buttonType="">
            Sign In
          </Button>
          <Button onClick={logGoogleUser} buttonType="google" type="button">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
