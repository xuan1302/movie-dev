import React from 'react';
import { useHistory } from 'react-router-dom';
import { apiConfig } from '../../api/moviesApi';


function HomeSlideItem(props) {
    let hisrory = useHistory();

    const item = props.item;
    const background = apiConfig.originalImage(
        item.backdrop_path ? item.backdrop_path : item.poster_path
    );
    return (
        <div
            className={`home-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="home-slide__item__content container">
                <div className="home-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <button className='btn-watch-now'
                            onClick={() => hisrory.push('/movie/' + item.id)}
                        >
                            Watch now
                        </button>
                        <button className='btn-watch-trailer' >Watch trailer</button>
                    </div>
                </div>
                <div className="home-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomeSlideItem;