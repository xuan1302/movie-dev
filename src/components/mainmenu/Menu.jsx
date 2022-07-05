import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';

function Menu(props) {
    const menuItems = [
        {
            href: "/",
            text: "Home"
        },
        {
            href: "/movie",
            text: "Movie"
        },
        {
            href: "/tv",
            text: "TvSeries"
        },
    ]
    const { pathname } = useLocation();
    const active = menuItems.findIndex((e) => e.href === pathname);
    return (
        <ul className="header__nav">
            {menuItems.map(({ href, text }, index) => (
                <MenuItem key={index} href={href} text={text} active={index === active ? 'active': ''} />
            ))}
        </ul>
    );
}

export default Menu;