import React from 'react';
import s from './profileInfo.module.css';
import photoUserDefault from '../../../assets/image/userPhoto.png';

const ProfileInfo = (props) => {

	const {photos, name, birthday, city, personalSite, status} = props.profile;

	return (
		<div className={s.profile_info}>
			<img src="https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg" />
			<div className={s.avatar}>
				<img src={photos.small === null ? photoUserDefault : photos.small} />
				<div className={s.avatar_text}>
					<h1>{name}</h1>
					<p>Date: {birthday}</p>
					<p>City: {city}</p>
					<p>Web site: {personalSite}</p>
					<p>Status: {status}</p>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;