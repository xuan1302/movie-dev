import React from 'react';
import '../../asset/style/movieCard.scss';
import { Link } from 'react-router-dom';
import { category } from '../../constantsMovie';
import { apiConfig } from '../../api/moviesApi';

const MovieCard = props => {

    const item = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;
