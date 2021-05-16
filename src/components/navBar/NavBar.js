import React from 'react';

const NavBar = () => {
	return (
		<div className="app-bar">
			<nav>
				<ul className="app-bar-list">
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