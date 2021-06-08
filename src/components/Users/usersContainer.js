import React, {Component} from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
	followUser, unFollowUser, 
	setPage, getUsersProfile
} from '../../redux/usersPage-reducer';


class UsersContainer extends Component {

	componentDidMount() {
		const {limitPage, pageCount} = this.props;

		this.props.getUsersProfile(pageCount, limitPage);
	}

	onPageChanged = (page) => {
		const {setPage, limitPage, getUsersProfile} = this.props;

		setPage(page);
		getUsersProfile(page, limitPage);
	}

	render() {
		const { totalUser, limitPage, 
			pageCount, users, 
			unFollowUser, followUser, 
			isLoading } = this.props;

		return <Users	totalUser={totalUser}
						limitPage={limitPage}
						onPageChanged={this.onPageChanged}
						pageCount={pageCount}
						users={users}
						unFollowUser={unFollowUser}
						followUser={followUser}
						isLoading={isLoading} />
	}
}

const mapStateToProps = ({
	usersPage: { users, pageCount, totalUser, limitPage, isLoading }
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
	setPage,
	getUsersProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);