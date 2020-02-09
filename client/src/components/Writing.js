import React, {Component} from 'react';

class Writing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div id="writing-container" class="project-container">
                        <ul class="apps-list">
                            <li>
                                <a href="/john-brown">
                                <div class="project-card">
                                    <img class="project-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/main_middle.jpg" />
                                    <div class="project-card-heading">
                                        <p class="project-card-title">Project Title</p>
                                    </div>
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="/enforcer">
                                    <div class="project-card">
                                        <img class="project-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/parking-meters.jpg" />
                                        <div class="project-card-heading">
                                            <p class="project-card-title">Project Title</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </div>
            </>
        )
    }
    
}

export default Writing;