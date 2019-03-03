import React, {Component} from 'react';
import backgroundImage from '../resources/image-section-background.png'

class ImageSection extends Component {
    render() {
        return (
            <div id="image-section" className="image-section">
                <div className="image-container">
                    <img src={backgroundImage} alt=""/>
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