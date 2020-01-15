import React from 'react';
import TwitsList from '../components/stocktwits/TwitsList';
import SearchForm from '../components/stocktwits/SearchForm';

const Stocktwits = () => {
    return (
        <>
            <SearchForm />
            <TwitsList />
        </>
    )
}

export default Stocktwits;