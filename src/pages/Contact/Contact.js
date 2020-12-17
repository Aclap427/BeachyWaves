import React from 'react';
import './Contact.css';
import ContactForm from '/Users/amanda/Desktop/beachy-waves/src/components/ContactForm.js/ContactForm.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
    return (
        <div id="contact">
            <div id="contactBackground">
                <img src="https://i.imgur.com/ld5lOv2.jpg?1" alt="background"></img>
            </div>


            <p id="contactTitle"> Contact Page</p>
                 <ContactForm />
        </div>
    )
};

export default Contact;