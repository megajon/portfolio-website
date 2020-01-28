import React, {Component} from 'react';
import BackButton from '../components/BackButton';

class OmegaMan extends Component {
    render() {
        return (
            <>
                <div className="page-header">
                    <ul className="header-items">
                        <BackButton />
                    </ul>
                </div>
                <div className="page-title">
                    <h2>The Omega Man:</h2>
                    <h2>A Sound Experience</h2>
                </div>
                <div className="project-image-div">
                    <img className="project-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/omega-man.jpg" />
                    <div id="omega-man-audio">
                        <audio src="https://seubsworld-assets.s3.amazonaws.com/assets/Omega_Man_Rough+5.mp3" controls />
                    </div>
                </div>
                <div id="omega-content" className="page-content">
                    <p>
                    This was one of the most difficult, but rewarding projects that I worked on during my time in film school. 
                    The assignment, which was for my Sound 2 Class, was to select a script for an existing film and adapted it
                    into a 2-5 minute piece using only sound effects, voice over, and music. No visuals.
                    </p>
                    <br></br>
                    <p>
                    It was originally supposed to be a group project with me and two other guys, but the bums couldn’t be
                    bothered to keep in touch or contribute anything meaningful. Three weeks behind schedule with a week
                    to go before the project is due, I finally realize that the bums are never going to contribute anything,
                    so I take it upon myself to write the script for the project and put it together all by myself. I spent
                    countless hours in post production labs at my school putting together as many sound effects, music cues,
                    and voice overs that I could scrounge together in a week. It was a grueling process, but I was able to
                    finish the project the night before it was due and ended up getting the highest grade in the class.
                    </p>
                    <br></br>
                    <p>
                    The source material for the 1971 film The Omega Man starring Charleton Heston. Based on the 1954 novel
                    I Am Legend by Richard Matheson, the film follows U.S. Army Colonel. Robert Neville, M.D. as he battles
                    for his life against an army of nocturnal mutants in the aftermath of a biological war between Russia
                    and China that has seemingly caused a plague that has infected the entire planet, except for Neville.
                    </p>
                </div>
            </>
        )
    }
}

export default OmegaMan;