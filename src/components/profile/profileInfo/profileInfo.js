import React from 'react';
import s from './profileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div className={s.profile_info}>
			<img src="https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg" />
			<div className={s.avatar}>
				<img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" />
				<div className={s.avatar_text}>
					<h1>My name</h1>
					<p>Date: 6 decabr</p>
					<p>City: Samara</p>
					<p>Web site: https://saite.ru</p>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;