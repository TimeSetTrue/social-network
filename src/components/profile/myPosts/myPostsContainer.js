import { connect } from 'react-redux';
import { addPost, changeValuePost } from '../../../redux/postPage-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({valuePostText, postArray, addPost, changeValuePost}) => {
	return (
		<MyPosts 
			valuePostText={valuePostText}
			postArray={postArray}
			addPost={addPost}
			changeValuePost={changeValuePost} />
	)
}

const mapStateToProps = ({
	postPage: {
		valuePostText,
		postArray }}) => {

	return {
		postArray,
		valuePostText,
	}
}

const mapDispatchToProps = {
	addPost,
	changeValuePost,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);