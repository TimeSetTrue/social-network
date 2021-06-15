import React from 'react';
import { Field, reduxForm } from 'redux-form'
import s from './login.module.css';


const LoginForm = (props) => {
	return (
		<form className={s.formSub} onSubmit={props.handleSubmit}>
			<label>
				<Field name={'login'}  component={'input'} type='text' placeholder='login' />
			</label>
			<label>
				<Field name={'password'} component={'input'} type='password' placeholder='password' />
			</label>
			<label>
				<Field name={'cheak'} component={'input'} type="checkbox" placeholder='login' />
				remember me
			</label>
			<button className={s.formBtn}>login</button>
		</form>
	)
}

const LoginFormReducer = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

	const onSubmit = (formData) => {
		props.getUsersAuth(formData);
	}

	return (
		<div>
			<h1>LOGIN</h1>
			<LoginFormReducer onSubmit={onSubmit} />
		</div>
	)
}


export default Login;