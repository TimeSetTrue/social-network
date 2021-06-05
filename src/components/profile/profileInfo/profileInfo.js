import React from 'react';
import Loading from '../../loading';
import s from './profileInfo.module.css';
import photoUserDefault from '../../../assets/image/userPhoto.png';

const ProfileInfo = (props) => {
	if(!props.profile) {
		return (
			<>
				<Loading />
			</>
		)
	}

	return (
		<div className={s.profile_info}>
			<img src="https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg" />
			<div className={s.avatar}>
				<img src={props.profile.photos.small === null ? photoUserDefault : props.profile.photos.small} />
				<div className={s.avatar_text}>
					<h1>{props.profile.name}</h1>
					<p>Date: {props.profile.birthday}</p>
					<p>City: {props.profile.city}</p>
					<p>Web site: {props.profile.personalSite}</p>
					<p>Status: {props.profile.status}</p>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;