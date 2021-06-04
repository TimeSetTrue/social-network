import React from 'react';
import { Link } from 'react-router-dom';
import s from './dialogsItem.module.css'

const DialogsItem = ({name, id}) => {
	const path = `/dialogs/${id}`;
	return (
		<nav>
			<ul>
				<li className={s.dialogs_item}>
					<Link to={path}>{name}</Link>
				</li>
			</ul>
		</nav>
		
	)
}

export default DialogsItem;

