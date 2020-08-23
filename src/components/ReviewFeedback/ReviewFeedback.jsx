import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class ReviewFeedback extends Component {



    postFeedback = () => {
        const feedback = {
            feeling: this.props.reduxState.feelingFeedback.feeling,
            understanding: this.props.reduxState.understandingFeedback.understanding,
            support: this.props.reduxState.supportFeedback.support,
            comments: this.props.reduxState.commentsFeedback.comments
        }
        console.log(feedback);
        axios.post('/api/feedback', feedback)
            .then(response => {
                this.props.history.push('/submit')
            })
            .catch(error => {
                console.log('Error in POST request', error);
                alert('Error in submitting information. Please try again')
            });

    }

    render() {
        console.log(this.props.reduxState);
        return (
            <>

                <div>
                    <h2>Review Your Feedback</h2>
                    <p>Feeling: {this.props.reduxState.feelingFeedback.feeling}</p>
                    <p>Understanding: {this.props.reduxState.understandingFeedback.understanding}</p>
                    <p>Support: {this.props.reduxState.supportFeedback.support}</p>
                    <p>Comments: {this.props.reduxState.commentsFeedback.comments}</p>
                    <button onClick={this.postFeedback}>Submit</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(ReviewFeedback);