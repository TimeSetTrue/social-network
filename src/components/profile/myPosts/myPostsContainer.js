import { connect } from 'react-redux';
import { addPost, changeValuePost } from '../../../redux/postPage-reducer';
import MyPosts from './MyPosts';

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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;