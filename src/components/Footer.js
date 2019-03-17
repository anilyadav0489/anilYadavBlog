import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-section">
                <div className="content-box">
                    <div className="name">Anil Yadav</div>
                    <div className="contact-number">+91-84597-32047</div>
                    <div className="email"><a href="mailto:JustAnotherAnil@gmail.com">JustAnotherAnil@gmail.com</a></div>
                    <div className="linkedIn"><a href="https://www.linkedin.com/in/anil-yadav-53b67333/" target="_blank">Anil Yadav @ LinkedIn</a></div>
                </div>
            </div>
        );
    }
}

export default Footer;