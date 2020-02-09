import React, {Component} from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div id="navbar">
                    <ul>
                        <li><button onClick="document.querySelector('#profile-section').scrollIntoView({ behavior: 'smooth' });"><img src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-user-1-240.png" /></button></li>
                        <li><button onClick="document.querySelector('#projects-section').scrollIntoView({ behavior: 'smooth' });"><img id="profile-icon" src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-briefcase-3-240.png" /></button></li>
                    </ul>
                </div>
            </>
        )
    }
    
}

export default NavBar;