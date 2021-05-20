import React from 'react';
import s from './post.module.css';

const Post = () => {
	return(
		<div className={s.posted}>
			<div className={s.circle}></div>
			<p>Hey, My name is Andrey</p>
		</div>
	)
}

export default Post;