import React, {Component} from 'react';
import BackButton from '../components/BackButton';

class LightingTest extends Component {
    render() {
        return (
            <>
                <div className="page-header">
                    <ul className="header-items">
                        <BackButton />
                    </ul>
                </div>
                <div className="page-title">
                    <h2>Lighting Test</h2>
                </div>
                <div id="cine1-video">
                    <video src="https://seubsworld-assets.s3.amazonaws.com/assets/final.mp4" controls />
                </div>
                <div className="page-content">
                    <p>
                    This is a lighting test that I did for a Post Production class I took
                    in film school. The idea is to film the same subject at the same angle
                    with both 16mm film and digital video. The subject is filmed at various
                    f-stops with both cameras for the purpose of seeing how the exposure of
                    the subject changes under different conditions. Not very impressive,
                    but I spent a lot of time on it so here it is.
                    </p>
                </div>
            </>
        )
    }
}

export default LightingTest;