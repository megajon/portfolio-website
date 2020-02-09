import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom';
import ProjectSecton from '../components/ProjectSection'
import InfoSection from '../components/InfoSection';
import Apps from '../components/Apps';
import Writing from '../components/Writing';
import SoundVideo from '../components/SoundVideo';
import NavBar from '../components/NavBar';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1
        }
        // this.scrollToProfile = this.scrollToProfile.bind(this);
        // this.scrollToApps = this.scrollToApps.bind(this);
        this.showApps = this.showApps.bind(this);
        this.showWriting = this.showWriting.bind(this);
        this.showAV = this.showAV.bind(this);

    }

    componentDidMount() {
        document.querySelectorAll("div.project-container").forEach(section => section.style.display = "none");
        document.querySelectorAll('.tabs-underline').forEach(tab => tab.style.display = "none");
        document.querySelector("#apps-hr").style.display = "block";
        document.querySelector("div#apps-container").style.display = "block";
    }

    // scrollToProfile = (e) => {
    //     e.preventDefault();
    //     document.querySelector('#profile-section').scrollIntoView({ behavior: 'smooth' });
    // }

    // scrollToApps = (e) => {
    //     e.preventDefault();
    //     document.querySelector('#projects-section').scrollIntoView({ behavior: 'smooth' });
    //     console.log("scroll clicked")
    // }

    showApps = (e) => {
        e.preventDefault();
        document.querySelectorAll("div.project-container").forEach(section => section.style.display = "none");
        document.querySelectorAll('.tabs-underline').forEach(tab => tab.style.display = "none");
        document.querySelector("div#apps-container").style.display = "block";
        document.querySelector("#apps-hr").style.display = "block";
        document.querySelector('#scrollTo').scrollIntoView({ behavior: 'smooth' });
    }
    
    showWriting = (e) => {
        e.preventDefault();
        document.querySelectorAll("div.project-container").forEach(section => section.style.display = "none");
        document.querySelectorAll('.tabs-underline').forEach(tab => tab.style.display = "none");
        document.querySelector("div#writing-container").style.display = "block";
        document.querySelector("#writing-hr").style.display = "block";
        document.querySelector('#scrollTo').scrollIntoView({ behavior: 'smooth' });
    }
    
    showAV = (e) => {
        e.preventDefault();
        document.querySelectorAll("div.project-container").forEach(section => section.style.display = "none");
        document.querySelectorAll('.tabs-underline').forEach(tab => tab.style.display = "none");
        document.querySelector("div#av-container").style.display = "block";
        document.querySelector("#av-hr").style.display = "block";
        document.querySelector('#scrollTo').scrollIntoView({ behavior: 'smooth' });
    }

    render() {

        return (
            <>
                <div id="profile-section" class="section">
                    <div id="profile-image-container">
                        <img id="profile-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/photo_50.jpg" />
                    </div>
                    <div id="profile-title-container">
                        <p>Jonathan C. Seubert</p>
                        <p>Writer   &   UX Engineer</p>
                    </div>
                    {/* <div id="social-media-containter"> */}
                        <ul id="social-media-icons">
                            <li><a href="https://www.linkedin.com/in/jonathan-seubert"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-linkedin-4-240.png" /></a></li>
                            <li><a href="https://github.com/megajon"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-github-1.svg" /></a></li>
                            <li><a href="https://twitter.com/seubert_c"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-twitter-4.svg" /></a></li>
                            <li><a href="https://www.facebook.com/jonathan.seubert"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-facebook-4.svg" /></a></li>
                            <li><a href="mailto:jonathan.seubert@megajon.com"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-email-10.svg" /></a></li>
                            <li><a href="https://seubsworld-assets.s3.amazonaws.com/assets/JonathanSeubert_Resume.pdf" ><div id="cv-link"><div id="cv-link-text">CV</div></div></a></li>
                        </ul>
                    {/* </div> */}
                </div>
                <div id="scrollTo"></div>
                <div id="projects-section" class="section">
                    <div id="project-tabs-container">
                        <ul>
                            <li><p onClick={this.showApps}>Apps</p><hr id="apps-hr" class="tabs-underline"></hr></li>
                            <li><p onClick={this.showWriting}>Writing</p><hr id="writing-hr" class="tabs-underline"></hr></li>
                            <li><p onClick={this.showAV}>AV</p><hr id="av-hr" class="tabs-underline"></hr></li>
                        </ul>
                    </div>
                    <Apps />
                    <Writing />
                    <SoundVideo />
                </div>
                <NavBar />
                {/* <div id="navbar">
                    <ul>
                        <li><button onclick="document.querySelector('#profile-section').scrollIntoView({ behavior: 'smooth' });"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-user-1-240.png" /></button></li>
                        <li><button onclick="document.querySelector('#projects-section').scrollIntoView({ behavior: 'smooth' });"><img id="profile-icon" src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-briefcase-3-240.png" /></button></li>
                    </ul>
                </div> */}
                {/* <div id="invisible-header"></div>
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
                    <div class="icon-bar"> 
                        <a href="#" id="apps-tab" onClick={this.showApps}>Apps</a> 
                        <a href="#" id="writing-tab" onClick={this.showWriting}>Writing</a>
                        <a href="#" id="av-tab" onClick={this.showAV}>AV</a> 
                    </div>
                {/* </div> */}
                {/* <div id="section2-break" className="section-break"></div>
                <Apps />
                <Writing />
                <SoundVideo />
                <div id="section4-break" className="section-break"></div>
                <InfoSection /> */}
            </>
        )
    }

}

export default Landing;