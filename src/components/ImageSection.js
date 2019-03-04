import React, { Component } from 'react';
import backgroundImage1 from '../resources/image-section-background.png'
import backgroundImage2 from '../resources/runningOnTheBeach.jpg'

class ImageSection extends Component {
    bgImages = [backgroundImage1, backgroundImage2];
    state = { currentImage: this.bgImages[0], index: 0 };
    reoccur = null;

    componentDidMount() {
        let index = -1;
        this.reoccur = setInterval(() => {
            index = index === this.bgImages.length - 1 ? 0 : index + 1;
            this.keepChangingBackground(index);
        }, 4000);
    }

    keepChangingBackground = (index) => {
        if(index){
            this.setState({ bgStyle1:'show', bgStyle2: 'hide', index });
        } else {
            this.setState({ bgStyle1:'hide', bgStyle2: 'show', index });
        }
    }

    componentWillUnmount() {
        clearInterval(this.reoccur);
    }


    render() {
        return (
            <div id="image-section" className="image-section">
                <div className="image-container">
                    {this.state.index ? <img src={backgroundImage1} alt="" className={this.state.bgStyle1}/>: null}
                    {this.state.index === 0 ? <img src={backgroundImage2} alt="" className={this.state.bgStyle2}/>: null}
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