import React, {Component} from 'react';

class Cine1 extends Component {
    render() {
        return (
            <>
                <div className="page-header">
                    <ul className="header-items">
                        <li className="header-back-button"><a href="/"><button className="back-button">&#8592; back</button></a></li>
                        <li><p className="header-title">The Enforcer</p></li>
                        <li className="question-modal"><button className="modal-button">?</button></li>
                    </ul>
                </div>
                <div className="page-title">
                    <h2>Cinematography Footage</h2>
                </div>
                <div id="cine1-video">
                    <video src="https://seubsworld-assets.s3.amazonaws.com/assets/cine1-broll.mp4" controls />
                </div>
                <div className="page-content">
                    <p>
                    Just some random footage that I shot from some left over rolls of
                    16mm black and white film from my Cinematorgaphy 1 class. Nothing
                    special really and there’s some shaking because the digital transfer
                    wasn’t done correctly, but I spent a lot of time shooting and editing
                    the film so here it is.
                    </p>
                </div>
            </>
        )
    }
}

export default Cine1;