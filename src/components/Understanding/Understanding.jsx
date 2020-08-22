import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: '',
    }

    handleChange = (event) => {
       console.log('typing');
       this.setState({
           understanding: event.target.value
       })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if( this.state.understanding !== '' ){
            this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state});
            this.props.history.push('/support');
        } else {
            alert('Please pick a number between 1 and 5.')
        }
    }

    render() {
        return (
            <>
             <div>
                    <h2>How well are you understanding the material?</h2>

                    <form onSubmit={this.handleSubmit}>
                        <input type="number" min="1" max="5" placeholder="Understanding?" onChange={this.handleChange}/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </>
        )
    }
}



export default connect()(Understanding);