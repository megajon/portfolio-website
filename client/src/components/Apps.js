import React, {Component} from 'react';

class Apps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1
        }
    }

    render() {
        return (
            <>
                <div id="apps-container" class="project-container">
                        <ul class="apps-list">
                            <li>
                                <a href="/stocktwits">
                                <div class="project-card">
                                    <img class="project-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/markus-spiske-3Tf1J8q9bBA-unsplash.jpg" />
                                    <div class="project-card-heading">
                                        <p class="project-card-title">Search Stocktwits</p>
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

export default Apps;