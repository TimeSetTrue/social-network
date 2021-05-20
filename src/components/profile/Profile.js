import React from 'react';
import MyPosts from './myPosts';
import ProfileInfo from './profileInfo';
import s from './profile.module.css';

const Profile = () => {
	return(
		<section className={s.profile}>
			<ProfileInfo />
			<MyPosts />
		</section>
	)
}

export default Profile;