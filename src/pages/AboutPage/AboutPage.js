import React from 'react';
import './AboutPage.css';
import About from '../../components/About/About';

function AboutPage() {
    return (
        <>
            <div id="aboutTitle">
                <p>About Beachy Waves</p>
            </div>

            <About />


            <div id="sideInfo">
                <img src="https://i.imgur.com/dFEiYWK.jpg?1" alt="salon owner Alexa" id="owner"></img>
                <p id="sideText">
                    <strong>-Beachy Waves Hair Salon-</strong><br/>
                    1500 East Broadway<br/>
                    Long Beach, CA 90802 <br />
                    (626) 825 - 9711
                </p>

            </div>
        </>

       
    )
};

export default AboutPage;