import React, {Component} from 'react';

class StockTwitsHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            currentSymbolsList: []
        }

        this.showModal = this.showModal.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        // this.props.getTwitsList();
    }

    showModal(e) {
        e.preventDefault();
        let modal = document.getElementById("stocktwits-modal");
        modal.style.display = "block";
        console.log(modal);
    }


    render() {
        return (
            <>
                <div className="page-header">
                    <ul className="header-items">
                        <li className="back-button"><a href="/"><img className="back-button-style" src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-arrow-72-240.png" /></a></li>
                        <li className="header-title"><p>Search StockTwits</p></li>
                        <li className="info-icon"><img className="info-icon-style" src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-info-5-240.png" onClick={this.showModal} /></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default StockTwitsHeader;