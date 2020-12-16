import React from 'react';
import './About.css';
import SocialMedia from '../SocialMedia/SocialMedia';


function About() {

    return (
    <div id="mainAboutSection">

        <p id="aboutInfo">
            Welcome! Meet Alexa. She is the proud owner of Beachy Waves Hair Salon. 
            Alexa has been in the hair industry since 2007,
            and finally took a chance to open her own salon in 2020!
            She has had such a fun time transforming the
            building and shaping her company to fit her own unique vision. It's still a work in
            progress and Covid has thrown a wrench in her plans at times,
            but it's still coming together beautifully due to her
            determination and overall badassery. <br />
            <br />
            To keep up with the latest improvements, Covid changes
            and of course to see Alexa's latest masterpieces, follow the salon
            at <br /><br />
        </p>

            <div id="socialMediaDiv">
                <SocialMedia />
            </div>
            
            <div id="salonImages">
                <img src="https://i.imgur.com/6ef0BhK.jpg?1" alt="salon inside" className="salonImg"></img>
                <img src="https://i.imgur.com/gdwNGKb.jpg?1" alt="salon inside"className="salonImg"></img>
            </div>

        </div>
    )

}

export default About;