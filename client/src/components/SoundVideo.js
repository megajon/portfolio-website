import React, {Component} from 'react';

class SoundVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1
        }
        // this.scrollToProfile = this.scrollToProfile.bind(this);
        // this.scrollToWork = this.scrollToWork.bind(this);
        // this.scrollToInfo = this.scrollToInfo.bind(this);
        // this.slideForward = this.slideForward.bind(this);
        // this.slideBackward = this.slideBackward.bind(this);

    }

    // componentWillMount() {
    //     const renderSlides = async () => {
    //         let slides = await document.getElementsByClassName("sound-video-panel");
    //         for (let i = 0; i < slides.length; i++) {
    //             slides[i].style.display = "none";
    //         }
    //         slides[0].style.display = "block";
            
    //     }
    //     renderSlides();
    // }


    // scrollToProfile = (e) => {
    //     e.preventDefault();
    //     document.querySelector('#section1-break').scrollIntoView({ behavior: 'smooth' });
    // }

    // scrollToWork = (e) => {
    //     e.preventDefault();
    //     document.querySelector('#section2-break').scrollIntoView({ behavior: 'smooth' });
    // }

    // scrollToInfo = (e) => {
    //     e.preventDefault();
    //     document.querySelector('#section3-break').scrollIntoView({ behavior: 'smooth' });
    // }

    

    // currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    // showSlides = async (n) =>  {
    //     let i;
    //     let slides = await document.getElementsByClassName("sound-video-panel");
    //     if (n > slides.length) {await this.setState({slideIndex: 1})}
    //     if (n < 1) {this.setState({slideIndex: slides.length})}
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }

    //     slides[this.state.slideIndex - 1].style.display = "block";
    // }

    // slideForward = (e, n = 1) => {
    //     e.preventDefault()
    //     console.log("slide forward");
    //     this.showSlides(this.state.slideIndex += n);
    // }

    // slideBackward = (e, n = -1) => {
    //     e.preventDefault()
    //     console.log("slide backward");
    //     console.log("From plusSlides - n: " + n);
    //     this.showSlides(this.state.slideIndex += n);
    // }

    render() {
        return (
            <>
                <div className="section-title">
                    <h1>Sound & Video</h1>
                </div>
                <a href="/omegaman">
                    <div id="omega-man-link" className="project-link">
                        <img id="omega-man-image" className="project-link-img" src="https://seubsworld-assets.s3.amazonaws.com/assets/the-omega-man.jpg" width="100%" />
                        <p className="link-title">The Omega Man - Sound Experience</p>
                    </div>
                </a>
                
                <br></br>
                <a href="/lightingtest">
                    <div id="lighting-test-link" className="project-link">
                        <img id="lighting-test-image" className="project-link-img" src="https://seubsworld-assets.s3.amazonaws.com/assets/parking-meters.jpg" width="100%" />
                        <p className="link-title">Digital Video Lighting Test</p>
                    </div>
                </a>
                <br></br>
                <a href="/cine1">
                    <div id="cine1-link" className="project-link">
                        <img id="cine1-image" className="project-link-img" src="https://seubsworld-assets.s3.amazonaws.com/assets/cine1-broll.png" width="100%" />
                        <p className="link-title">Cinematography 101 Footage</p>
                    </div>
                </a>
            </>
        )
    }
}

export default SoundVideo;