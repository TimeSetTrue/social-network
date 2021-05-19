import React from 'react';
import s from './navBar.module.css';

const NavBar = () => {
	return (
		<div className={s.bar}>
			<nav>
				<ul className={s.bar_list}>
					<li>
						<a href="#">Profile</a>
					</li>
					<li>
						<a href="#">Messages</a>
					</li>
					<li>
						<a href="#">News</a>
					</li>
					<li>
						<a href="#">Music</a>
					</li>
					<li>
						<a href="#">Settings</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default NavBar;