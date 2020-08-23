import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmitSuccess extends Component {

    // sending home and clearing reducers
    handleReturn = () => {
        this.props.dispatch({ type: 'CLEAR_FEEDBACK'})
        this.props.history.push('/')
    }

    render() {
        return(
            <>
                <h1>Thank you for your feedback!</h1>
                <button onClick={this.handleReturn}>Return Home</button>
            </>
        )
    }
}



export default connect()(SubmitSuccess);