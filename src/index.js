import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// reducer for taking in all feedback 
const feedbackReducer = (state = [], action) => {
    if (action.type === 'SET_FEELING') {
        return [...state, action.payload]
    }
    if (action.type === 'SET_UNDERSTANDING') {
        return [...state, action.payload]
    }
    if (action.type === 'SET_SUPPORT') {
        return [...state, action.payload]
    }

    return state
}


const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
