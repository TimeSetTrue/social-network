import React from 'react';
import Header from '../header';
import NavBar from '../navBar';
import Profile from '../profile';
import s from './app.module.css';

const App = () => {
	return (
		<div className={s.app}>
			<Header />
			<NavBar />
			<Profile />
		</div>
	)
	
}

export default App;