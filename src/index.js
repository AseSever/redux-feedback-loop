import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

/**------ Feeling Reducer ------**/
const feelingFeedback = (state = {}, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload
    }
    // clearing reducer
    if (action.type === 'CLEAR_FEEDBACK') {
        return {}
    }
    if (action.type === 'CLEAR_FEELING') {
        return {}
    }
    return state
} // end feeling reducer

/**------ Understanding Reducer ------**/
const understandingFeedback = (state = {}, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    }
    // clearing reducer
    if (action.type === 'CLEAR_FEEDBACK') {
        return {}
    }
    if (action.type === 'CLEAR_UNDERSTANDING') {
        return {}
    }
    return state
} // end understanding reducer

/**------ Support Reducer ------**/
const supportFeedback = (state = {}, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    }
    // clearing reducer
    if (action.type === 'CLEAR_FEEDBACK') {
        return {}
    }
    if (action.type === 'CLEAR_SUPPORT') {
        return {}
    }
    return state
} // end support reducer

/**------ Comments Reducer ------**/
const commentsFeedback = (state = {}, action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload
    }
    // clearing reducer
    if (action.type === 'CLEAR_FEEDBACK') {
        return {}
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
