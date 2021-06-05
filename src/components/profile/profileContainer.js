import * as axios from 'axios';
import React, {Component} from 'react'
import { connect } from 'react-redux';
import Profile from './Profile';
import {setProfileUser} from '../../redux/postPage-reducer';
import { withRouter } from 'react-router';

class ProfileContainer extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = 1001;
		}
		axios.get(`http://localhost:3000/users?id=${userId}`)
			.then(result => {
				this.props.setProfileUser(result.data);
			});
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
};

const mapStateToProps = (state) => {
	return {
		profile: state.postPage.profile,
	}
}

const mapDispatchToProps = {
	setProfileUser,
}

const ProfileContainerRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerRouter);