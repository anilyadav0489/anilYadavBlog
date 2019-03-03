import React, {Component} from 'react';
import AtalVajpayee from '../resources/AtalVajpayee.jpg'
import Anil1 from '../resources/Name-Anil1.jpg'
import Anil2 from '../resources/Name-Anil2.jpg'

class ArtGallery extends Component {
    constructor(props){
        super(props);
        this.currentImage = AtalVajpayee;
        this.state={currentImage: this.currentImage};
        this.startCorousal = setInterval(() => {
            this.changeImage();
        }, 2000);
    }

    changeImage=()=>{
        console.log(typeof this.currentImage);
        if(this.currentImage === null || this.currentImage.includes('Anil2')){
            this.currentImage = AtalVajpayee;
        } else if(this.currentImage.includes('AtalVajpayee')){
            this.currentImage = Anil1;
        } else if(this.currentImage.includes('Anil1')){
            this.currentImage = Anil2;
        }
        this.setState({currentImage: this.currentImage});
    }
    componentDidMount(){

    }

    closeGallery = ()=>{
        this.props.closeGallery();
    }
    componentWillUnmount(){
        clearInterval(this.startCorousal);
    }
    render() {
        return (
            <div className="gallery-section">
                <span><input type="button" onClick={this.closeGallery} className="close-button" value="X" /></span>
                <div className="gallery-image-container">
                    <img src={this.state.currentImage} alt="Gallery images" className="galary-image"/>                
                </div>
            </div>
        );
    }
}

export default ArtGallery;