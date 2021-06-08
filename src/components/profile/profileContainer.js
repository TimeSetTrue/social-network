import React, {Component} from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Profile from './Profile';
import { setProfileUser } from '../../redux/postPage-reducer';
import { withRouter } from 'react-router';
import Loading from '../loading';
import { withRedirectForAuth } from '../hoc/withRedirectForAuth';

class ProfileContainer extends Component {

	componentDidMount() {
		const {id, setProfileUser} = this.props;
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = id;
		}
		setProfileUser(userId);
	}

	render() {
		const {profile} = this.props;
		if(!profile) return <> <Loading /> </>;

		return (
			<Profile {...this.props} profile={profile} />
		)
	}
};

const mapStateToProps = (state) => {
	return {
		profile: state.postPage.profile,
		id: state.auth.id,
	}
}

const mapDispatchToProps = {
	setProfileUser
}

export default compose(
	withRedirectForAuth,
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);