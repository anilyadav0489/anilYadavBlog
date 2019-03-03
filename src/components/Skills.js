import React, {Component} from 'react';

class Skills extends Component {
    render() {
        return (
            <div id="skills-section" className="skills-section">
                <div className="skills-box">
                    <div className="skills-heading">Skills</div>
                    <div className="skills">
                        <div className="skill">React JS, Redux</div>
                        <div className="skill-bar-1">80%</div>
                        <div className="skill">Javascript, NodeJS</div>
                        <div className="skill-bar-2">80%</div>
                        <div className="skill">HTML, CSS</div>
                        <div className="skill-bar-3">70%</div>
                        <div className="skill">JAVA</div>
                        <div className="skill-bar-4">60%</div>
                        <div className="skill">Git Hub, SVN</div>
                        <div className="skill-bar-5">50%</div>
                        <div className="skill">Agile, Waterfall</div>
                        <div className="skill-bar-6">50%</div>
                        <div className="skill">AWS</div>
                        <div className="skill-bar-7">30%</div>
                        <div className="skill">UNIX</div>
                        <div className="skill-bar-8">30%</div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Skills;