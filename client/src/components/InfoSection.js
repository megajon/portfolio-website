import React, {Component} from 'react';

class InfoSection extends Component {
    render() {
        return (
            <>
                <div id="info-section" className="section">
                    <div id="social-media-links1">
                        <a><i class="fab fa-linkedin"></i></a>
                        <a><i class="fab fa-github"></i></a>
                        <a><i class="fab fa-facebook-square"></i></a>
                        <a><i class="fab fa-twitter"></i></a>
                    </div>
                    <div id="social-media-links2">
                        <div id="mail-cv-container">
                        <a id="mail-icon"><i class="fas fa-envelope"></i></a>
                        <a id="cv-icon"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default InfoSection;