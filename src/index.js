import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


const feelingFeedback = (state = {}, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload
    }
    return state
} // end feeling reducer

const understandingFeedback = (state = {}, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    }
    return state
} // end understanding reducer

const supportFeedback = (state = {}, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    }
    return state
} // end support reducer

const commentsFeedback = (state = {}, action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload
    }
    return state
} // end comments reducer

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
