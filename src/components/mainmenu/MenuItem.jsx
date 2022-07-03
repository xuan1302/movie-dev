import React from 'react';
import { NavLink } from 'react-router-dom';
function MenuItem({ href, text }) {
    return (
        <li className="item">
            <NavLink to={href} >{text}</NavLink>
        </li>
    );
}

export default MenuItem; 