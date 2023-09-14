import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.css"

export const Header = () => {
    return(
        <div id="header">
            <Link to='/'>Top</Link>
            <center>
                <h1>Super Discount Bros.</h1>
            </center>
        </div>
    )
}