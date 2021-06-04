import React from 'react';
import s from './dialogs.module.css';
import DialogsItem from './dialogsItem';
import MessagesItem from './messagesItem';

const Dialogs = ({
	dialogsArray,
	messagesArray,
	valueMessageText,
	addMessage,
	changeValueMessage}) => {
	
	const dialogsElements = dialogsArray.map(dialog => {
		return (
			<DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />
		)
	});
	
	const messagesElements = messagesArray.map(message => {
		return (
			<MessagesItem key={message.id} messages={message.messages} />
		)
	});

	return (
		<section>
			<h1 className={s.dialog_head}>Dialogs</h1>
			<div className={s.dialogs}>
				<div className={s.dialog_list}>
					{ dialogsElements }
				</div>
				<div className={s.messages}>
					{ messagesElements }
					<form className={s.form} 
						onSubmit={(e) => {
							e.preventDefault();
							addMessage(messagesArray)}}>
						<input placeholder="your news..." 
							onChange={(e) => {
								e.preventDefault();
								changeValueMessage(e.target.value)}}
							value={valueMessageText}
							/>
						<button >Add posts</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Dialogs;