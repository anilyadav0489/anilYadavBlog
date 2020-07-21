import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="contact-section" className="contact-section">
                <div className="contact-box">
                    <div className="contact-heading"><span>Reach Me At</span></div>
                        <div className="contact-details">
                            <div>E-Mail: <a href="mailto:JustAnotherAnil@gmail.com">JustAnotherAnil@gmail.com</a></div>
                            <div>Mobile: +91-96431-36238</div>
                            <div>LinkedIn: <a href="https://www.linkedin.com/in/anil-yadav-53b67333/" target="_blank">https://www.linkedin.com/in/anil-yadav-53b67333/</a></div>
                            <div>GitHub: <a href="https://github.com/anilyadav0489" target="_blank">https://github.com/anilyadav0489</a></div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Contact;