import React from 'react';
import StocktwitsHeader from '../components/stocktwits/StockTwitsHeader';
import SearchForm from '../components/stocktwits/SearchForm';
import TwitsList from '../components/stocktwits/TwitsList';
import { compose } from 'redux';


const Stocktwits = () => {
    return (
        <>
            <StocktwitsHeader />
            <SearchForm />
            <TwitsList />
        </>
    )
}

export default Stocktwits;