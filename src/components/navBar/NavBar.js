import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navBar.module.css';

const NavBar = () => {
	return (
		<div className={s.bar}>
			<nav>
				<ul className={s.bar_list}>
					<li>
						<NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
					</li>
					<li>
						<NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
					</li>
					<li>
						<NavLink to="#">News</NavLink>
					</li>
					<li>
						<NavLink to="#">Music</NavLink>
					</li>
					<li>
						<NavLink to="#">Settings</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default NavBar;