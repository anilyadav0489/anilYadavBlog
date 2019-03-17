import React, {Component} from 'react';
import islandSnap from '../resources/island-snap.jpg';
import rosterSnap from '../resources/roster-snap.jpg';
import artGallery from '../resources/artGallery.jpg';
class Work extends Component {
    showGallery = ()=>{
        this.props.showGallery();
    }
    render() {
        return (
            <div id="work-section" className="work-section">
            <div className="projects-box">
                    <div className="projects-heading"><span>Featured Projects</span></div>
                    <div className="projects">
                        <div className="project"><span>Game: Grab The Max</span>
                            <a href="https://grab-the-max.herokuapp.com/" target="_blank">
                                <img src={islandSnap} alt="" className="project-image"/>
                            </a>
                        </div>
                        <div className="project"><span>Web: The Excel Way</span>
                            <a href="https://sheltered-basin-39570.herokuapp.com/" target="_blank">
                                <img src={rosterSnap} alt="" className="project-image"/>
                            </a>
                        </div>
                        <div className="project"><span>My Art Collection</span>
                            <img src={artGallery} alt="" onClick={this.showGallery} className="project-image"/>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Work;