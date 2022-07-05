import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import movieApi, { apiConfig } from '../api/moviesApi';

// import tmdbApi from '../../api/tmdbApi';
// import apiConfig from '../../api/apiConfig';

import '../asset/style/detail.scss';
import CastList from '../components/castList/CastList';
import MovieList from '../components/movieList/MovieList';
import VideoList from '../components/videoList/VideoList';
// import CastList from './CastList';
// import VideoList from './VideoList';

// import MovieList from '../../components/movie-list/MovieList';

const SingleTV = () => {
    const { id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await movieApi.detail('tv', id, {
                params: {},
            });
            setItem(response);
            window.scrollTo(0, 0);
        };
        getDetail();
    }, [ id]);

    return (
        <>
            {item && (
                <>
                    <div
                        className="banner"
                        style={{
                            backgroundImage: `url(${apiConfig.originalImage(
                                item.backdrop_path || item.poster_path
                            )})`,
                        }}
                    ></div>
                    <div className="mb-3 movie-content container">
                        <div className="movie-content__poster">
                            <div
                                className="movie-content__poster__img"
                                style={{
                                    backgroundImage: `url(${apiConfig.originalImage(
                                        item.poster_path || item.backdrop_path
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className="movie-content__info">
                            <h1 className="title">{item.title || item.name}</h1>
                            <div className="genres">
                                {item.genres &&
                                    item.genres.slice(0, 5).map((genre, i) => (
                                        <span key={i} className="genres__item">
                                            {genre.name}
                                        </span>
                                    ))}
                            </div>
                            <p className="overview">{item.overview}</p>
                            <div className="cast">
                                <div className="section__header">
                                    <h2>Casts</h2>
                                </div>
                                <CastList category="tv" id={item.id} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="section mb-3">
                            <VideoList category="tv" id={item.id} />
                        </div>
                        <div className="section mb-3">
                            <div className="section__header mb-2">
                                <h2>Similar</h2>
                            </div>
                            <MovieList
                                category='tv'
                                type="similar"
                                id={item.id}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default SingleTV;
