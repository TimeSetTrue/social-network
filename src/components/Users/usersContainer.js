import React, {Component} from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {followUser, unFollowUser, setUsers, setPage, toggleLoading} from '../../redux/usersPage-reducer';
import * as axios from 'axios';


class UsersContainer extends Component {

	componentDidMount() {
		const {toggleLoading, limitPage, setUsers, pageCount} = this.props;

		toggleLoading(true);
		axios.get(`http://localhost:3000/users?_page=${pageCount}&_limit=${limitPage}`)
			.then(result => {
				toggleLoading(false);
				setUsers(result.data);
			});
	}

	onPageChanged = (page) => {
		const {toggleLoading, setPage, limitPage, setUsers} = this.props;

		toggleLoading(true);
		setPage(page);
		axios.get(`http://localhost:3000/users?_page=${page}&_limit=${limitPage}`)
			.then(result => {
				toggleLoading(false);
				setUsers(result.data);
			});
	}

	render() {
		const {totalUser,
				limitPage,
				pageCount,
				users,
				unFollowUser,
				followUser,
				isLoading} = this.props;


		return <Users	totalUser={totalUser}
						limitPage={limitPage}
						onPageChanged={this.onPageChanged}
						pageCount={pageCount}
						users={users}
						unFollowUser={unFollowUser}
						followUser={followUser}
						isLoading={isLoading}
				/>
	}
}

const mapStateToProps = ({
	usersPage: {users, pageCount, totalUser, limitPage, isLoading}
	}) => {
		return {
			users,
			pageCount,
			totalUser,
			limitPage,
			isLoading,
		}
}

const mapDispatchToProps = {
	followUser,
	unFollowUser,
	setUsers,
	setPage,
	toggleLoading,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);