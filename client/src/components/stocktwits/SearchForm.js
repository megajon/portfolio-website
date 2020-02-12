import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSymbols } from '../../actions/index';



class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            currentSymbolsList: []
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        // this.props.getTwitsList();
    }

    onChange(e) {
        this.setState({ searchQuery: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const symbols = this.state.searchQuery.split(',').map(s => s.toUpperCase().trim());
        console.log(symbols.reverse());
        symbols.forEach(symbol => {
            console.log(symbol);
            this.props.addSymbols(symbol);
        })
        this.setState({searchQuery: ''});
    }

    render() {
        console.log(this.props.list);
        return (
        <>
        <div className="search-box">
            <div className="search-form">
                <form id="stocktwits-search-form" onSubmit={this.onSubmit}>
                    <input type="text" id="stocktwits-search-field" name="searchQuery" onChange={this.onChange} value={this.state.searchQuery} />
                    <img id="stocktwits-search-button" src="https://seubsworld-assets.s3.amazonaws.com/assets/iconmonstr-magnifier-2-240.png" onClick={this.onSubmit} />
                </form>
            </div>
        </div>
        </>
    )
    
    }
};

const mapStateToProps = state => ({
    list: state.search.list
})

export default connect(null, { addSymbols })(SearchForm);