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
                        <p>Some text in the Modal...</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Modal;