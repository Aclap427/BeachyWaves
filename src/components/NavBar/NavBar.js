import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';



function NavBar() {
 

    return (
        <>
         <div class="dropdown">
            <button onclick><img src="https://i.imgur.com/pWjPwnE.jpg" alt ="nav button" className="navBtn"></img></button>
                <div className="dropdown-content">
                    <Link to='/'className="link">Home</Link><br/>
                    <Link to='/About' className="link">About</Link><br/>
                    <Link to='Stylists' className="link">Stylists</Link><br/>
                    <Link to='Services'className="link">Services</Link><br/>
                    <Link to='GlamWall' className="link">Glam Wall</Link><br/>
                    <Link to='Contact' className="link">Contact</Link>
                </div>
         </div>
        </>
        
    )
}

export default NavBar;