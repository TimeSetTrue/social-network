import React from 'react';
import s from './profile.module.css';
import { MyPostsContainer } from './myPosts';
import ProfileInfo from './profileInfo';

const Profile = ({profile}) => {
	return(
		<section className={s.profile}>
			<ProfileInfo profile={profile} />
			<MyPostsContainer />
		</section>
	)
}

export default Profile;