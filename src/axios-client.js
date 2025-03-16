import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

// null-review request interceptor for authorization
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

// authorization-review response interceptor
axiosClient.interceptors.response.use((response) => {

    // if fulfilled:
    return response

}, (error) => {

    // if rejected:
    const {response} = error;
    if (response.status === 401) {  // user is not authorized
        localStorage.removeItem('ACCESS_TOKEN')
    } throw error;

})

export default axiosClient