import React, {Component} from 'react';

class OmegaMan extends Component {
    render() {
        return (
            <>
                <div className="page-header">
                    <ul className="header-items">
                        <li className="header-back-button"><a href="/"><button className="back-button">&#8592; back</button></a></li>
                        <li><p className="header-title">The Omega Man</p></li>
                        <li className="question-modal"><button className="modal-button">?</button></li>
                    </ul>
                </div>
                <div class="page-title">
                    <h2>The Omega Man:</h2>
                    <h2>A Sound Experience</h2>
                </div>
                <div id="omega-man-audio">
                    <video src="https://seubsworld-assets.s3.amazonaws.com/assets/Omega_Man_Rough+5.mp3" controls />
                </div>
            </>
        )
    }
}

export default OmegaMan;