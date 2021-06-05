const initialState = {
	postArray: [
		{id: Math.random() * 10, post: 'Hello, my name is...', liked: 2},
		{id: Math.random() * 10, post: 'Bay, bay', liked: 3},
		{id: Math.random() * 10, post: 'My friend is Vadim', liked: 2},
		{id: Math.random() * 10, post: 'hahahahah', liked: 5},
	],
	valuePostText: '',
	profile: null,
};


const postPageReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_POST':
			const {valuePostText} = state;

			if(valuePostText) {
				const newPost = {
					id: valuePostText + Math.random(), 
					post: valuePostText, 
					liked: 3,
				};
				return {
					...state,
					postArray: [
						...state.postArray,
						newPost,
					],
					valuePostText: '',
				};
			} else {
				return state;
			}

		case 'CHANGE_VALUE_POST':
			const textPost = action.payload;

			return {
				...state,
				valuePostText: textPost,
			};
		case 'SET_PROFILE_USER':
			return {
				...state,
				profile: action.profileId[0],
			}
		default:
			return state;
	}
}

export const setProfileUser = (profileId) => {
	return {
		type: 'SET_PROFILE_USER',
		profileId,
	};
}

export const addPost = (arrPosts) => {
	return {
		type: 'ADD_POST',
		array: arrPosts,
	};
};

export const changeValuePost = (textPost) => {
	return {
		type: 'CHANGE_VALUE_POST',
		payload: textPost,
	};
};

export default postPageReducer;