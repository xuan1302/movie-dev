import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../mainmenu/Menu';
import '../../asset/style/header.scss';
import logo from '../../asset/images/tmovie.png';

function Header(props) {
    const headerRef = useRef(null);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);
    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">tMovies</Link>
                </div>
                <Menu />
            </div>
        </div>
    );
}

export default Header;