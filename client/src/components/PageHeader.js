import React, {Component} from 'react';
import DownloadPDF from './DownloadPDF';

class PageHeader extends Components {
    render () {
        return (
            <>
              <div className="page-header">
                <ul className="header-items">
                  <BackButton src={this.props.src} />
                  <DownloadPDF url={this.props.url} />
                </ul>
              </div>
            </>
        )
    }
}

export default PageHeader;