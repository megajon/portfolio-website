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
                    <li className="header-back-button"><a href="/"><i class="fa fa-arrow-left"></i></a></li>
                    <li><p className="header-title">Search StockTwits</p></li>
                    <li className="question-modal"><button id="stocktwits-question" className="modal-button" onClick={this.showModal}>?</button></li>
                </ul>
            </div>
            </>
        )
    }
}

export default StockTwitsHeader;