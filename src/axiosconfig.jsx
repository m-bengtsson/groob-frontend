import axios from "axios";

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
	(response) => {
		if (response.data === "New accesstoken") {
			localStorage.setItem("accesstoken", response.headers.authorization);
			response.config.Authorization = response.headers.authorization;
			return instance(response.config);
		}
		return response;
	},

	(error) => {
		const originalRequest = error.config;
		const status = error.response ? error.response.status : null;
		const message = error.response ? error.response.data : null;

		if (status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			if (message === "No accesstoken provided.") {
				error.config.withCredentials = true;
				return instance(error.config);
			}
		}
		return Promise.reject(error);
	}
);

export default instance;
