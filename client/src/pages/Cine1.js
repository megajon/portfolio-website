import React, {Component} from 'react';
import BackButton from '../components/BackButton';

class Cine1 extends Component {
    render() {
        return (
            <>
                <div className="page-header">
                    <ul className="header-items">
                        <BackButton href="/" class="project-back" />
                    </ul>
                </div>
                <div className="page-title">
                    <h2>Cinematography Footage</h2>
                </div>
                <div className="project-image-div">
                    <video className="project-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/cine1-broll.mp4" controls />
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