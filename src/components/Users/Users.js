import React, {Component} from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import photoUser from '../../assets/image/userPhoto.png';

class Users extends Component{
	constructor(props) {
		super(props);

		if(this.props.users.length === 0) {
			axios.get('http://localhost:3000/users')
				.then(result => {
					this.props.setUsers(result.data)
				});
		}
	}
	
	render() {
		return (
			<div>
				{
					this.props.users.map(item => {
						const {photos, id, name, status, followed} = item;
						return (
							<div key={id}  className={s.d__flex + ' ' + s.users__list}>
								<div className={s.avatar}>
									<img 
										src={photos.small == null ? photoUser : photos.small} 
										className={s.photoUser} />
									{followed ? 
										<button 
											className={s.user__btn} 
											onClick={() => this.props.unFollowUser(id)} >unfollow</button>: 
										<button 
											className={s.user__btn + ' ' + s.active} 
											onClick={() => this.props.followUser(id)}>follow</button>
									}
								</div>
								<div className={s.d__flex + ' ' + s.status}>
									<div className={s.status__name}>
										<div>
											{name}
										</div>
										<div className={s.status__name_user}>
											{status}
										</div>
									</div>
									{/* <div className={s.status__name}>
										<div>
											{item.location.city}
										</div>
										<div>
											{item.location.country}
										</div>
									</div> */}
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Users;