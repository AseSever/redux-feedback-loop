import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: '',
    }

    handleChange = (event) => {
        console.log('typing');
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
            this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state });
            this.props.history.push('/review');
      
    }

    handleBackBtn = () => {
        this.props.dispatch({ type: 'CLEAR_SUPPORT'});
        this.props.history.push('/support')
    }

    render() {
        return (
            <>
                <div>
                    <h2>Any comments or thoughts you would like to leave?</h2>

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Comments?" onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                    <button onClick={this.handleBackBtn}>Back</button>
                </div>
            </>
        )
    }
}



export default connect()(Comments);