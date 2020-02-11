import React, {Component} from 'react';

class BackButton extends Component {
    render() {
        return (
          <li className={this.props.class}><a href={this.props.href}><img className="back-button-style" src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-arrow-72-240.png" /></a></li>
        )
    }
}

export default BackButton;