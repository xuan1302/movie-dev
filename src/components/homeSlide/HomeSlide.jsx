import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import './homeSlide.scss';
import { useHistory } from 'react-router';
import movieApi, { apiConfig } from '../../api/moviesApi';
import { category, tvType } from '../../constantsMovie';
import HomeSlideItem from './HomeSlideItem';

const HomeSlide = () => {

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await movieApi.getMoviesList(tvType.popular, { params });
                setMovieItems(response.results.slice(1, 6));
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);


    return (
        <div className="home-slide">
            <Swiper
                loop={true}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {movieItems.length > 0 && movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <HomeSlideItem
                                item={item}
                                className={`${isActive ? 'active' : ''}`}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* {
                movieItems.map((item, i) => <TrailerModal key={i} item={item} />)
            } */}
        </div>
    );
}

// const TrailerModal = props => {
//     const item = props.item;

//     const iframeRef = useRef(null);

//     const onClose = () => iframeRef.current.setAttribute('src', '');

//     return (
//         <Modal active={false} id={`modal_${item.id}`}>
//             <ModalContent onClose={onClose}>
//                 <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
//             </ModalContent>
//         </Modal>
//     )
// }

export default HomeSlide;
