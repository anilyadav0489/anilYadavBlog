import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="contact-section" className="contact-section">
                <div className="contact-box">
                    <div className="contact-heading"><span>Get In Touch</span></div>
                    <div className="contact-form">
                        <div className="contact-details">
                            <input type="text" placeholder="Your Name"></input>
                            <input type="text" placeholder="Your Email"></input>
                            <input type="text" placeholder="Subject"></input>
                        </div>
                        <div className="contact-details-message">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div className="contact-footer">
                            <input type="button" className="send-mail" value="Send email"></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;