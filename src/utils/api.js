import axios from 'axios'

const token=process.env.REACT_APP_ACCESS_TOKEN
// const apiKey =process.env.REACT_APP_API_KEY

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	headers: {
		Accept: 'application/json',
		Authorization: `Bearer ${token}`
	},
})

export default api