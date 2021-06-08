import React from 'react';
import { NavLink } from 'react-router-dom';
import photoUser from '../../assets/image/userPhoto.png';
import LoadingPage from '../loading';
import s from './users.module.css';

const Users = (props) => {
	const {
		totalUser, limitPage, 
		onPageChanged, pageCount, 
		unFollowUser, followUser, 
		users, isLoading } = props;

	return (
		<div>
			{isLoading ? <LoadingPage /> : null}
			<SetPage 
				totalUser={totalUser}
				limitPage={limitPage}
				onPageChanged={onPageChanged}
				pageCount={pageCount} />
			{
				users.map(item => {
					const {photos, id, name, status, followed} = item;
					return (
						<div key={id}  className={s.d__flex + ' ' + s.users__list}>
							<div className={s.avatar}>
								<NavLink to={`/profile/${id}`}>
								<img 
									src={photos.small == null ? photoUser : photos.small} 
									className={s.photoUser} />
								</NavLink>
								{followed ? 
									<button 
										className={s.user__btn} 
										onClick={() => unFollowUser(id)} >unfollow</button>: 
									<button 
										className={s.user__btn + ' ' + s.active} 
										onClick={() => followUser(id)}>follow</button>
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
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

const SetPage = (props) => {
	const {
		totalUser, limitPage, 
		onPageChanged, pageCount } = props;

	const pageArr = [];
	const count = Math.ceil(totalUser / limitPage);
	
	for(let i = 1; i <= count; i++) {
		pageArr.push(i);
	};
	return (
		<div>
			{
				pageArr.map(page => {
					return <span 
						onClick={() => onPageChanged(page)} 
						key={page} 
						className={pageCount === page ? s.page__active : ''}>{page}</span>
				})
			}
		</div>
	)
}


export default Users;