import React, {Component} from 'react';
import testimonialBackground from '../resources/testimonialBackground.jpg'
import testimonyWriter1 from '../resources/Testimony-writer-1.jpg';
import testimonyWriter2 from '../resources/Testimony-writer-2.jpg';
class Testimonials extends Component {
    testimonials = [{writer: testimonyWriter1, comments: 'He is too good', name: 'Himali'},
                    {writer: testimonyWriter2, comments: 'lksjdfljsldfgood', name: 'Himali Jain'}];
    state = {currentTestimony: this.testimonials[1]};
    reoccur = null;

    componentDidMount(){
        let index = -1;
        this.reoccur = setInterval(()=>{
            index = index === this.testimonials.length - 1 ? 0 : index + 1;
            this.keepChangingTestimony(index);
        }, 2000);
    }

    keepChangingTestimony = (index)=>{
        this.setState({currentTestimony: this.testimonials[index]});
    }

    componentWillUnmount(){
        clearInterval(this.reoccur);
    }
    render() {
        return (
            <div id="testimonials-section" className="testimonials-section">
                <img src={testimonialBackground} alt="" className="testimonial-background-image"/>
                <div className="testimony-content-box">
                    <div >
                        <img src={this.state.currentTestimony.writer} className="testimony-writer-image" alt="writer" />
                    </div>
                    <div className="testimony-content">{this.state.currentTestimony.comments}</div>
                    <div className="testimony-author-info">{this.state.currentTestimony.name}</div>
                </div>
            </div>
        );
    }
}

export default Testimonials;