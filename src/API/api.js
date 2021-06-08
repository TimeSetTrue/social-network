import * as axios from 'axios';

const apiURL = 'http://localhost:3000/';

export const usersAPI = {
	getAuthUsers() {
		return	axios.get(`${apiURL}auth`)
	},
	getProfileUsers(id) {
		return axios.get(`${apiURL}users?id=${id}`)
	},
	getPageUsers(pageCount, limitPage) {
		return axios.get(`${apiURL}users?_page=${pageCount}&_limit=${limitPage}`)
	},
}