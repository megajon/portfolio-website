import React, {Component} from 'react';

class ProjectSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        }
        this.scrollToProfile = this.scrollToProfile.bind(this);
        this.scrollToWork = this.scrollToWork.bind(this);
        this.scrollToInfo = this.scrollToInfo.bind(this);
        this.slideForward = this.slideForward.bind(this);
        this.slideBackward = this.slideBackward.bind(this);

    }

    componentWillMount() {
        const renderSlides = async () => {
            let slides = await document.getElementsByClassName("project-panel");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[this.state.slideIndex].style.display = "block";
            slides[this.state.slideIndex].style.background = "silver";
        }
        renderSlides();
    }


    scrollToProfile = (e) => {
        e.preventDefault();
        document.querySelector('#section1-break').scrollIntoView({ behavior: 'smooth' });
    }

    scrollToWork = (e) => {
        e.preventDefault();
        document.querySelector('#section2-break').scrollIntoView({ behavior: 'smooth' });
    }

    scrollToInfo = (e) => {
        e.preventDefault();
        document.querySelector('#section3-break').scrollIntoView({ behavior: 'smooth' });
    }

    

    // currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    showSlides = async (n) =>  {
        let i;
        let slides = await document.getElementsByClassName("project-panel");
        if (n > slides.length) {await this.setState({slideIndex: 1})}
        if (n < 1) {this.setState({slideIndex: slides.length})}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

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

    render() {
        return (
            <>
                <div id="blue" className="section">
                    <div className="section-title"><h1>projects</h1></div>
                                               
                            <div id="chapter-panel" className="project-panel panel">
                                <a href="/chapter">
                                    <div className="panel-content">
                                        <p>chapter</p>
                                    </div>
                                </a>
                            </div>   
                        
                        
                            <div id="pirates-panel" className="project-panel panel">
                                <div className="panel-content">
                                    <p>pirates</p>
                                </div>
                            </div>
                        <div id="panel-controls">
                            <center>
                            <a href="#" id="prev" className="prev" onClick={this.slideBackward}><i className="fas fa-step-backward"></i></a>
                            <a href="#" id="next" className="next" onClick={this.slideForward}><i className="fas fa-step-forward"></i></a>
                            </center>
                        </div>
                    <center>
                    <div id="projects-next" className="next-icon">
                        <button id="app-section-next" onClick={this.scrollToInfo}><i className="fas fa-chevron-down"></i></button>
                    </div>
                    </center>
                </div>
            </>
        )
    }
}

export default ProjectSection;