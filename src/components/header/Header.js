import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css';

const Header = (props) => {
	const {defaultAuth, login, pharos, id, setProfileUser} = props;

	return (
		<header className={s.header}>
			<div>
				<img  src="https://img.icons8.com/plasticine/2x/duolingo-logo.png" />
			</div>
			<div className={s.header__auth}>
				{pharos ? <div>неверно</div>: null}
				<NavLink 
					to={login ? `/profile/${id}` : '/auth/'}
					onClick={() => setProfileUser(id)}>
						{login ? login: "Login"}
				</NavLink>
				{login ? 
					<NavLink to='/' onClick={defaultAuth}>Exit</NavLink> : null}
			</div>
		</header>
	)
}

export default Header;