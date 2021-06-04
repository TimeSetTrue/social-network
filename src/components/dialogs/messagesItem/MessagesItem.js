import React from 'react';
import s from './messagesItem.module.css';

const MessagesItem = ({messages}) => {
	return (
		<nav>
			<ul>
				<li className={s.messages_item}>
					<div className={s.circle}></div>
					<p>{messages}</p>
				</li>
			</ul>
		</nav>
	)
}

export default MessagesItem;