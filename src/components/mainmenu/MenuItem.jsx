import React from 'react';
import { Link } from 'react-router-dom';
function MenuItem({ href, text, active }) {
    return (
        <li className="item">
            <Link className={active} to={href}>{text}</Link>
        </li>
    );
}

export default MenuItem; 