import React, {Component} from 'react';
import ImageSection from './ImageSection';
import Story from './Story';
import Work from './Work';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Header from './Header';
import ArtGallery from './ArtGallery';

class Page extends Component {
    state = {
        showGallery: false
    }
    closeGallery = ()=>{
        this.setState({showGallery: false});
    }    
    showGallery = ()=>{
        this.setState({showGallery: true});
    }
    render() {
        return (
            <div className="page">
                <Header />
                {this.state.showGallery ? <ArtGallery closeGallery={this.closeGallery}/> : null}
                <ImageSection />
                <Story />
                <Work showGallery={this.showGallery}/>
                <Skills />
                <Testimonials />
                <Contact />
            </div>
        );
    }
}

export default Page;