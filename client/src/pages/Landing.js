import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom';
import ProjectSecton from '../components/ProjectSection'
import InfoSection from '../components/InfoSection';
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

    componentWillMount() {
        const renderSlides = async () => {
            let slides = await document.getElementsByClassName("app-panel");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[0].style.display = "block";
            slides[this.state.slideIndex].style.background = "silver";
        }
        renderSlides();
    }


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
                            <h4>Jonathan C. Seubert</h4>
                            <h4>Creative Technologist</h4>
                        </div>
                        <div id="profile-section">
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
                        </div>
                    </div>
                </div>
                <div id="section2-break" className="section-break"></div>
                <a href="/johnbrown">
                <div id="john-brown-link">
                    <img id="john-brown-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/main_middle.jpg" width="100%" />
                    <p className="link-title">John Brown - Screenplay</p>
                    {/* <div className="link-title">
                        <p>John Brown - Screenplay</p>
                    </div> */}
                </div>
                </a>
                <div id="blue" className="section">
                    <div className="section-title"><h1>apps</h1></div>
                                               
                            <div id="stocktwits-panel" className="app-panel panel">
                                <a href="/stocktwits">
                                    <div className="panel-content">
                                        <p id="stocktwits-logo" className="stocktwits-content">$</p>
                                        <p id="stocktwits-title" className="stocktwits-content">Search Stocktwits</p>
                                    </div>
                                </a>
                            </div>   
                        
                        
                            <div id="green-panel" className="app-panel panel">
                                <div className="panel-content">
                                    <p>two</p>
                                </div>
                                <div className="panel-title">Panel Title</div>
                            </div>
                        
                        
                            <div id="blue-panel" className="app-panel panel">
                                <div className="panel-content">
                                    <p>three</p>
                                </div>
                                <div className="panel-title">Panel Title</div>
                            </div>
                        <div id="panel-controls">
                            <center>
                            <a href="#" id="prev" className="prev" onClick={this.slideBackward}><i class="fas fa-caret-left"></i></a>
                            <a href="#" id="next" className="next" onClick={this.slideForward}><i class="fas fa-caret-right"></i></a>
                            </center>
                        </div>
                    <center>
                    <div id="apps-next" className="next-icon">
                        <button id="app-section-next" onClick={this.scrollToInfo}><i className="fas fa-chevron-down"></i></button>
                    </div>
                    </center>
                </div>
                <div id="section3-break" className="section-break"></div>
                <div id="yellow" className="section">
                    <SoundVideo />
                </div>
                <div id="section4-break" className="section-break"></div>
                <InfoSection />
            </>
        )
    }

}

export default Landing;

{/* <div>
                        <span className="dot" onClick={currentSlide(1)}></span> 
                        <span className="dot" onClick={currentSlide(2)}></span> 
                        <span className="dot" onClick={currentSlide(3)}></span> 
                    </div> */}