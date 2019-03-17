import React, { Component } from 'react';
import backgroundImage1 from '../resources/Background1.jpg'
import backgroundImage2 from '../resources/Background2.jpg'

class ImageSection extends Component {
    
    render() {
        return (
            <div id="image-section" className="image-section">
                <div className="image-container">
                    <img src={backgroundImage2} alt="" className="fixed-image"/>
                    <img src={backgroundImage1} alt="" className="changing-image"/>
                </div>
            </div>
        );
    }
}

export default ImageSection;