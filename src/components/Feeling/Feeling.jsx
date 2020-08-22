import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Feeling.css';

class Feeling extends Component {

    state = {
        feeling: '',
    }

    handleChange = (event) => {
       console.log('typing');
       this.setState({
           feeling: event.target.value
       })
          
    }

    handleSubmit = () => {
        if( this.state.feeling !== '' ){
            this.props.dispatch({ type: 'SET_FEELING', payload: this.state})
        } else {
            alert('Please pick a number between 1 and 5.')
        }
    }



    render() {
        console.log(this.state);
        
        return (
            <>
                <div>
                    <h2>How are you feeling today?</h2>

                    <form onSubmit={this.handleSubmit}>
                        <input type="number" min="1" max="5" onChange={this.handleChange}/>
                        <input type="submit" value="Submit"/>
                    </form>

                    

                </div>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling);