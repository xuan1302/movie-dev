import React, { useState, useEffect } from 'react';
import '../../asset/style/movieList.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';
import MovieCard from '../movieCard/MovieCard';
import { category } from '../../constantsMovie';
import movieApi from '../../api/moviesApi';

const MovieList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};
            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await movieApi.getMoviesList(props.type, { params });
                        break;
                    default:
                        response = await movieApi.getTvList(props.type, { params });
                }
            } else {
                response = await movieApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
    }, []);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default MovieList;
