import React, {Component} from 'react';
import Post from './post';
import s from './myPosts.module.css';

class MyPosts extends Component {
	
	render() {
		const {addPost, changeValuePost, valuePostText, postArray} = this.props;

		const postElements = postArray.map(item => {
			const {id, post, liked} = item;
			return (
				<Post key={id} post={post} liked={liked} />
			)
		});

		return(
			<div className={s.posts}>
				<div className={s.add_posts}>
					<h2>My posts</h2>
					<form className={s.form} 
						onSubmit={(e) => {
							e.preventDefault();
							addPost(postArray)}}>
						<input placeholder="your news..." 
							onChange={(e) => {
								e.preventDefault();
								changeValuePost(e.target.value)}}
							value={valuePostText}/>
						<button >Add posts</button>
					</form>
					{ postElements }
				</div>
			</div>	
		)
	}
}

export default MyPosts;