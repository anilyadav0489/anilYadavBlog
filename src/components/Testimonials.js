import React, {Component} from 'react';
import testimonialBackground from '../resources/testimonialBackground.jpg'
import testimonyWriter1 from '../resources/Testimony-writer-1.jpg';
import testimonyWriter2 from '../resources/Testimony-writer-2.jpg';
class Testimonials extends Component {
    testimonials = [{writer: testimonyWriter1, comments: `I have had the opportunity and pleasure 
    to work with Anil in his capacity as a core UI developer and technical leader for the offshore team. 
    Anil has demonstrated a rigorous adherence to our needs, protocols and procedures. 
    As an astute emerging computer engineer, his natural inquisitiveness and attention to detail has
    led to a range of process improvements and technical modifications to our project. 
    Our whole team has benefited from Anil's technical expertise, and professionalism.`, name: 'Gautam Vankani, Engagement Manager at FedEx (Memphis)'},
        
    {writer: testimonyWriter2, comments: `It's exciting to work with Anil as the task assigned to him
    are always the ones which had gone through lot of hands but still remained unsolved. Be it a frontend
    task or the backend, if it has reached Anil's bucket, it's gonna be accomplished soon. His technical 
    expertise on UI and enthusiasm to bring something new, makes him the favorite of all. We at FedEx
    are delightful to work with him.`, name: 'Himali Kumar, Technology Leader at FedEx'}];
    state = {currentTestimony: this.testimonials[0], nextTestimony: this.testimonials[1]};
    reoccur = null;

    componentDidMount(){
        let index = 0;
        let nextIndex = 1;
        this.reoccur = setInterval(()=>{
            index = index === this.testimonials.length - 1 ? 0 : index + 1;
            nextIndex = index === this.testimonials.length - 1 ? 0 : index + 1;
            this.keepChangingTestimony(index, nextIndex);
        }, 5000);
    }

    

    keepChangingTestimony = (index, nextIndex)=>{
        this.setState({
            currentTestimony: this.testimonials[index], 
            nextTestimony: this.testimonials[nextIndex]});
    }

    componentWillUnmount(){
        clearInterval(this.reoccur);
    }
    getStyle = (index)=>{
        return ({
            'animation': 'move-left 5s infinite'
        });
    }
    
    render() {
        return (
            <div id="testimonials-section" className="testimonials-section">
                <div className="testimony-content-box">
                    <div className="testimonials-heading"><span>Testimonials</span></div>
                    <div className="testimonials">
                    {this.testimonials.map((testimony, index)=>{
                        return (<div className="testimony" style={this.getStyle(index)}>
                            <div ><img src={this.state.currentTestimony.writer} className="testimony-writer-image" alt="writer" /></div>
                            <div className="testimony-content">{this.state.currentTestimony.comments}</div>
                            <div className="testimony-author-info">{this.state.currentTestimony.name}</div>
                        </div>);
                    })}
                    </div>

                </div>
            </div>
        );
    }
}

export default Testimonials;