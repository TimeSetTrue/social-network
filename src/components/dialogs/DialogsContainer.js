import React from 'react';
import { connect } from 'react-redux';
import {addMessage, changeValueMessage} from '../../redux/dialogPage-reducer';
import { withRedirectForAuth } from '../hoc/withRedirectForAuth';
import Dialogs from './Dialogs';
import { compose } from 'redux';

const DialogsContainer = ({dialogsArray, messagesArray, valueMessageText}) => {

	return (
		<Dialogs 
			dialogsArray={dialogsArray}
			messagesArray={messagesArray}
			valueMessageText={valueMessageText}
			addMessage={addMessage}
			changeValueMessage={changeValueMessage} />
	)
}

const mapStateToProps = ({
	dialogPage: {
		messagesArray, 
		dialogsArray, 
		valueMessageText }} ) => {

	return {
		messagesArray,
		dialogsArray,
		valueMessageText,
	}
}

const mapDispatchToProps = {
	addMessage,
	changeValueMessage,
}

export default compose(
	withRedirectForAuth,
	connect(mapStateToProps, mapDispatchToProps),
)(DialogsContainer);