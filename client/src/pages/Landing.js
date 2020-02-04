import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom';
import ProjectSecton from '../components/ProjectSection'
import InfoSection from '../components/InfoSection';
import Apps from '../components/Apps';
import Writing from '../components/Writing';
import SoundVideo from '../components/SoundVideo';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1
        }
        this.scrollToProfile = this.scrollToProfile.bind(this);
        this.scrollToWork = this.scrollToWork.bind(this);
        this.scrollToInfo = this.scrollToInfo.bind(this);
        this.slideForward = this.slideForward.bind(this);
        this.slideBackward = this.slideBackward.bind(this);

    }

    // componentWillMount() {
    //     const renderSlides = async () => {
    //         let slides = await document.getElementsByClassName("app-panel");
    //         for (let i = 0; i < slides.length; i++) {
    //             slides[i].style.display = "none";
    //         }
    //         slides[0].style.display = "block";
    //         slides[this.state.slideIndex].style.background = "silver";
    //     }
    //     renderSlides();
    // }


    scrollToProfile = (e) => {
        e.preventDefault();
        document.querySelector('#first').scrollIntoView({ behavior: 'smooth' });
    }

    scrollToWork = (e) => {
        e.preventDefault();
        document.querySelector('#section2-break').scrollIntoView({ behavior: 'smooth' });
    }

    scrollToInfo = (e) => {
        e.preventDefault();
        document.querySelector('#section4-break').scrollIntoView({ behavior: 'smooth' });
    }

    

    // currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    showSlides = async (n) =>  {
        
        let i;
        let slides = await document.getElementsByClassName("app-panel");
        // console.log(slides.length);
        // let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {await this.setState({slideIndex: 1})}
        if (n < 1) {this.setState({slideIndex: slides.length})}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "none");
        // }

        slides[this.state.slideIndex - 1].style.display = "block";
    }

    slideForward = (e, n = 1) => {
        e.preventDefault()
        console.log("slide forward");
        this.showSlides(this.state.slideIndex += n);
    }

    slideBackward = (e, n = -1) => {
        e.preventDefault()
        console.log("slide backward");
        console.log("From plusSlides - n: " + n);
        this.showSlides(this.state.slideIndex += n);
    }



    
    // showSlides(slideIndex);

    render() {

        return (
            <>
                <div id="invisible-header"></div>
                <div id="main-navbar">
                    <ul>
                        <li><button id="profile-button" onClick={this.scrollToProfile}><i className="fas fa-user icon" ></i></button></li>
                        <li><button id="work-button" onClick={this.scrollToWork}><i className="fas fa-briefcase  icon"></i></button></li>
                        <li><button id="info-button" onClick={this.scrollToInfo}><i className="fas fa-info-circle fa-10x icon"></i></button></li>
                    </ul>
                </div>
                <div id="first">
                    <h1 id="first-section"></h1>
                </div>
                <div id="green" className="section">
                    <div id="title-section">
                        <div id="title" className="title">
                            <img id="profile-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/photo_50.jpg" />
                            <h4>Jonathan C. Seubert</h4>
                            <h4>Writer & UX Engineer</h4>
                        </div>
                        {/* <div id="profile-section">
                            <h5>
                            I'm an artist and technologist who is constantly striving to
                            perfect my craft as a writer of screenplays as well as software
                            programs. I'm constantly endeavouring to use my artistic and
                            technological skills to develop projects that are thought provoking
                            and enrich people's lives.
                            </h5>
                        </div>
                        <div id="apps-next" className="next-icon">
                            <button id="profile-section-next" onClick={this.scrollToWork}><i className="fas fa-chevron-down"></i></button>
                        </div> */}
                    </div>
                </div>
                <div id="section2-break" className="section-break"></div>
                <Apps />
                <Writing />
                <SoundVideo />
                <div id="section4-break" className="section-break"></div>
                <InfoSection />
            </>
        )
    }

}

export default Landing;