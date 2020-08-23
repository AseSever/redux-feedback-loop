import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL-UI
import { Paper, Button, Grid, Card, TextField } from '@material-ui/core';

class Understanding extends Component {

    state = {
        understanding: '',
    }

    handleChange = (event) => {
        console.log('typing');
        this.setState({
            understanding: event.target.value
        })
    } // end handleChange

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.understanding !== '') {
            this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state });
            this.props.history.push('/support');
        } else {
            alert('Please pick a number between 1 and 5.')
        }
    } // end handleSubmit

    handleBackBtn = () => {
        this.props.dispatch({ type: 'CLEAR_FEELING' });
        this.props.history.push('/')
    } // end handleBackBtn

    render() {
        return (
            <>
                <div className="form">
                    <Paper elevation={3}>
                        <Grid container justify="space-around" alignItems="center">
                            <Grid item >
                                <h2>How well are you understanding the material?</h2>
                                <form onSubmit={this.handleSubmit}>
                                    <Grid item >
                                        <TextField id="standard-basic"
                                            label="Understanding?"
                                            type="number"
                                            inputProps={{ min: "1", max: "5" }}
                                            onChange={this.handleChange}
                                        />
                                    &nbsp;
                                    <Button variant="contained"
                                            color="primary"
                                            type="submit">
                                            Submit
                                    </Button>
                                    </Grid>
                                </form>
                                &nbsp;
                                <Grid item >
                                    <Button variant="contained"
                                        color="secondary"
                                        onClick={this.handleBackBtn}
                                    >
                                        Back
                                    </Button>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </>
        )
    }
}



export default connect()(Understanding);