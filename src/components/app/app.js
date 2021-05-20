import React from 'react';
import Header from '../header';
import NavBar from '../navBar';
import Profile from '../profile';
import Dialogs from '../dialogs';
import s from './app.module.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className={s.app}>
				<Header / >
				<NavBar />
				<div className={s.content_wrapp}>
					<Route path='/profile' component={Profile} />
					<Route path='/dialogs' component={Dialogs} />
				</div>
			</div>
		</Router>
		
	)
}

export default App;