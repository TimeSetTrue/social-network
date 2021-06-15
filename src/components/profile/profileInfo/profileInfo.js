import React from 'react';
import s from './profileInfo.module.css';

import InfoStatus from './infoStatus/infoStatus';

const ProfileInfo = (props) => {

	return (
		<div className={s.profile_info}>
			<img src="https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg" />
			<div>
				<InfoStatus {...props.profile} />
			</div>
		</div>
	)
}

export default ProfileInfo;