import React, {Component} from 'react';

class SoundVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1
        }
    }

    render() {
        return (
            <>
                <div id="av-container" class="project-container">
                        <ul class="apps-list">
                            <li>
                                <a href="/omegaman">
                                <div class="project-card">
                                    <img class="project-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/omega-man-large.jpg" />
                                    <div class="project-card-heading">
                                        <p class="project-card-title">The Omega Man</p>
                                    </div>
                                </div>
                                </a>
                            </li>
                            <li>
                                <div class="project-card">
                                    <a href="/lightingtest">
                                        <img class="project-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/lighting-test.png" />
                                    </a>
                                    <div class="project-card-heading">
                                        <p class="project-card-title">Lighting Test</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="project-card">
                                    <a href="/cine1">
                                        <img class="project-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/cine1-broll.png" />
                                    </a>
                                    <div class="project-card-heading">
                                        <p class="project-card-title">Cinematography Footage</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            </>
        )
    }
}

export default SoundVideo;