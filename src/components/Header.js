import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-section">
                <div className="header-left">
                    <span>Anil Yadav</span>
                </div>
                
                <div className="header-right">
                    <span><a href="#story-section">About</a></span>
                    <span><a href="#skills-section">Skills</a></span>
                    <span><a href="#work-section">Work</a></span>
                    <span><a href="#testimonials-section">Testimonials</a></span>
                    <span><a href="#contact-section">Contact</a></span>
                    <span><a href="https://anil-yadav-resume.herokuapp.com" target="_blank">Resume</a></span>
                </div>
            </div>
        );
    }
}

export default Header;