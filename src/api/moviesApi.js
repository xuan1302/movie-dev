import axiosClient from "./axiosClient";
const API_KEY = process.env.REACT_APP_KEY_MOVIE;
const movieApi = {
    getMoviesList: (type, params) => {
        const url = `movie/${type}?api_key=${API_KEY}`;
        // console.log(type)
        // console.log(movieType[type])
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + type;
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = cate + '/' + id + '/videos';
        return axiosClient.get(url, { params: {} });
    },
}

export const apiConfig = {
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}


export default movieApi;