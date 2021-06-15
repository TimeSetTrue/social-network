import React from 'react';
import s from './login.module.css';

const LoginForm = () => {
	return (
		<div>
			<h1>LOGIN</h1>
			<form className={s.formSub}>
				<label>
					<input type='text' placeholder='login' />
				</label>
				<label>
					<input type='password' placeholder='password' />
				</label>
				<label>
					<input type="checkbox" placeholder='login' />
					remember me
				</label>
				<button className={s.formBtn}>login</button>
			</form>
		</div>
	)
}

const Login = () => {
	return (
		<div>
			<h1>LOGIN</h1>
			<LoginForm />
		</div>
	)
}

export default LoginForm;