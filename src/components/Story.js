import React, {Component} from 'react';
import myPic from '../resources/ANIL.JPG'

class Story extends Component {
    render() {
        return (
            <div id="story-section" className="story-section">
                <div className="text-section">
                    <span className="text-section-title">My Story</span>
                    <span>sdfsdlkflskdflkjsdlfkjldjflksdljfklskdjflksdlkfjlskdfjlksdjflksjdlfksjlkd
                    fjlskdjflskdjflksjdlfksjdlkfjsldkfjlskdfjlskdjflksdjflkjdlfksjdlkfjlskdfjlks
                    fjlskdjflskdjflksjdlfksjdlkfjsldkfjlskdfjlskdjflksdjflkjdlfksjdlkfjlskdfjlks
                    fjlskdjflskdjflksjdlfksjdlkfjsldkfjlskdfjlskdjflksdjflkjdlfksjdlkfjlskdfjlks
                    fjlskdjflskdjflksjdlfksjdlkfjsldkfjlskdfjlskdjflksdjflkjdlfksjdlkfjlskdfjlks
                    fjlskdjflskdjflksjdlfksjdlkfjsldkfjlskdfjlskdjflksdjflkjdlfksjdlkfjlskdfjlks
                    fjlskdjflskdjflksjdlfksjdlkfjsldkfjlskdfjlskdjflksdjflkjdlfksjdlkfjlskdfjlks
                        djflksdjflksjdlfksjdlfksjldfksjldkfjlsdkflskdfjlskdfjlskdjflskdjflskdfjlskdj
                        flskdfjlskdfjlskdfjl</span>
                </div>
                <div className="story-image-container">
                    <img src={myPic} alt="" />                
                </div>
            </div>
        );
    }
}

export default Story;