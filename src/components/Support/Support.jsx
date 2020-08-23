import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL-UI
import { Paper, Button, Grid, Card, TextField } from '@material-ui/core'

class Support extends Component {

    state = {
        support: '',
    }

    handleChange = (event) => {
        console.log('typing');
        this.setState({
            support: event.target.value
        })
    } // end handleChange

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.support !== '') {
            this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state });
            this.props.history.push('/comments');
        } else {
            alert('Please pick a number between 1 and 5.')
        }
    } // end handleSubmit

    handleBackBtn = () => {
        this.props.dispatch({ type: 'CLEAR_UNDERSTANDING' });
        this.props.history.push('/understanding')
    } // end handlBackBtn

    render() {
        return (
            <>
                <div className="form">
                    <Paper elevation={3}>
                        <Grid container justify="space-around" alignItems="center">
                            <Grid item >
                                <h2>How well are you feeling supported?</h2>
                                <form onSubmit={this.handleSubmit}>
                                    <Grid item >
                                        <TextField id="standard-basic"
                                            label="Standard"
                                            type="number"
                                            inputProps={{ min: "1", max: "5" }}
                                            placeholder="Support?"
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



export default connect()(Support);