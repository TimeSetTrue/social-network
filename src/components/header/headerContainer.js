import React from 'react';
import { Component } from 'react';
import Header from './Header';
import { defaultAuth, setValueAuthText, getUsersAuth } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends Component {

	getProfileAuth = () => {
		const {getUsersAuth, valueAuthText} = this.props;
		getUsersAuth(valueAuthText);
	}

	render() {
		const {login, defaultAuth, valueAuthText, setValueAuthText, pharos} = this.props;
		return (
			<Header {...this.props} 
				login={login} 
				getProfileAuth={this.getProfileAuth} 
				defaultAuth={defaultAuth}
				valueAuthText={valueAuthText}
				setValueAuthText={setValueAuthText}
				pharos={pharos}
			/>
		)
	}
}

const mapStateToProps = ({
		auth : { login, valueAuthText, pharos }
	}) => {
	return {
		login,
		valueAuthText,
		pharos,
	}
}

const mapDispatchToProps = {
	setValueAuthText,
	getUsersAuth,
	defaultAuth,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)