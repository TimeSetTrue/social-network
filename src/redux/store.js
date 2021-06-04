import {combineReducers, createStore} from 'redux';
import dialogPageReducer from './dialogPage-reducer';
import postPageReducer from './postPage-reducer';
import sideBarReducer from './sideBar-reducer';
import usersPageReducer from './usersPage-reducer';

let reducers = combineReducers({
	dialogPage: dialogPageReducer,
	postPage: postPageReducer,
	sideBar: sideBarReducer,
	usersPage: usersPageReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;