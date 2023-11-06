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
	(response) => response,
	(error) => {
		const status = error.response ? error.response.status : null;
		const message = error.response ? error.response.data : null;

		if (status === 401) {
			if (message === "No accesstoken provided.") {
				error.config.withCredentials = true;
				return axios(error.config);
			}
		}
		return Promise.reject(error);
	}
);

export default instance;
