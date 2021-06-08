import { combineReducers, createStore, applyMiddleware } from 'redux';
import authReducer from './auth-reducer';
import dialogPageReducer from './dialogPage-reducer';
import postPageReducer from './postPage-reducer';
import sideBarReducer from './sideBar-reducer';
import usersPageReducer from './usersPage-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
	dialogPage: dialogPageReducer,
	postPage: postPageReducer,
	sideBar: sideBarReducer,
	usersPage: usersPageReducer,
	auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;