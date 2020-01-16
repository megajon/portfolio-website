import React from 'react'
import ReactDOM from 'react-dom';

const Landing = () => {
    const scrollToProfile = (e) => {
        e.preventDefault();
        document.querySelector('#section1-break').scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToWork = (e) => {
        e.preventDefault();
        document.querySelector('#section2-break').scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToInfo = (e) => {
        e.preventDefault();
        document.querySelector('#section3-break').scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <div id="invisible-header"></div>
            <div id="main-navbar">
                <ul>
                    <li><button id="profile-button" onClick={scrollToProfile}><i class="fas fa-user icon" ></i></button></li>
                    <li><button id="work-button" onClick={scrollToWork}><i class="fas fa-briefcase  icon"></i></button></li>
                    <li><button id="info-button" onClick={scrollToInfo}><i class="fas fa-info-circle fa-10x icon"></i></button></li>
                </ul>
            </div>
            <div id="first">
                <h1 id="first-section"></h1>
            </div>
            <div id="title-page" className="section">
                <div id="title" className="title">
                    <h1>Jonathan C. Seubert</h1>
                    <h1>Creative Technologist</h1>
                </div>
                <div id="link-to-profile">
                    <a href="#" onClick={scrollToWork}><i class="fas fa-chevron-circle-down next-section"></i></a>
                </div>
            </div>
            <div id="section1-break" className="section-break"></div>
            <div id="green" className="section">
                <div><h1 className="section-content">Green Section</h1></div>
                <div id="green-content"><h1>Green Content</h1></div>
            </div>
            <div id="section2-break" className="section-break"></div>
            <div id="blue" className="section">
                <div id="blue-content"><h1 className="section-content">Blue Section</h1></div>
            </div>
            <div id="section3-break" className="section-break"></div>
            <div id="yellow" className="section">
                <div id="yellow-content"><h1 className="section-content">Yellow Section</h1></div>
            </div>
            <div id="section4-break" className="section-break"></div>
        </>
    )

}

export default Landing;