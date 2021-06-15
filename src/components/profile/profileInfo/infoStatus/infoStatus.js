import React, { Component } from 'react';
import s from '../profileInfo.module.css';
import photoUserDefault from '../../../../assets/image/userPhoto.png';

class InfoStatus extends Component {
	state = {
		editMode: true,
		status: this.props.status,
	}

	editModeFalse = () => {
		this.setState({
			editMode: false,
		});
	}
	
	editModeClickTrue = () => {
		this.setState({
			editMode: true,
		});
	}

	updateStatus = (e) => {
		this.setState({
			status: e.target.value,
		})
	}

	render() {
		const {photos, name, birthday, city, personalSite} = this.props;
		return (
			<div className={s.avatar}>
				<img src={photos.small === null ? photoUserDefault : photos.small} />
				<div className={s.avatar_text}>
					<h1>{name}</h1>
					<p>Date: {birthday}</p>
					<p>City: {city}</p>
					<p>Web site: {personalSite}</p>
					<p onDoubleClick={this.editModeFalse}>Status:
					{this.state.editMode 
						? <>{this.state.status} </>
						:<input onChange={this.updateStatus} autoFocus={true} onBlur={this.editModeClickTrue} value={this.state.status} />
					}
					</p>
				</div>
			</div>
		)
	}
}

export default InfoStatus;