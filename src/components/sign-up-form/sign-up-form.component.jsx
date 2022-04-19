import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
}

const SignUpForm = () => {
	const [ formFields, setFormFields ] = useState(defaultFormFields);
	
	const { 
		displayName,
		email,
		password,
		confirmPassword
	} = formFields;
	
	const handleChange = (event) =>{
		const { name, value } = event.target;
		setFormFields({...formFields, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if(password !== confirmPassword) {
			alert('The passwords do not match');
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, { displayName });
		} catch(err) {
			if(err.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log(err);
			}
		}
	};

	return (
		<>
			<h1>Sign up with your email and Password</h1>
			<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input type="text" required onChange={handleChange} name='displayName' value={displayName}></input>
				<label>Email</label>
				<input type="email" required onChange={handleChange} name='email' value={email}></input>
				<label>Password</label>
				<input type="password" required onChange={handleChange} name="password" value={password}></input>
				<label>Confirm Password</label>
				<input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}></input>
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignUpForm;