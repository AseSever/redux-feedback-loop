import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL-UI
import { Paper, Button, Grid, Card, TextField } from '@material-ui/core'

class SubmitSuccess extends Component {

    // sending home and clearing reducers
    handleReturn = () => {
        this.props.dispatch({ type: 'CLEAR_FEEDBACK' })
        this.props.history.push('/')
    } // end handle return

    render() {
        return (
            <>
                <h1>Thank you for your feedback!</h1>
                <Button variant="contained"
                    color="primary"
                    onClick={this.handleReturn}
                >
                    Return Home
                </Button>
            </>
        )
    }
}



export default connect()(SubmitSuccess);