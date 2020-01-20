import React, {Component} from 'react';

class StockTwitsHeader extends Component {
    render() {
        return (
            <>
            <div className="page-header">
                <ul className="header-items">
                    <li className="header-back-button"><a href="/"><button className="back-button">&#8592; back</button></a></li>
                    <li><p className="header-title">Search StockTwits</p></li>
                    <li className="question-modal"><button className="modal-button">?</button></li>
                </ul>
            </div>
            </>
        )
    }
}

export default StockTwitsHeader;