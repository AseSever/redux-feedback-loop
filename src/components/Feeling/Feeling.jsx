import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL-UI
import { Paper, Button, Grid, Card, TextField } from '@material-ui/core'


class Feeling extends Component {

    state = {
        feeling: '',
    }

    handleChange = (event) => {
        console.log('typing');
        this.setState({
            feeling: event.target.value
        })

    } // end handleChange

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.feeling !== '') {
            this.props.dispatch({ type: 'SET_FEELING', payload: this.state });
            this.props.history.push('/understanding');
        } else {
            alert('Please pick a number between 1 and 5.');
        }
    } // end handleSubmit



    render() {
        console.log(this.state);

        return (
            <>
                <div className="form">
                    <Paper elevation={3}>
                        <Grid container justify="space-around" alignItems="center">
                            <Grid item >
                                <h2>How are you feeling today?</h2>
                                <form onSubmit={this.handleSubmit}>
                                    <Grid item >
                                    <TextField id="standard-basic"
                                        label="Standard"
                                        type="number"
                                        inputProps={{ min: "1", max: "5" }}
                                        placeholder="Feeling?"
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

                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </>
        )
    }
}


export default connect()(Feeling);