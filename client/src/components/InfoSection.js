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
                        <a id="mail-icon"><i class="fas fa-envelope"></i></a>
                        <a id="cv-icon">CV</a>
                    </div>
                    <div id="copyright"><p>&#169; Jonathan C. Seubert 2020</p></div>
                </div>
                
            </>
        )
    }
}

export default InfoSection;