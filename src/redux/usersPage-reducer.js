const initialState = {
	users: [],
	pageCount: 1,
	limitPage: 3,
	totalUser: 20,
	isLoading: false,
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
			return { ...state, users: action.users }
		case 'SET_PAGE':
			return {
				...state,
				pageCount: action.page,
			}
		case 'TOGGLE_IS_LOADING':
			return {...state, isLoading: action.loadingPage,}
		default:
			return state;
	}
}

export const toggleLoading = (loadingPage) => {
	return {
		type: 'TOGGLE_IS_LOADING',
		loadingPage,
	}
}

export const setPage = (page) => {
	return {
		type: 'SET_PAGE',
		page
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