import React from 'react';
import s from './post.module.css';

const Post = ({post, liked}) => {
	return(
		<div className={s.posted}>
			<div className={s.circle}></div>
			<p>{post}</p>
			<span className={s.like}>{liked}</span>
		</div>
	)
}

export default Post;