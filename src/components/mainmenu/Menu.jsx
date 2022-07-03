import React from 'react';
import MenuItem from './MenuItem';

function Menu(props) {
    const menuItems = [
        {
            href: "/",
            text: "Home"
        },
        {
            href: "movie",
            text: "Movie"
        },
        {
            href: "/tv",
            text: "TvSeries"
        },
    ]
    return (
        <ul className="header__nav">
            {
                menuItems.map(({ href, text }, index) => <MenuItem key={index} href={href} text={text} />)
            }
        </ul>
    );
}

export default Menu;