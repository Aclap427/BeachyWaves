import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div id="contact">
            <p> Contact Page</p>
            <div id="form">
                <form name="form" action="mailto:amandaurquidi427@gmail.com" enctype="text/plain" method="POST">
                    <p><b>Name:</b><input TYPE="TEXT" SIZE="16" NAME="Clients Name"></input></p>
                        <p><b>Phone:</b> <input TYPE="TEXT" SIZE="16" NAME="Clients Phone"></input></p>
                            <p><b>Message:</b> <input TYPE="TEXT" SIZE="16" NAME="Clients Message"></input></p>
                            <p><input TYPE="SUBMIT" VALUE="Submit"></input></p>


                   
                </form>
            </div>
        </div>
    )
};

export default Contact;