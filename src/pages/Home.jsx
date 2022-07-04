import React from 'react';
import { Link } from 'react-router-dom';
import HomeSlide from '../components/homeSlide/HomeSlide';
import MovieList from '../components/movieList/MovieList';
import { category, movieType, tvType } from '../constantsMovie';


function Home(props) {
    return (
        <>
            <HomeSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <button className="small btn-watch-trailer" >View more</button>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <button className="small btn-watch-trailer">View more</button>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <button className="small btn-watch-trailer">View more</button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <button className="small btn-watch-trailer">View more</button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>
            </div>
        </>
    );
}

export default Home;