import React, {Component} from 'react';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            currentSymbolsList: []
        }

        this.hideModal = this.hideModal.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        // this.props.getTwitsList();
    }

    hideModal(e) {
        e.preventDefault();
        let modal = document.getElementById("stocktwits-modal");
        modal.style.display = "none";
        console.log("It works.");
    }

    render() {
        return (
            <>
                <div id="stocktwits-modal" className="modal">
                    <div className="modal-content">
                        <span id="hide-modal" className="close" onClick={this.hideModal}>&times;</span>
                        <p>
                            Search Stocktwits is an application that utilizes a public API 
                            from the website Stocktwits.com, which allows users comment on various
                            to post comments on various stocks. When a user enters a valid ticker symbol, 
                            or multiple symbols seperated by a comma, a list of button will appear in the 
                            body of the application that displays 30 of the most recent twits when pressed. 
                            Every ten minutes the application will update any symbols in the list with the
                            latest posts from Stocktwits.com users.

                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Modal;