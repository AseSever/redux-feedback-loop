import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmitSuccess extends Component {

    handleReturn = () => {
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