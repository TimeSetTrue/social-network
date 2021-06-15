import React from 'react';
import { Component } from 'react';
import { getUsersAuth } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import Login from './login';

class LoginContainer extends Component {
	render() {
		return (
			<Login getUsersAuth={this.props.getUsersAuth} />
		)
	}
}

const mapStateToProps = (state) => {
	return{
		a:1
	}
}

const mapDispatchToProps = {
	getUsersAuth,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)