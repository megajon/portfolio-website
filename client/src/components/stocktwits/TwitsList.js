import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTwits } from '../../actions/index';
import { deleteSymbol } from '../../actions/index';
const ta = require('time-ago');

class TwitsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: false,
            dropdownClass: 'dropdown-content',
            toShow: '',
            toDelete: '',

        }
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleList = this.toggleList.bind(this);
    }

    componentWillMount() {
        this.props.getTwits();
        
    }

    componentDidMount() {
        this.timerID = setInterval(
                () => this.props.getTwits(),
                10000
        )
    }
        
    

    

    onSubmit(e) {
        e.preventDefault();

        this.props.deleteSymbol(e.target.value);
    }

    toggleList(e) {
        if (this.state.showList && this.state.toShow !== e.target.id) {
            this.setState({showList: true, toShow: e.target.id});
        } else {
            this.setState({showList: !this.state.showList, toShow: e.target.id})
        }
    }

    render() {
        const {showList, toShow} = this.state;

        const symbolList = this.props.search.map(symbol => (
            <div key={symbol._id} className="dropdown">
                <button id={symbol.symbol} onClick={this.toggleList} className="twit-button dropbtn">{symbol.twits.length} twits for {symbol.symbol}<button onClick={this.onSubmit} className="delete-button" value={symbol.symbol}>X</button></button>              
                <div className={`${showList && toShow == symbol.symbol ? "dropdown-content" : "hidden-content"}`}>
                    <p></p>
                    {symbol.twits.sort(function (a,b) {return b.id - a.id}).map(twit => {
                        return (
                        <li key={twit.id}>
                            <p className="user">{twit.username} - {ta.ago(`${twit.stocktwits_timestamp}`)}</p>
                            <p className="post">{twit.body}</p>
                            <p></p>
                            <hr></hr>
                        </li>
                        )
                    }
                    )}
                </div>
            </div>
        ));
        return (
            <>
            <div className="list-section">
                {symbolList}
            </div>
            </>
        );
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         toDelete: ''
    //     }
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
    // componentWillMount() {
    //     this.props.getTwits();
        
    // }

    // onSubmit(e) {
    //     e.preventDefault();

    //     this.props.deleteSymbol(e.target.value);
    // }

    // expandTwits() {
    //     document.getElementById("twits").classList.toggle("show");
    // }
    // render() {
    //     console.log(this.props.search)
    //     const symbolList = this.props.search.map(symbol => (
    //         <div key={symbol._id}>
    //             <h3>{symbol.twits.length} {symbol.symbol} Twits</h3>
    //             <button>twits</button>
    //             <button onClick={this.onSubmit} value={symbol.symbol}>delete</button>
    //             {symbol.twits.map(twit => (
    //                 <div id="twits" className="dropdown-content" key={twit.id}>
    //                     <h4>{twit.username}</h4>
    //                     <h4>{twit.stocktwits_timestamp}</h4>
    //                     <h4>{twit.body}</h4>
    //                     <hr/>
    //                 </div>
    //                 ))
    //             }
    //         </div>
    //     ))
    //     return (
    //         <>
    //         <h1>Twits</h1>
    //         {symbolList}
    //         </>
    //     );
    // }
};

// Search.propTypes = {
//     getTwits: PropTypes.func.isRequired,
//     search: PropTypes.array.isRequired
// }

const mapStateToProps = state => ({
    search: state.search.symbols
})

export default connect(mapStateToProps, { getTwits, deleteSymbol })(TwitsList);