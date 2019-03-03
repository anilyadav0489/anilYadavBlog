import React, {Component} from 'react';
import ImageSection from './ImageSection';
import Story from './Story';
import Work from './Work';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Header from './Header';

class Page extends Component {
    render() {
        return (
            <div className="page">
                <Header />
                <ImageSection />
                <Story />
                <Work />
                <Skills />
                <Testimonials />
                <Contact />
            </div>
        );
    }
}

export default Page;