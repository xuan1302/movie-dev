import axiosClient from "./axiosClient";
import { movieType } from '../constantsMovie';
const movieApi = {
    getMoviesList: (type, params) => {
        const url = `movie/${movieType[type]}`;
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = `tv/${movieType[type]}`;
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