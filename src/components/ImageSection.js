import React, { Component } from 'react';
import backgroundImage1 from '../resources/image-section-background.png'
import backgroundImage2 from '../resources/runningOnTheBeach.jpg'

class ImageSection extends Component {
    
    render() {
        return (
            <div id="image-section" className="image-section">
                <div className="image-container">
                    <img src={backgroundImage2} alt="" className="fixed-image"/>
                    <img src={backgroundImage1} alt="" className="changing-image"/>
                </div>
                <div className="my-name">
                    <span>A</span>
                    <span>N</span>
                    <span>I</span>
                    <span>L</span>
                </div>
            </div>
        );
    }
}

export default ImageSection;