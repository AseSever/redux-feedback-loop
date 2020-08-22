import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewItems from '../ReviewItems/ReviewItems';
import axios from 'axios';


class ReviewFeedback extends Component {



    render() {
        console.log(this.props.reduxState.feelingFeedback.feeling);
        return (
            <>
                <div>
                    <h2>Review Your Feedback</h2>
                    <p>Feeling: {this.props.reduxState.feelingFeedback.feeling}</p>
                    <p>Understanding: {this.props.reduxState.understandingFeedback.understanding}</p>
                    <p>Support: {this.props.reduxState.supportFeedback.support}</p>
                    <p>Comments: {this.props.reduxState.commentsFeedback.comments}</p>
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