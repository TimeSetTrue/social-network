import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css';

const Header = (props) => {
	const {defaultAuth, login, getProfileAuth, valueAuthText, setValueAuthText, pharos} = props;

	return (
		<header className={s.header}>
			<div>
				<img  src="https://img.icons8.com/plasticine/2x/duolingo-logo.png" />
			</div>
			<div className={s.header__auth}>
				{pharos ? <div>неверно</div>: null}
				<NavLink 
					to={login ? `/auth/${login}` : '/'} 
					onClick={() => login ? null : getProfileAuth()}>
						{login ? login: "Login"}
				</NavLink>
				{login ? null: 
					<input
						onChange={(e) => setValueAuthText(e.target.value)} 
						value={valueAuthText} />}
				{login ? 
					<NavLink to='/' onClick={defaultAuth}>Exit</NavLink> : null}
			</div>
		</header>
	)
}

export default Header;