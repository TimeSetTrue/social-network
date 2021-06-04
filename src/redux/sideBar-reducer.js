const initialState = {
	sideBar: [
		{id: 0, barList: 'Profile'},
		{id: 1, barList: 'Dialogs'},
		{id: 2, barList: 'News'},
		{id: 3, barList: 'Users'},
		{id: 4, barList: 'Music'},
		{id: 5, barList: 'Settings'},
	]
}

const sideBarReducer = (state = initialState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}

export default sideBarReducer;