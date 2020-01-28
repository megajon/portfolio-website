import React, {Component} from 'react';

class DownloadPDF extends Component {
    render() {
        return (
            <a href={this.props.url} className="download-button">Download PDF</a>
        )
    }
}

export default DownloadPDF;