import React, {Component} from 'react';
import NavBar from '../navBar';
import { DialogsContainer } from '../dialogs';
import s from './app.module.css';
import {Route} from 'react-router-dom';
import { UsersContainer } from '../Users';
import ProfileContainer from '../profile/profileContainer';
import HeaderContainer from '../header/headerContainer';
import Login from '../login/login';

export default class App extends Component {

	render() {
		return (
			<div className={s.app}>
				<HeaderContainer / >
				<NavBar />
				<div className={s.content_wrapp}>
					<Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
					<Route path='/dialogs' render={ () => <DialogsContainer />}/>
					<Route path='/users' render={ () => <UsersContainer />}/>
					<Route path='/auth' render={ () => <Login />}/>
				</div>
			</div>
		)
	}
}