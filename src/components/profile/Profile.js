import React from 'react';

const Profile = () => {
	return(
		<div className="profile">
			<img src="https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg" />
			<div className="avatar">
				<img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" />
				<div className="avatar-text">
					<h1>My name</h1>
					<p>Date: 6 decabr</p>
					<p>City: Samara</p>
					<p>Web site: https://saite.ru</p>
				</div>
			</div>
			<div className="posts">
				<div className="add-posts">
					<h2>My posts</h2>
					<form className="form-posts">
						<input placeholder="your news..." />
						<button>Add posts</button>
					</form>
				</div>
				<div className="posts-profile">
					<div className="circle"></div>
					<p>Hey, My name is Andrey</p>
				</div>
			</div>
		</div>
	)
}

export default Profile;