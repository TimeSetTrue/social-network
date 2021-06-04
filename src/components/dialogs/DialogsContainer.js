import { connect } from 'react-redux';
import {addMessage, changeValueMessage} from '../../redux/dialogPage-reducer';
import Dialogs from './Dialogs';

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;