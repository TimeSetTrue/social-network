import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navBar.module.css';
import { connect } from 'react-redux'; 

const NavBar = (props) => {

	const sideBarList = props.sideBar.map(item => {
		let lower = item.barList.toLowerCase();
		
		return (
			<li key={item.id}>
				<NavLink to={`/${lower}`} activeClassName={s.active}>{item.barList}</NavLink>
			</li>
		)
	});

	return (
		<div className={s.bar}>
			<nav>
				<ul className={s.bar_list}>
					{sideBarList}
				</ul>
			</nav>
		</div>
	)
}

let mapStateToProps = (state) => {
	return {
		sideBar: state.sideBar.sideBar ,
	}
}

export default connect(mapStateToProps)(NavBar);