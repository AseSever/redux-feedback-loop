import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// reducer for feelings
const feelingFeedback = (state = {}, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload
    }
    return state
}

const understandingFeedback = (state = {}, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    }
    return state
}

const supportFeedback = (state = {}, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    }
    return state
}

const commentsFeedback = (state = {}, action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload
    }
    return state
}


const reduxStore = createStore(
    combineReducers({
        feelingFeedback,
        understandingFeedback,
        supportFeedback,
        commentsFeedback
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
