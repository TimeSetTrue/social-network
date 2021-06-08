import { usersAPI } from '../API/api';

const initialState = {
	users: [],
	pageCount: 1,
	limitPage: 3,
	totalUser: 21,
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

export const toggleLoading = (loadingPage) => ({type: 'TOGGLE_IS_LOADING', loadingPage});
export const setPage = (page) => ({type: 'SET_PAGE', page});
export const followUser = (userId) => ({type: 'FOLLOW', userId});
export const unFollowUser = (userId) => ({type: 'UNFOLLOW', userId});
export const setUsers = (users) => ({type: 'SET_USERS', users});

export const getUsersProfile = (pageCount, limitPage) => {
	return (dispatch) => {
		dispatch(toggleLoading(true));
		usersAPI.getPageUsers(pageCount, limitPage)
			.then(result => {
				dispatch(toggleLoading(false));
				dispatch(setUsers(result.data));
			})
			.catch(error => new Error(error));
	}
}

export default usersPageReducer;