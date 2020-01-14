import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';
// import store from './store';

const initialState = {};

const middleware = [reduxThunk];

const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
);