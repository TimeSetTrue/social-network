import React, {Component} from 'react';
import Header from '../header';
import NavBar from '../navBar';
import Profile from '../profile';
import { DialogsContainer } from '../dialogs';
import s from './app.module.css';
import {Route} from 'react-router-dom';
import { UsersContainer } from '../Users';
import ProfileContainer from '../profile/profileContainer';

export default class App extends Component {

	render() {
		return (
			<div className={s.app}>
				<Header / >
				<NavBar />
				<div className={s.content_wrapp}>
					<Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
					<Route path='/dialogs' render={ () => <DialogsContainer />}/>
					<Route path='/users' render={ () => <UsersContainer />}/>
				</div>
			</div>
		)
	}
}