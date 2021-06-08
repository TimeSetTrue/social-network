import { usersAPI } from '../API/api';

const initialState = {
	id: null,
	email: null,
	login: null,
	valueAuthText: '',
	pharos: false,
}

const authReducer = (state = initialState, action) => {
	switch(action.type) {
	case 'SET_AUTH_USER': 
		return {
			...state,
			...action.data,
			valueAuthText: '',
		}
	case 'DEFAULT_AUTH':
		return {}
	case 'CHANGE_VALUE_AUTH':
		return {
			...state,
			valueAuthText: action.valueAuth,
		}
	case 'PHAROS_USER_TRUE':
		
		return {...state, pharos: true, valueAuthText: ''}
	case 'PHAROS_USER_FALSE':
		
		return {...state, pharos: false, valueAuthText: ''}
		default:
			return state;
	}
}


export const setUserPharosFalse = () => ({type: 'PHAROS_USER_FALSE'});
export const setUserPharosTrue = () => ({type: 'PHAROS_USER_TRUE'});
export const setValueAuthText = (valueAuth) => ({type: 'CHANGE_VALUE_AUTH', valueAuth});
export const defaultAuth = () => ({type: 'DEFAULT_AUTH'});
export const setAuthUser = (id, email, login) => ({type: 'SET_AUTH_USER', data: {id, email, login}});

export const getUsersAuth = (valueAuthText) => {
	return(dispatch) => {
		usersAPI.getAuthUsers()
			.then(result => {
				const arr = result.data.find(log => log.login === valueAuthText);
				if(arr) {
					dispatch(setAuthUser(arr.id, arr.email, arr.login));
					dispatch(setUserPharosFalse());
				} else {
					dispatch(setUserPharosTrue());
				}
			})
			.catch(error => new Error(error));
	}
}

export default authReducer;