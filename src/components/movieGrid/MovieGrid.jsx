import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';
import movieApi from '../../api/moviesApi';
import '../../asset/style/movieGrid.scss';
import { category, movieType, tvType } from '../../constantsMovie';
import MovieCard from '../movieCard/MovieCard';


const MovieGrid = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await movieApi.getMoviesList(movieType.upcoming, { params });
                        break;
                    default:
                        response = await movieApi.getTvList(tvType.popular, { params });
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await movieApi.search(props.category, { params });
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword]);

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            switch (props.category) {
                case category.movie:
                    response = await movieApi.getMoviesList(movieType.upcoming, { params });
                    break;
                default:
                    response = await movieApi.getTvList(tvType.popular, { params });
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await movieApi.search(props.category, { params });
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className="movie-grid">
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i} />)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <button className="small" onClick={loadMore}>Load more</button>
                    </div>
                ) : null
            }
        </>
    );
}

const MovieSearch = props => {

    const history = useHistory();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history.push(`/${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="movie-search">
            <input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="small" onClick={goToSearch}>Search</button>
        </div>
    )
}

export default MovieGrid;
