import React from 'react';
import instagram from './images/instagram.png';
import styleseat from './images/styleseat.jpg';
import './SocialMedia.css';
//import yelp from '../images/yelp.png';


const SocialMedia = () => (

     <>
        <a href="https://www.instagram.com/hairbyalexa/" className="socialMedia"><img alt="instagram" src={instagram} target="_blank" className="socialMedia"></img>hairbyalexa</a><br/>
        <a href="https://www.instagram.com/beachy.waves.salon/" className="socialMedia"><img alt="instagram" src={instagram} target="_blank" className="socialMedia"></img>beachy.waves.salon</a><br/><br/>
        <p> To read reviews or request an appointment, visit Style Seat below...</p>
        <a href="https://www.styleseat.com/m/v/hairbyalexa" className="socialMedia"><img alt="styleseat" src={styleseat} target="_blank" className="socialMedia"></img>StyleSeat</a>
     </>
)
export default SocialMedia;