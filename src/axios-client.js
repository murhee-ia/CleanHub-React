import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    withCredentials: true, // to send cookies in every request automatically
})

// null-review request interceptor for authorization
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// authorization-review response interceptor
axiosClient.interceptors.response.use(
    (response) => {
        // if fulfilled:
        return response
    }, (error) => {
        // if rejected:
        return Promise.reject(error)
})

export default axiosClient