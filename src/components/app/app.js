import React from 'react';
import Header from '../header';
import NavBar from '../navBar';
import Profile from '../profile';
import './app.css';

const App = () => {
	return (
		<div className="app">	
			<Header />
			<NavBar />
			<Profile />
		</div>
	)
	
}

export default App;