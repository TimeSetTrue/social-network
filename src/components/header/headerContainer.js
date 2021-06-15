import React from 'react';
import { Component } from 'react';
import Header from './Header';
import { defaultAuth } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { setProfileUser } from '../../redux/postPage-reducer';

class HeaderContainer extends Component {

	render() {
		const {login, defaultAuth, pharos, id, setProfileUser} = this.props;
		return (
			<Header {...this.props} 
				login={login} 
				defaultAuth={defaultAuth}
				pharos={pharos}
				id={id}
				setProfileUser={setProfileUser}
			/>
		)
	}
}

const mapStateToProps = ({
		auth : { login, pharos, id }
	}) => {
	return {
		id,
		login,
		pharos,
	}
}

const mapDispatchToProps = {
	defaultAuth,
	setProfileUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)