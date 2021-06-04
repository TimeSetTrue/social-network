const initialState = {
	users: [],
}

const usersPageReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'FOLLOW':
			return {
				...state,
				users: state.users.map(item => {
					if(item.id === action.userId) {
						return {
							...item,
							followed: true,
						};
					};
					return item;
				}),
			};
		case 'UNFOLLOW':
			return {
				...state,
				users: state.users.map(item => {
					if(item.id === action.userId) {
						return {
							...item,
							followed: false,
						};
					};
					return item;
				}),
			};
		case 'SET_USERS':
			return { ...state, users: [...state.users, ...action.users], }
		default:
			return state;
	}
}

export const followUser = (userId) => {
	return {
		type: 'FOLLOW',
		userId,
	}
}

export const unFollowUser = (userId) => {
	return {
		type: 'UNFOLLOW',
		userId,
	}
}

export const setUsers = (users) => {
	return {
		type: 'SET_USERS',
		users,
	}
}

export default usersPageReducer;