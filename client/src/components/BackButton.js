import React, {Component} from 'react';

class BackButton extends Component {
    render() {
        return (
            <li className="header-back-button"><a href="/"><i class="fa fa-arrow-left"></i></a></li>
        )
    }
}

export default BackButton;