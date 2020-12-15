import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';


function Header() {
    return (
        <div id="header">
            <h1>Beachy Waves Hair Salon</h1>
       
            <p id="city"> Long Beach, CA </p>
       <div id="nav"><NavBar /></div>
        </div>
    )
}
export default Header;