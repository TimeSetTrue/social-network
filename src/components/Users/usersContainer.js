import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {followUser, unFollowUser, setUsers} from '../../redux/usersPage-reducer';

const mapStateToProps = ({
	usersPage: {users}
	}) => {
		return {
			users,
		}
}

const mapDispatchToProps = {
	followUser,
	unFollowUser,
	setUsers,
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;