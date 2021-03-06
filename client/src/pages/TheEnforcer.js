import React, {Component} from 'react';
import BackButton from '../components/BackButton';
import DownloadPDF from '../components/DownloadPDF';

class TheEnforcer extends Component {
    render() {
        return (
            <>
                <div className="page-header">
                    <ul className="header-items">
                        <BackButton class="project-back-pdf" href="/" url="https://seubsworld-assets.s3.amazonaws.com/assets/enforcer.pdf" />
                        <DownloadPDF url="https://seubsworld-assets.s3.amazonaws.com/assets/enforcer.pdf" />
                    </ul>
                </div>
                <div className="page-title">
                    <h2>The Enforcer:</h2>
                    <h2>A Short Screenplay</h2>
                </div>
                <div className="project-image-div">
                    <img className="project-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/parking-meters.jpg" />
                </div>
    
                <div className="page-content">
                    <p id="enforcer-p">
                    The Enforcer is the story of Trevor, an unemployed young man living in
                    San Francisco. Rapidly running low on funds, Trevor wakes up one morning
                    and prepares for an important interview downtown. He showers, shaves,
                    and picks the perfect outfit before he gets in his car and drives off to
                    the interview. When he arrives at the building downtown he realizes that
                    he only has a few quarters to plug the parking meter, which will only get
                    him about twenty minutes. Unable to secure change at local stores and
                    fearing he will be late for his interview, Trevor decides to attend
                    his interview with only a few minutes on the meter. Tensions rise
                    as Trevor enters his interview.
                    </p>
                    <br></br>
                </div>
            </>
        )
    }
}

export default TheEnforcer;