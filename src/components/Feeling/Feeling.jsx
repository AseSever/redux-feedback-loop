import React, { Component } from 'react';
import { connect } from 'react-redux';


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
        if( this.state.feeling !== '' ){
            this.props.dispatch({ type: 'SET_FEELING', payload: this.state});
            this.props.history.push('/understanding');
        } else {
            alert('Please pick a number between 1 and 5.');
        } 
    } // end handleSubmit



    render() {
        console.log(this.state);
        
        return (
            <>
                <div>
                    <h2>How are you feeling today?</h2>

                    <form onSubmit={this.handleSubmit}>
                        <input type="number" min="1" max="5" placeholder="Feeling?" onChange={this.handleChange}/>
                        <input type="submit" value="Submit"/>
                    </form>
                    <div>
                        
                    </div>
                </div>
            </>
        )
    }
}


export default connect()(Feeling);