import React from 'react';
import ProfileInfo from './profileInfo';
import s from './profile.module.css';
import { MyPostsContainer } from './myPosts';

const Profile = () => {

	return(
		<section className={s.profile}>
			<ProfileInfo />
			<MyPostsContainer />
		</section>
	)
}

export default Profile;