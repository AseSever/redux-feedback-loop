import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        support: '',
    }

    handleChange = (event) => {
        console.log('typing');
        this.setState({
            support: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.support !== '') {
            this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state });
            this.props.history.push('/comments');
        } else {
            alert('Please pick a number between 1 and 5.')
        }
    }

    render() {
        return (
            <>
                <div>
                    <h2>How much are you feeling supported?</h2>

                    <form onSubmit={this.handleSubmit}>
                        <input type="number" min="1" max="5" placeholder="Support?" onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </>
        )
    }
}



export default connect()(Support);