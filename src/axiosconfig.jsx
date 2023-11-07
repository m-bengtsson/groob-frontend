import axios from "axios";

//todo: try and make stuff async to fix rerendering problem
const instance = axios.create({
	baseURL: "http://localhost:8080/api/",
});

instance.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem("accesstoken");
	if (accessToken) {
		config.headers.Authorization = accessToken;
	}
	return config;
});

instance.interceptors.response.use(
	async (response) => {
		if (response.data === "New accesstoken") {
			localStorage.setItem("accesstoken", response.headers.authorization);
			response.config.Authorization = response.headers.authorization;
			return await instance(response.config);
		}
		return response;
	},

	async (error) => {
		const originalRequest = error.config;
		const status = error.response ? error.response.status : null;
		const message = error.response ? error.response.data : null;

		if (status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			if (
				message === "No accesstoken provided." ||
				message === "No refreshtoken provided."
			) {
				error.config.withCredentials = true;
				return await instance(error.config);
			}
		}
		return Promise.reject(error);
	}
);

export default instance;
