import React, {Component} from 'react';

class InfoSection extends Component {
    render() {
        return (
            <>
                <div id="info-section" className="section">
                    <div id="social-media-links1">
                        <a id="linkedin" href="https://www.linkedin.com/in/jonathan-seubert/"><i class="fab fa-linkedin"></i></a>
                        <a id="github" href="https://github.com/megajon"><i class="fab fa-github"></i></a>
                        <a id="facebook" href="https://www.facebook.com/jonathan.seubert"><i class="fab fa-facebook-square"></i></a>
                        <a id="twitter" href="https://twitter.com/JSeubs"><i class="fab fa-twitter"></i></a>
                    </div>
                    <div id="social-media-links2">
                        <a id="mail-icon" href="mailto:jonathan.seubert@megajon.com"><i class="fas fa-envelope"></i></a>
                        <a href="https://seubsworld-assets.s3.amazonaws.com/assets/JonathanSeubert_Resume.pdf" id="cv-icon">CV</a>
                    </div>
                    <div id="copyright"><p>&#169; Jonathan C. Seubert 2020</p></div>
                </div>
                
            </>
        )
    }
}

export default InfoSection;