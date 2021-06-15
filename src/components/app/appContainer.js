import React from 'react';
import { connect } from 'react-redux';
import App from './App';

const AppContainer = (props) => {
	return (
		<App login={props.login} />
	)
}

const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
	}
}

export default connect(mapStateToProps)(AppContainer)