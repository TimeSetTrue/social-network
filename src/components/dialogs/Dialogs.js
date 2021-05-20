import React from 'react';
import { Link } from 'react-router-dom';
import s from './dialogs.module.css';


const DialogsItem = ({name, id}) => {
	const path = `/dialogs/${id}`;

	return (
		<li className={s.dialogs_item}>
			<Link to={path}>{name}</Link>
		</li>
	)
}

const MessagesItem = ({messages}) => {
	return (
		<li className={s.messages_item}>
			<div className={s.circle}></div>
			<p>{messages}</p>
		</li>
	)
}

const Dialogs = () => {
	return (
		<section>
			<h1 className={s.dialog_head}>Dialogs</h1>
			<div className={s.dialogs}>
				<div className={s.dialog_list}>
					<nav>
						<ul>
							<DialogsItem name='Andrey' id='1' />
							<DialogsItem name='Masha' id='2' />
							<DialogsItem name='Vadim' id='3' />
							<DialogsItem name='Valera' id='4' />
						</ul>
					</nav>
				</div>
				<div className={s.messages}>
					<nav>
						<ul>
							<MessagesItem messages='Hi' />
							<MessagesItem messages='How are you?' />
							<MessagesItem messages='My name is Andrey' />
							<MessagesItem messages='Lose myPosts' />
						</ul>
					</nav>
				</div>
			</div>
		</section>
	)
}

export default Dialogs;