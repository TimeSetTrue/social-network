import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withRedirectForAuth = (Component) => {

	class RedirectComponent extends React.Component {
		render() {
			if(!this.props.login) return <Redirect to='/auth' />
			return <Component {...this.props} />
		}
	}

	const mapStateToProps = (state) => {
		return {
			login: state.auth.login,
		}
	}
	return connect(mapStateToProps)(RedirectComponent);
}