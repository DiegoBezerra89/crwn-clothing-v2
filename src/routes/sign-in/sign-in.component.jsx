import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
		<>
			<div>
				<h1>SignIn page</h1>
				<Button onClick={logGoogleUser} buttonType={'google'}>Sign In with Google</Button>
			</div>
			<div>
				<SignUpForm />
			</div>
		</>
  );
};

export default SignIn;
