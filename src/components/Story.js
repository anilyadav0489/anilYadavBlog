import React, {Component} from 'react';
import myPic from '../resources/Anil.JPG'

class Story extends Component {
    render() {
        return (
            <div id="story-section" className="story-section">
                <div className="text-section">
                    <span className="text-section-title about-myself">
                        <span>A</span><span>B</span><span>O</span><span>U</span><span>T</span><span className="space"> </span>
                        <span>M</span><span>E</span>
                    </span>
                    <span className="story-content">A software developer by profession, a kind human by nature,
                    and an artist by choice, this is what I feel I am. 
                    Too much praise for self, huhh.
                    No, but honestly, computers and art is something which drives my life. 
                    Having a background of defence family, discipline in work and life is also crucial for me.
                    
                    <br/><br/>I started my IT career in Syntel after going through a beautiful journey of schooling
                    from Kendriya Vidyalayas. Initially the pencil sketchs, and now the CSS animations,
                    these two together define my passion. Having a hard time working for UI in my early career days,
                    I thought of overcoming my fear and came up as a front-end developer.
                    <br/>
                    Throughout my career, I have pursued both professional and personal growth by continually
                     taking on projects of increasing complexity and organizational impact.
                     I have received numerous performance awards/recognitions for my dedication, integrity, 
                     hard work, and results. Currently I am emloyed with Cognizant, India and working as a UI specialist.
                    React JS and Javascript are the key technologies I am equipped with.
                    <br/><br/>
                    If you’d like more information about my professional or academic history, 
                    or if you’d like to discuss future opportunities, please get in touch!

                    </span>
                </div>
                <div className="story-image-container">
                    <img src={myPic} alt="" className="my-pic"/>                
                </div>
            </div>
        );
    }
}

export default Story;