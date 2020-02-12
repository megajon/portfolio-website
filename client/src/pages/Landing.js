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
                        <ul id="social-media-icons">
                            <li><a href="https://www.linkedin.com/in/jonathan-seubert"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-linkedin-4-240.png" /></a></li>
                            <li><a href="https://github.com/megajon"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-github-1.svg" /></a></li>
                            <li><a href="https://twitter.com/seubert_c"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-twitter-4.svg" /></a></li>
                            <li><a href="https://www.facebook.com/jonathan.seubert"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-facebook-4.svg" /></a></li>
                            <li><a href="mailto:jonathan.seubert@megajon.com"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-email-10.svg" /></a></li>
                            <li><a href="https://seubsworld-assets.s3.amazonaws.com/assets/JonathanSeubert_Resume.pdf" ><div id="cv-link"><div id="cv-link-text">CV</div></div></a></li>
                        </ul>
                        <div id="scrollTo"></div>
                </div>
                
                <div id="projects-section" class="section">
                    <div id="project-tabs-container">
                        <ul>
                            <li><p onClick={this.showApps}>Apps</p><hr id="apps-hr" class="tabs-underline"></hr></li>
                            <li><p onClick={this.showWriting}>Writing</p><hr id="writing-hr" class="tabs-underline"></hr></li>
                            <li><p onClick={this.showAV}>AV</p><hr id="av-hr" class="tabs-underline"></hr></li>
                        </ul>
                    </div>
                    <div id="projects-container">
                        <Apps />
                        <Writing />
                        <SoundVideo />
                    </div>
                </div>
                {/* <NavBar /> */}
            </>
        )
    }

}

export default Landing;