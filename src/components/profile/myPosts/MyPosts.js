import React from 'react';
import Post from './post';
import s from './myPosts.module.css';

const MyPosts = () => {
	return(
		<div className={s.posts}>
			<div className={s.add_posts}>
				<h2>My posts</h2>
				<form className={s.form}>
					<input placeholder="your news..." />
					<button>Add posts</button>
				</form>
			</div>
			<Post />
		</div>
	)
}

export default MyPosts;