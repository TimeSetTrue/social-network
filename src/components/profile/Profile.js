import React from 'react';
import s from './profile.module.css';
import { MyPostsContainer } from './myPosts';
import ProfileInfo from './profileInfo';


const Profile = (props) => {

	return(
		<section className={s.profile}>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</section>
	)
}

export default Profile;