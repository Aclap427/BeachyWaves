import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <>
            <ul id="Nav">
                <li><Link to='/'>Home</Link> &nbsp; &nbsp; | &nbsp; </li>
                <li><Link to='/About'>About</Link> &nbsp; &nbsp;| &nbsp; </li>
                <li><Link to='Stylists'>Stylists</Link> &nbsp; &nbsp;| &nbsp; </li>
                <li><Link to='Services'>Services</Link>  &nbsp; &nbsp; | &nbsp;</li>
                <li><Link to='GlamWall'>Glam Wall</Link> &nbsp; &nbsp; | &nbsp; </li>
                <li><Link to='Contact'>Contact</Link></li>
            </ul>
        </>
    )
}

export default NavBar;