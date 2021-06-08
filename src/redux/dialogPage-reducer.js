const initialState = {
	messagesArray: [
		{id: 1, messages: 'Hi'},
		{id: 2, messages: 'How are you?'},
		{id: 3, messages: 'My name is Andrey'},
		{id: 4, messages: 'Lose myPosts'},
	],
	dialogsArray: [
		{id: 1, name: 'Andrey'},
		{id: 2, name: 'Masha'},
		{id: 3, name: 'Vadim'},
		{id: 4, name: 'Valera'},
	],
	valueMessageText: '',
};

const dialogPageReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_MESSAGE':
			const {valueMessageText} = state;
			if(valueMessageText) {
				const newMessage = {
					id: valueMessageText + Math.random(), 
					messages: valueMessageText,
					};
				return {
					...state,
					messagesArray: [
						...state.messagesArray,
						newMessage,
					],
					valueMessageText: '',
				};
			} else {
				return state;
			}
		case 'CHANGE_VALUE_MESSAGE':
			const textMessage = action.payload;

			return {
				...state,
				valueMessageText: textMessage,
			};
		default:
			return state;
	}
}


export const addMessage = (arrMessage) => ({type: 'ADD_MESSAGE', array: arrMessage});
export const changeValueMessage = (textMessage) => (
		{type: 'CHANGE_VALUE_MESSAGE', payload: textMessage}
	);

export default dialogPageReducer;