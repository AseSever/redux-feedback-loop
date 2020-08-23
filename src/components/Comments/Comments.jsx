import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL-UI
import { Paper, Button, Grid, Card, TextField } from '@material-ui/core'

class Comments extends Component {

    state = {
        comments: '',
    }

    handleChange = (event) => {
        console.log('typing');
        this.setState({
            comments: event.target.value
        })
    } // end handleChange

    handleSubmit = (event) => {
        event.preventDefault();
            this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state });
            this.props.history.push('/review');
      
    } // end handleSubmit

    handleBackBtn = () => {
        this.props.dispatch({ type: 'CLEAR_SUPPORT'});
        this.props.history.push('/support')
    } // end handleBackBtn

    render() {
        return (
            <>
             <div className="form">
                    <Paper elevation={3}>
                        <Grid container justify="space-around" alignItems="center">
                            <Grid item >
                                <h2>Any comments or thoughts you would like to leave?</h2>
                                <form onSubmit={this.handleSubmit}>
                                    <Grid item >
                                        <TextField id="standard-basic"
                                            label="Comments?"
                                            type="text"
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



export default connect()(Comments);