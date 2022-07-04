import axios from "axios";
import queryString from 'query-string';
const API_KEY = process.env.REACT_APP_KEY_MOVIE;
console.log(API_KEY)
const axiosClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify({ ...params, api_key: API_KEY })
});

//  Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use((config) => {
    // Do something before request is sent

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
export default axiosClient;